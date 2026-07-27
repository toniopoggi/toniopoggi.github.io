---
title: "Open Hardware, Private Infrastructure and Citizen-Owned Monitoring"
subtitle: "Ownership is not one checkbox. It extends from the physical instrument and firmware to credentials, transport, history, analysis and public claims."
date: 2026-07-27 00:15:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "Open hardware · Data ownership"
series: "Citizen science and public evidence"
cluster: citizen
cluster_label: "Citizen science and public evidence"
article_order: 5
read_time: "8 min"
description: "What citizen-owned air-quality monitoring requires across open hardware, firmware, local control, private transport, stored history and responsible interpretation."
image: /assets/images/firmware-installer-redacted.png
image_alt: "Browser-based USB installer for custom AirGradient Omniscope firmware with a stock-firmware recovery option"
image_width: 1188
image_height: 1324
image_caption: "Open source is most useful when people can inspect, install and recover the instrument—not merely read a promise on a product page."
tags:
  - open hardware
  - citizen-owned monitoring
  - private infrastructure
  - AirGradient
  - environmental sensors
  - citizen science
takeaways:
  - "Ownership spans hardware, firmware, local control, credentials, network path, stored history, analytics and publishing."
  - "Open designs make adaptation and recovery possible; they also transfer responsibility for security, updates, calibration and data quality."
  - "A personal low-cost sensor complements rather than replaces a regulatory station unless a validated deployment supports stronger claims."
next_url: /air-quality/
next_label: "Project record"
next_title: "Explore the complete Taranto air-quality timeline"
---

An air-quality monitor can be described as open because its schematic is
published.

That is valuable.

It does not tell you who controls the firmware, where the measurements travel,
whether the vendor cloud can be disabled, who holds the historical record or
whether a citizen can reproduce the analysis behind a public claim.

Ownership is a stack.

My recent AirGradient experiment began as a way to understand the air in my
room. It became a useful test of how far citizen ownership can extend: from an
open physical device, through local configuration and custom firmware, into a
private analytics workflow and an inspectable report.

This article is not the installation guide. The
[complete AirGradient-to-analytics build]({{ '/writing/airgradient-directly-to-omniscope/' | relative_url }})
covers that.

This is about what “citizen-owned monitoring” should mean.

## Layer 1: the physical instrument

The first requirement is access to the hardware you bought.

AirGradient publishes code, schematics and 3D files under
[CC BY-SA 4.0](https://www.airgradient.com/documentation/kb/kb-diy-the-airgradient-builds-overview)
and states that monitor owners own their data. Its open-files overview covers
the hardware materials, design and enclosure files.

This enables:

- independent inspection;
- repair;
- replacement parts;
- firmware modification;
- educational use;
- adaptation to another data path.

Open hardware does not guarantee measurement quality. Sensor selection,
airflow, enclosure design and maintenance still matter. It makes those choices
more inspectable.

## Layer 2: firmware

The firmware decides what the physical instrument actually does.

It can:

- read sensors;
- calculate or expose indices;
- connect to Wi-Fi;
- post to a vendor service;
- answer local API requests;
- retain credentials;
- install updates;
- send measurements elsewhere.

For my experiment, I forked the official AirGradient firmware at version
**3.3.9** and published the
[airgradient-omniscope source](https://github.com/toniopoggi/airgradient-omniscope).

The fork adds a configurable, authenticated HTTPS request to an
[Omniscope](https://visokio.com/) workflow every minute. The release retains
upstream attribution and documents the exact base.

This version pin is part of reproducibility. “Based on the open firmware”
would not be enough to reconstruct the device later.

## Layer 3: local control

A citizen should not need the vendor cloud to see current measurements or
change local configuration.

The AirGradient firmware exposes a local API. A device on the same network can
retrieve:

- current measurements;
- configuration;
- metrics.

I built a small
[Android controller](https://github.com/toniopoggi/airgradient-omniscope-android)
around that API. It connects only to `.local`, loopback, link-local or private
LAN addresses and accepts only the required read and configuration operations.

It has no account, advertising, analytics SDK or cloud runtime.

<figure>
  <img src="{{ '/assets/images/airgradient-json-redacted-wide.png' | relative_url }}" alt="Complete current AirGradient measurement JSON returned by the local device API, with identifier and old firmware version redacted" width="951" height="1654" loading="lazy">
  <figcaption>Local access to the complete current measurement is a practical ownership boundary. Identifiers and an obsolete pre-fix version are deliberately redacted.</figcaption>
</figure>

The phone is a control surface, not a background collector. If the phone is
off, the historical data path continues.

## Layer 4: transport

Owning the device while every measurement travels through an unwanted vendor
service is incomplete ownership.

In my configuration:

```text
AirGradient cloud posting: disabled
vendor cloud connection: disabled
network task: enabled
Omniscope workflow push: enabled
```

The monitor makes one outbound HTTPS request to a configured Omniscope
endpoint. There is:

- no inbound router port;
- no Raspberry Pi poller;
- no MQTT broker;
- no separate receiver service;
- no phone-based collector.

This does not make direct HTTPS universally better. A broker and local gateway
are appropriate for many fleets. Here, removing them made the path easier to
understand and operate.

The transport still needs security: TLS validation, dedicated credentials,
least privilege, endpoint restrictions and a plan for credential rotation if
the device is lost.

## Layer 5: stored history

Live access is not ownership of history.

A vendor application may show the current value while retaining the historical
record under its own account and export rules. A citizen-owned system needs to
answer:

- Where are measurements stored?
- In what format?
- Who can export them?
- Can the history survive a provider change?
- Are timestamps and units preserved?
- Are missing periods visible?
- Is the raw payload retained?

The receiving Omniscope workflow parses the device JSON, adds a server-side UTC
receipt time and appends the observation to storage controlled by the
deployment.

I deliberately did not add a flash-backed queue to the monitor. If submission
fails, that minute becomes a gap. The design avoids replay and flash-wear
complexity at the cost of incomplete delivery.

Ownership includes knowing where the gaps came from.

## Layer 6: analysis

Data ownership without analytical access can still leave people dependent.

The user should be able to:

- inspect source observations;
- derive new measures;
- compare periods;
- change the report;
- export the result;
- move to another tool;
- preserve the method behind a public conclusion.

In the current project, the workflow and report remain visible. PM, CO₂, VOC
and NOx indices, temperature, humidity, Wi-Fi state and metadata can be
examined across time.

<img src="{{ '/assets/images/omniscope-report-interactive.png' | relative_url }}" alt="Interactive Omniscope report showing AirGradient measurements and time controls" width="1156" height="747" loading="lazy">

*The analytical layer is part of ownership: the complete path from incoming
measurement to interactive history can be inspected and changed.*

## Layer 7: publishing and public memory

Citizen-owned monitoring may remain private, or it may contribute to a public
record.

If published, ownership also means retaining:

- source snapshot;
- transformation and rule version;
- chart and report;
- alert payload;
- correction history;
- canonical URL independent of a social platform.

A social post can distribute a finding. It should not be the only copy of the
evidence.

This is a lesson from the longer Taranto project, where the public alert
channel moved from X to Facebook while the Omniscope reports remained the
analytical record.

## Open installation should include recovery

Publishing source code is useful. Making a physical device reproducible
requires more.

The firmware project includes:

- build instructions;
- versioned release binaries;
- SHA-256 checksums;
- a browser-based USB installer;
- a route back to stock firmware.

Recovery matters because custom firmware can fail. My first HTTPS build caused
a networking-task stack overflow and rebooted the device. The fix increased
the task stack from 4096 to 12288 bytes.

A responsible open project should help somebody return to a known state, not
only encourage the interesting modification.

## The sensor’s limits travel with the data

The AirGradient ONE is a low-cost personal monitor, not an ARPA regulatory
station.

Its
[Sensirion SGP41](https://sensirion.com/products/catalog/SGP41)
VOC and NOx outputs are primarily indices of relative change rather than direct
absolute concentrations of one named pollutant. Everyday products such as
alcohol-based cleaners, ethanol and sunscreen can affect VOC readings.
Placement, airflow, warm-up, ageing and environmental conditions matter.

This makes the instrument useful for:

- ventilation experiments;
- observing indoor patterns;
- comparing rooms or periods carefully;
- identifying events to investigate;
- education;
- building and testing citizen infrastructure.

It does not justify presenting an index as a regulatory pollutant
concentration.

Open access makes it easier to examine the limitation. It does not remove it.

## Citizen instruments and regulatory stations have different roles

Regulatory networks provide calibrated, governed measurements with defined
siting, maintenance and validation.

Citizen sensors can provide:

- denser local observation;
- rapid experiments;
- indoor context;
- community participation;
- hypotheses for further investigation;
- independent technical learning.

The strongest relationship is complementary.

A citizen network can make a pattern visible and ask a precise question. An
official station or validated study may be required to support a stronger
claim. Stating that boundary increases credibility.

## Ownership creates responsibility

Running the full stack means accepting work the vendor previously carried:

- protect credentials;
- maintain firmware;
- monitor delivery;
- back up history;
- document changes;
- calibrate or compare sensors where appropriate;
- disclose limitations;
- correct public claims;
- plan for the operator leaving.

This is not an argument against ownership.

It is the reason ownership is meaningful.

## A citizen-owned monitoring checklist

I would call a monitoring path citizen-owned when its operator can answer:

1. Can I inspect and repair the physical device?
2. Can I inspect, build and replace the firmware?
3. Can I access current measurements locally?
4. Can I disable unwanted cloud posting?
5. Do I control the destination and credentials?
6. Do I understand the network path?
7. Can I export and preserve the raw history?
8. Can I inspect the transformations and report?
9. Can I recover stock or known-good software?
10. Are sensor limitations carried into every claim?
11. Can the evidence survive a social-platform change?
12. Is somebody responsible for security, maintenance and correction?

No single open-source badge answers all twelve.

## From openness to agency

Open hardware made this experiment possible. Private infrastructure let me
choose the data path. A visible analytical workflow turned the stream into
history. Public documentation lets somebody else inspect or adapt the result.

The full principle is:

> Sense locally. Control locally. Push privately. Explore openly.

Citizen ownership does not turn a small sensor into an official instrument.

It gives people agency over how they observe, preserve and understand their
environment—and the responsibility to describe that evidence honestly.
