---
title: "AirGradient Directly to Omniscope"
subtitle: "Building a private air-quality pipeline with an Android app, custom ESP32-C3 firmware—and no middleware."
date: 2026-07-26
eyebrow: "Technical build · Open source"
series: "Taranto to the sensor"
read_time: "13 min"
description: "The complete build: an Android controller, custom AirGradient firmware and a direct authenticated HTTPS pipeline into an Omniscope workflow."
image: /assets/images/omniscope-report-overview.png
image_alt: "Interactive Omniscope report populated directly by an AirGradient ONE monitor"
image_caption: "The finished result: particulate matter, VOC, NOx, temperature, humidity and CO₂ measurements sent directly from the AirGradient ONE."
next_url: /air-quality/
next_label: "Project timeline"
next_title: "From public data to citizen-owned instruments"
---

I bought an AirGradient ONE to monitor the air in my room.

Naturally, this became an Android application, a fork of its ESP32-C3 firmware,
a browser-based USB installer and a private data pipeline into Omniscope.

The finished system sends a measurement from the monitor directly to an
Omniscope workflow once per minute:

```text
AirGradient ONE
      |
      | HTTPS + Basic authentication
      | one outbound request every 60 seconds
      v
Omniscope Workflow API
      |
      +--> parse JSON
      +--> add server-side UTC timestamp
      +--> append to history
      +--> feed an interactive report
```

There is no AirGradient cloud in the data path, no Raspberry Pi polling the
device, no inbound router port, no MQTT broker and no separate Python receiver.

This article explains the complete build.

## The hardware

My monitor is an **AirGradient ONE I-9PSL**. It measures:

- CO₂;
- PM₁, PM₂.₅ and PM₁₀;
- TVOC and NOₓ indices;
- temperature;
- relative humidity.

The device uses an ESP32-C3 microcontroller with Wi-Fi and 4 MB of flash.
AirGradient publishes its firmware and hardware materials and explicitly
supports connecting the device to other data platforms.

That openness is the foundation of this project.

The stock firmware also exposes a useful
[local-server API](https://github.com/airgradienthq/arduino/blob/3.3.9/docs/local-server.md):

- `GET /measures/current` returns the current measurement JSON;
- `GET /config` returns the device configuration;
- `PUT /config` applies configuration changes;
- `/metrics` provides a metrics representation.

The API can be reached on the same network using:

```text
http://airgradient_SERIAL.local
```

or the monitor’s numeric private IP address.

![AirGradient current measurement JSON with serial number and obsolete firmware value redacted](/assets/images/airgradient-json-redacted-wide.png)

*A real `/measures/current` payload from the I-9PSL. The device serial number
and obsolete pre-fix firmware version are deliberately blacked out.*

## The constraints

There were many conventional ways to collect history from the monitor.

I could have:

- used the AirGradient cloud;
- left a local computer running to poll `/measures/current`;
- opened a router port for an external poller;
- published through MQTT;
- deployed a small HTTP receiver;
- written a Python process to parse and append the messages.

All are valid architectures in the right context. None matched this project.

I wanted:

- no vendor cloud for the measurement history;
- no always-on collector inside my home;
- no inbound access through my router;
- no broker or receiver service to operate;
- no phone-based background collector;
- a configurable destination rather than a hard-coded project;
- authenticated and encrypted transport;
- direct ingestion into the environment that would process and visualise the
  data.

The monitor already possessed the data, network connection and processor.
Making something else poll it would add a dependency.

The simplest path was to make the monitor push.

## Component one: the Android controller

The local API could be used from a browser or command-line client, but I wanted
a convenient control surface that lived on my phone.

I created
[AirGradient Omniscope for Android](https://github.com/toniopoggi/airgradient-omniscope-android).

The app can:

- connect through a `.local` hostname or private LAN IP;
- read and display current measurements;
- refresh them every five seconds when requested;
- read and edit `/config`;
- save changes with `PUT /config`;
- configure the complete Omniscope integration;
- expose an advanced JSON editor;
- remember the monitor address locally;
- use Android’s dark or light theme.

It deliberately does not collect measurements in the background. Its
responsibility is local control, not historical ingestion.

### A restricted native bridge

The interface is a small application bundled inside the APK. JavaScript calls
a native Java bridge to perform local HTTP requests, avoiding browser CORS
restrictions.

A JavaScript bridge is privileged, so the native layer is intentionally
narrow:

- only bundled HTML can load in the WebView;
- external websites are rejected;
- file and content access are disabled;
- requests must target `.local`, loopback, link-local or private LAN
  addresses;
- only `GET` and `PUT` are accepted;
- requests are restricted to `/config`, `/measures/current` and `/metrics`;
- `PUT` is accepted only for `/config`;
- redirects are disabled;
- response sizes are bounded.

AirGradient serves its local API over ordinary HTTP rather than HTTPS. The
Android network-security configuration therefore permits cleartext traffic,
but the native address policy prevents that permission from becoming a
general-purpose route to public hosts.

The app has no account, advertising, analytics SDK, cloud API or third-party
runtime library.

![Download page for the private AirGradient Omniscope Android controller](/assets/images/android-download-page.png)

*The companion Android controller is distributed as a directly installable APK
with its source and checksum. It operates only on the local network and uses no
account, analytics or cloud service.*

## Component two: the customised firmware

I forked the
[official AirGradient Arduino repository](https://github.com/airgradienthq/arduino/tree/3.3.9)
at firmware release **3.3.9** and created
[airgradient-omniscope](https://github.com/toniopoggi/airgradient-omniscope).

The build targets the ESP32-C3 used by the I-9PSL. The current tested release
is:

```text
3.3.9-omniscope.2
```

The firmware adds six configuration properties:

```json
{
  "omniscopeWorkflowEnabled": true,
  "omniscopeWorkflowEndpoint": "https://HOST/PATH/PROJECT.iox/w/execute",
  "omniscopeWorkflowBlock": "Store AirGradient Measurement",
  "omniscopeWorkflowParameter": "measurementJson",
  "omniscopeWorkflowUsername": "DEVICE_USER",
  "omniscopeWorkflowPassword": "DEVICE_PASSWORD"
}
```

These fields can be updated through the Android interface or directly through
`PUT /config`.

The complete endpoint is configurable—not merely the host. The workflow block
and parameter name are configurable too. Moving the Omniscope project,
renaming the receiving block or changing the parameter does not require
another firmware build.

The integration can also be enabled or disabled without reflashing.

### Keeping the AirGradient cloud disabled

For the private data path, the relevant configuration is:

```json
{
  "offlineMode": false,
  "postDataToAirGradient": false,
  "disableCloudConnection": true,
  "omniscopeWorkflowEnabled": true
}
```

`offlineMode` remains `false` because the networking task must run. The
AirGradient measurement and configuration cloud calls can remain disabled
while the separate Omniscope schedule continues.

This distinction matters: private operation still needs internet connectivity
for the outbound request, but it does not require the manufacturer’s data
service.

## Component three: the direct Workflow API request

Omniscope exposes a
[Workflow REST API](https://help.visokio.com/support/solutions/articles/42000073133-workflow-rest-api).
A `POST` to a project’s `/w/execute` endpoint can set parameters and execute
named workflow blocks.

Once every 60 seconds, the firmware:

1. confirms that Wi-Fi is connected;
2. confirms that the integration is enabled and configured;
3. obtains the current AirGradient measurement;
4. serialises it as JSON;
5. places that JSON inside the configured string parameter;
6. sends the authenticated HTTPS request;
7. records the HTTP result in the serial log.

The request body is:

```json
{
  "blocks": ["Store AirGradient Measurement"],
  "refreshFromSource": true,
  "cancelExisting": false,
  "waitForIdle": true,
  "params": {
    "updates": [
      {
        "name": "measurementJson",
        "value": "{\"wifi\":-55,\"rco2\":620,\"pm02\":4,...}"
      }
    ],
    "waitForIdle": true
  }
}
```

The nested JSON looks unusual at first. The AirGradient object is sent as the
value of a string parameter, so its quotation marks are escaped in the outer
request.

This creates a clean ingestion contract: one workflow parameter contains the
complete payload produced by the device.

`refreshFromSource` is set to `true`, as required by this workflow design.

## Authentication, TLS and secrets

The device authenticates with HTTP Basic authentication over HTTPS.

Basic authentication is acceptable here only because it is protected by TLS.
The endpoint must use `https://`; the firmware rejects ordinary HTTP
destinations.

The firmware contains the public root certificate needed to validate the
current `*.omniscope.me` certificate chain. It does **not** contain the
wildcard certificate, its private key or any private server material.

The private key remains on the Omniscope server where it belongs.

An unattended device must retain the Basic-auth password locally. ESP32 flash
should not be mistaken for a hardware security module, so this needs a
proportionate security model:

- use a dedicated Omniscope account;
- grant only the project permissions required for ingestion;
- do not reuse a personal or administrative password;
- rotate the credential if the device is lost or transferred.

The firmware also prevents accidental credential disclosure through the local
API. `GET /config` returns:

```json
{
  "omniscopeWorkflowPassword": "********",
  "omniscopeWorkflowPasswordSet": true
}
```

The real password is never returned. Sending `********` back during an
unrelated configuration change preserves the existing password rather than
replacing it with eight asterisks.

## Component four: the Omniscope receiving workflow

The Workflow API is not just a trigger for a finished dashboard. It is the
ingestion boundary for the complete server-side data process.

The receiving workflow:

1. accepts the configured string parameter;
2. parses the measurement JSON;
3. converts values into typed fields;
4. adds a server-side UTC receipt timestamp;
5. appends the row to historical storage;
6. organises and labels the analytical fields;
7. feeds an Omniscope Report block.

Adding time on the server gives every accepted measurement a consistent UTC
reference independent of the device clock.

Retaining the complete payload—or at least the fields not yet used in the
first report—also protects against premature data modelling. Questions change.
It is useful to preserve enough information to answer tomorrow’s questions
without redesigning the device request.

![Omniscope workflow from HTTP input through schema and field organisation to historical data and the report](/assets/images/omniscope-workflow-ingestion.png)

*The receiving workflow. The complete device payload enters through HTTP,
passes through schema and field organisation, is appended to the historical
table and feeds the Report block.*

The report can then expose:

- current and historical CO₂;
- PM₁, PM₂.₅ and PM₁₀;
- VOC and NOₓ indices;
- temperature and humidity;
- Wi-Fi strength and device metadata;
- interactive time filters;
- comparisons between measures;
- repeated daily or weekly patterns;
- event-level exploration.

![AirGradient measurements visible simultaneously in the Omniscope report and device log, with the serial number redacted](/assets/images/report-and-device-logs-redacted.png)

*The same live stream seen at both ends: measurements in the Omniscope report
and the device log. The monitor serial number is covered by an opaque
redaction.*

The workflow can write to a file or another durable source appropriate to the
deployment. It should also use a device serial number and UTC timestamp—or an
equivalent server-side key—if duplicate protection is required.

## The first version crashed

The first build compiled successfully. It flashed successfully. The monitor
started normally.

Then the first HTTPS request ran and the hardware rebooted.

The serial output eventually showed the cause:

```text
Stack overflow
```

The original networking task had a 4096-byte stack. Establishing TLS and
constructing the request needed more working memory than that.

![ESP32-C3 serial console showing a networking-task stack overflow, with device configuration and identifiers redacted](/assets/images/firmware-stack-overflow-redacted.png)

*The first TLS attempt failed with a stack overflow. The device serial number,
private configuration object and obsolete firmware version have been blacked
out.*

Version `.2` increases the networking-task stack to 12288 bytes. After that
change, the request completed and the serial log reported:

```text
Omniscope: submitting workflow (...-byte request)
Omniscope: workflow submitted (HTTP 2xx)
```

The workflow executed and a new point appeared in the report.

This was the least abstract—and most satisfying—test of the architecture.

![Omniscope report showing AirGradient particulate matter, VOC and NOx measurements](/assets/images/omniscope-report-pm-voc-nox.png)

*The practical success condition: the workflow has accepted the requests and
the incoming PM, VOC and NOₓ observations are visible in the report.*

## Failure behaviour

I intentionally left out a device-side persistent queue.

If Wi-Fi or Omniscope is unavailable, that minute is not added to the history.
The next scheduled submission tries the next current measurement.

This is a deliberate trade-off:

- no repeated writes to flash;
- no queue corruption or migration logic;
- no ambiguous replay order;
- no accidental flood after a long outage;
- no hidden miniature message broker inside the monitor.

For my use case, visible gaps are acceptable and should be monitored
server-side. A deployment requiring complete delivery would need a more
substantial buffering and deduplication design.

## Installing it

The firmware repository includes a browser-based ESP Web Tools installer.

Using desktop Chrome, Edge or another compatible Chromium browser:

1. Open the
   [AirGradient Omniscope installer](https://toniopoggi.github.io/airgradient-omniscope/).
2. Unplug the monitor.
3. Hold the recessed **BOOT** button.
4. Connect USB while continuing to hold BOOT, then release it.
5. Choose **Connect and install firmware**.
6. Select **USB JTAG / Serial Debug**.
7. Leave **Erase device** unchecked if Wi-Fi and existing configuration should
   be preserved.
8. Install the firmware.
9. Disconnect USB for approximately three seconds and reconnect normally.

The page can also restore stock firmware.

![AirGradient to Omniscope browser firmware installer with obsolete version number redacted](/assets/images/firmware-installer-redacted.png)

*The Chrome/Edge USB installer. This earlier screenshot shows the final
interface, but its obsolete pre-fix version number is deliberately hidden.*

The companion Android APK is available from the
[Android download page](https://toniopoggi.github.io/airgradient-omniscope-android/).

Custom firmware always carries risk. Keep a recovery route, preserve upstream
licensing and attribution, and understand the implications for warranty and
support before flashing.

## Building from source

The firmware uses PlatformIO:

```sh
platformio run -e esp32-c3
```

The application binary is produced at:

```text
.pio/build/esp32-c3/firmware.bin
```

The Android application uses JDK 17, Android SDK 36, Android Gradle Plugin
8.13.2 and Gradle 8.13.

From the Android project:

```sh
./gradlew assembleDebug
```

or on Windows:

```bat
gradlew.bat assembleDebug
```

The debug APK is written to:

```text
app/build/outputs/apk/debug/app-debug.apk
```

Use your own signing key for a production release.

## What this architecture demonstrates

The project is small, but it reinforced several useful design principles.

### Local control and remote analytics are compatible

The app controls the monitor only on the LAN. The device makes one outbound
request to the configured server. No external system needs inbound access to
the home network.

### Configuration belongs at the edge

Endpoints, workflow blocks and parameter names change. Keeping them
configurable prevents routine server changes from becoming firmware releases.

### A workflow can be an operational API

Omniscope is not only the destination where a chart appears. It receives,
parses, timestamps, transforms, persists and presents the data.

### Removing middleware can improve clarity

MQTT and receiver services are useful when their capabilities are required.
Here, direct workflow execution reduced the number of credentials, ports,
processes and failure points.

### Minimal systems still require real security decisions

WebView trust boundaries, local address validation, password masking,
least-privilege credentials and certificate validation still matter when the
“fleet” contains one monitor.

## Could another monitor use the same pattern?

Yes, provided it has:

- accessible current measurements;
- open or extensible firmware;
- network connectivity;
- enough memory for TLS;
- support for outbound HTTPS;
- a safe configuration mechanism.

The JSON schema can be different. The workflow parameter, parsing logic and
report can adapt to the device.

This makes the pattern relevant beyond one room or one brand. It could support
a school, office, community building or a distributed citizen-science
deployment while keeping the data path understandable and controlled by its
operators.

Personal sensors are not substitutes for regulatory monitoring stations.
Calibration, placement, maintenance and interpretation matter. But open
instruments can complement official data, support education and help
communities ask better questions.

## Source and documentation

The complete implementation is public:

- [Firmware, installer and Workflow API documentation](https://github.com/toniopoggi/airgradient-omniscope)
- [Android controller and APK](https://github.com/toniopoggi/airgradient-omniscope-android)
- [Official AirGradient firmware 3.3.9](https://github.com/airgradienthq/arduino/tree/3.3.9)
- [AirGradient local-server API](https://github.com/airgradienthq/arduino/blob/3.3.9/docs/local-server.md)
- [Omniscope Workflow REST API](https://help.visokio.com/support/solutions/articles/42000073133-workflow-rest-api)
- [Omniscope live API explorer](https://public.omniscope.me/_global_/api/)

The complete path is now:

> Sense locally. Configure locally. Push privately. Process and explore in
> Omniscope.

No mystery cloud in the middle—and just enough firmware debugging to make it
fun.
