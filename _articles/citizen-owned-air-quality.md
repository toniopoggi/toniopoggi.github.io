---
title: "From Monitoring Taranto to Building Citizen-Owned Air-Quality Instruments"
subtitle: "Seven years of dashboards, public alerts, civic evidence and one very geeky new experiment."
date: 2026-07-26
eyebrow: "Citizen science · Air quality"
series: "Taranto to the sensor"
read_time: "11 min"
description: "How a public dashboard for Taranto evolved into automated benzene alerts, civic evidence and an open air-quality monitor sending directly to Omniscope."
image: /assets/images/x-2025-benzene-peak-42-54.jpg
image_alt: "Hourly benzene measurements at Via Machiavelli, including two readings above the project’s 27 micrograms per cubic metre reference level"
image_caption: "A July 2025 public Omniscope view showing the evidence behind an automated benzene alert."
next_url: /writing/airgradient-directly-to-omniscope/
next_label: "Technical companion"
next_title: "AirGradient Directly to Omniscope"
---

In January 2019, I published an article called
[“Air pollution: looking after my hometown”](https://medium.com/omniscope/air-pollution-looking-after-my-hometown-1b98857a994d).

My hometown is Taranto, in Puglia, southern Italy: a beautiful city by the sea,
living for decades beside one of Europe’s largest industrial sites and with the
impossible argument of “health versus jobs” hanging over its citizens.

I was living in London, building Omniscope with the team at Visokio, but I kept
thinking about what I could contribute using the tools and skills I had.

The question I asked was simple:

> Could data, analytics and visualisation help ordinary citizens understand
> what was happening to the air around them?

That question became a project. The project became a public monitoring system.
And, seven years later, it has led me all the way from published environmental
data to open hardware and a physical sensor that sends measurements directly
into Omniscope.

This is the continuation of that story.

## Making public data genuinely accessible

Arpa Puglia, the regional environmental protection agency, publishes validated
air-quality measurements from monitoring stations across the region.

The data was public, but “publicly available” and “easy for the public to use”
are not the same thing.

Downloading files, combining dates, understanding pollutant fields, comparing
stations and building charts creates a barrier. Most citizens should not need
to become data engineers before they can ask whether pollution is changing in
their neighbourhood.

I used Omniscope to build an interactive public dashboard for Taranto. It
allowed people to:

- see a summary of pollutant concentrations;
- compare monitoring stations and areas;
- explore the trend of an individual pollutant;
- inspect all pollutants measured by a selected station;
- compare distributions over different periods;
- filter and drill into the underlying observations;
- access the raw data behind the visualisations.

In the
[public post that launched the project](https://www.facebook.com/antonio.poggi.7/posts/pfbid02B6QiLXkBh5uxVgz5QBq2CSBYbmwcmdkeR6gxkwNdR5BX8Eivw4A88KQrYkgyotcKl),
I described it as something placed at everyone’s disposal: a report for
citizens to explore, question and potentially build on together.

I later extended the history back to January 2016 and published an Italian
version so the report would be useful to the people it was intended for. The
[historical comparison update](https://www.facebook.com/antonio.poggi.7/posts/pfbid02zVEBXgRYkghrh2PDZAXkxV9mM145G2kY5bQA3zSgQjSovj6fyAhBeZ4K1iB8CSM1l)
and
[Italian release](https://www.facebook.com/antonio.poggi.7/posts/pfbid0pkHXBjifZvvh9GhoeCAX6nTi93e5idFzJyDQB6Mm3jxvSeoc1EnNZ7DKwJG6PuqGl)
remain part of the public record.

This was my practical interpretation of data democratisation: not merely
releasing a file, but making the information understandable, explorable and
open to questions.

## The missing-data moment

While building that first dashboard, I remembered a photograph I had taken
near Taranto’s industrial area at 10:30pm on 2 November. Orange clouds were
glowing against the night sky.

I wanted to inspect the corresponding PAH measurements from the Cokeria and
Tamburi monitoring stations.

The observations were missing between 2 and 4 November.

That did not prove why the data was absent, and I did not claim that it had
been deliberately withheld. But it exposed something important: without
accessible information, citizens and institutions had lost the opportunity to
examine what had happened.

The dashboard was already doing more than displaying charts. It was making
both evidence and gaps in the evidence visible.

## From a dashboard to a sentinel

The project continued to evolve.

I added automated data refreshes and an hourly report focused on benzene
measurements from the Via Machiavelli station in the Tamburi district. I then
built an automation that published an alert when a reading exceeded the acute
reference level of 27 µg/m³ used by the project.

The alert included the measurement, a screenshot and a link to the interactive
Omniscope report. Anyone seeing the warning could move from the social post to
the underlying evidence and explore it.

The public channel has changed over time. The original automation posted
through [OmniscopeBot on X](https://x.com/OmniscopeBot). The current alerts are
published through the
[Aria Taranto Facebook page](https://www.facebook.com/people/Aria-Taranto/61592438068219/).
The purpose has not changed:

> Do not leave an important measurement buried in a dataset, waiting for
> somebody to go looking for it.

An alert creates attention. The interactive report provides context.

Two public Omniscope views sit behind the current channel:

- the [Aria Taranto report](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Aria+Taranto/);
- the [historical benzene report](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Benzene/).

This distinction matters. A screenshot alone can be dramatic but static. A
report allows people to examine the preceding hours, compare stations, inspect
historical patterns and decide whether an event is isolated or part of
something larger.

![Omniscope report summarising benzene peaks and trends across Taranto monitoring stations from 2023 to 2025](/assets/images/x-2025-benzene-trend-2023-2025.jpg)

*By December 2025, the monitoring had expanded into a multi-station view of
benzene peaks and average concentrations across Cokeria, Meteo Parchi, Via
Orsini and Via Machiavelli. Source:
[my original post on X](https://x.com/toniopoggi/status/2000692932861407515).*

## From citizen information to civic evidence

The work found an audience beyond my own experiments.

Local activists at
[PeaceLink](https://www.peacelink.it/citizenscience/a/50007.html) began using the
Omniscope dashboard to monitor trends, investigate worrying events and
communicate environmental data. PeaceLink described the work as an experiment
in environmental data democratisation and citizen-led monitoring.

One public account captures the collaboration particularly well. In 2023,
[Alessandro Marescotti described receiving my graphs of benzene peaks from
London](https://www.facebook.com/antonio.poggi.7/posts/pfbid0UZLMKVp1kUsSMtknVQ4vDQp1jVaYYfaDq7pbAs669Dmq9MXKy2CWmvEaLV3wo8Kpl)
while local “ecosentinels” supplied observations from the ground and PeaceLink
relayed the warning. That combination of automation, remote analysis and local
citizen presence is the real instrument.

The collaboration eventually led to a historical analysis of more than 80,000
hourly benzene measurements from the Via Machiavelli station between 2013 and
2023.

The analysis identified 63 observations over 27 µg/m³:

- 32 occurred in 2023;
- 31 occurred across the preceding ten years combined.

PeaceLink presented the findings during a hearing at the Italian Senate
concerning ILVA. The
[official slides filed by the Senate](https://www.senato.it/application/xmanager/projects/leg19/attachments/documento_evento_procedura_commissione/files/000/429/055/2024_02_06_PeaceLink_slides.pdf)
credit me for the data analysis and its processing with Omniscope, alongside
the wider group that contributed to the work. The results were also reported by
[ISDE](https://www.isdenews.it/?p=30644) and other environmental and news
organisations. My
[contemporaneous public post](https://www.facebook.com/antonio.poggi.7/posts/pfbid02LJzabpp5u9StwKmJzZx5xWUoABoDY5cQiRShaYnKgNpWG3kohKMTENnVNH4dhfU7l)
links the analytical work directly to Marescotti’s presentation.

I am careful not to overstate what a dashboard can achieve. Software does not
remove pollution, make policy or replace scientific and institutional
responsibility.

But it can make evidence easier to interrogate. It can shorten the distance
between a measurement and public awareness. It can help citizens and activists
ask better questions, preserve a historical record and hold decision-makers to
account.

That is meaningful.

## Monitoring is more than detecting peaks

The project also grew beyond individual warnings.

Recent reports have compared PM10 concentrations in Tamburi and Talsano,
examined the relationship between falling steel production and benzene levels,
and followed changes between 2023 and 2025 across Cokeria, Meteo Parchi, Via
Orsini and Via Machiavelli.

The public record includes the
[2017–2025 PM10 comparison between Tamburi and
Talsano](https://www.facebook.com/antonio.poggi.7/posts/pfbid02GaRs4hXu715EVSw5QxbbTzyVDHG6EP768JRcHWEV9mcYjMQN9qESZnA678xos77Dl)
and the
[analysis of falling benzene alongside lower steel
production](https://www.facebook.com/antonio.poggi.7/posts/pfbid02owDQHvtYAkHvUsm8CdXVirfZLTAch6wyXvBbCJNuny9SgWou4d33eBpCrX5Ay1Hfl).

These analyses show why history matters.

![Omniscope PM10 comparison between Tamburi and Talsano from 2017 to June 2025](/assets/images/x-2025-pm10-tamburi-talsano.jpg)

*PM10 in Tamburi and Talsano, 2017–June 2025. The report combines averages,
relative differences, monthly changes and longer-term trends. Source:
[my original analysis on X](https://x.com/toniopoggi/status/1946655197259870594).*

![Benzene observations at Cokeria and Tamburi Via Orsini from 2022 to 2025](/assets/images/x-2025-benzene-cokeria-tamburi-trend.jpg)

*Benzene observations at Cokeria and Tamburi–Via Orsini, showing a falling
trend while preserving the full distribution of measurements. Source:
[my original post on X](https://x.com/toniopoggi/status/1943273679653077369).*

A peak demands attention, but a trend helps us reason about causes and
consequences. A single number can be alarming; a comparison can reveal whether
an area experiences a systematic difference. A decline can be welcome while
still leaving unresolved structural risks.

Good data communication must be capable of holding more than one thought at
once.

## The latest experiment: moving closer to the source

Recently, I bought an **AirGradient ONE**, model I-9PSL, to understand the air
around me. It measures CO₂, particulate matter, TVOCs, NOₓ, temperature and
humidity.

At first, the device answered an immediate question: what is the air like now?

Then the familiar question arrived:

> What has it been doing over time?

I did not want to send these measurements through a vendor cloud. I did not
want an always-on computer polling the monitor in my home. I did not want to
open a router port, install an MQTT broker or operate a separate ingestion
service.

AirGradient publishes open firmware and provides a local API. The monitor
already had the sensors, data, Wi-Fi and a programmable ESP32-C3
microcontroller.

It did not need to be polled. It could push.

I built:

1. a private Android app for local measurements and configuration;
2. a customised version of the AirGradient firmware;
3. a direct, authenticated HTTPS integration with the Omniscope Workflow API;
4. an Omniscope workflow that parses each measurement, adds a server-side UTC
   timestamp, appends it to history and feeds an interactive report.

Once every minute, the monitor now sends its current measurement directly to
Omniscope.

There is no AirGradient cloud in that data path, no middleware, no local
collector, no inbound access to my home network and no separate Python
service.

```text
AirGradient ONE
      |
      | one outbound HTTPS request every minute
      v
Omniscope Workflow API
      |
      +--> parse JSON
      +--> add UTC timestamp
      +--> append history
      +--> update the interactive report
```

The phone controls the device locally. The device publishes remotely.
Omniscope receives, processes, stores and presents the history.

![Omniscope workflow receiving and organising AirGradient measurements before the report](/assets/images/omniscope-workflow-ingestion.png)

*The receiving Omniscope workflow: HTTP input, schema definition, field
organisation, historical data table and Report block.*

![Interactive Omniscope report showing particulate matter, VOC, NOx, temperature, humidity and carbon dioxide](/assets/images/omniscope-report-interactive.png)

*The latest experiment working end to end: minute-by-minute AirGradient
measurements available for interactive exploration in Omniscope.*

## From democratising the data to democratising the instrument

This latest build operates at a different scale from the Taranto project.

An AirGradient in my room is not a regulatory monitoring station. A personal,
low-cost sensor should not be described as a substitute for official,
validated environmental measurements.

But the underlying democratic principle is the same.

In 2019, I started by making institutional data easier to explore.

The automated monitoring then made that data active, bringing significant
measurements into public conversation rather than waiting for people to
discover them.

Now I control the complete path from my own physical sensor to the analytical
record:

> air → sensor → firmware → HTTPS → workflow → history → report

This suggests a wider possibility.

Any open air-quality monitor with sufficient resources, Wi-Fi, accessible
measurements and support for outbound HTTPS could use a similar architecture.
A school, community building, local organisation or citizen-science network
could own its data path while still benefiting from centralised processing,
history, analytics and visual exploration.

The goal is not to pretend that every citizen sensor is a scientific reference
instrument. It is to give people more ways to observe their environment,
understand their own data and participate in the questions that affect them.

## Why Omniscope belongs in this story

As COO of Visokio, I spend much of my professional life thinking about the
journey from raw data to useful understanding.

Omniscope is often seen at the end of that journey, where the charts and
interactive reports appear. This project demonstrates a broader role.

The workflow is also the operational API. It receives the device message,
parses the JSON, timestamps it, organises it, appends it and makes it available
for analysis.

The distance between a physical measurement and an explorable report is one
outbound request.

This tiny project touches the same concerns found in much larger systems:
integration boundaries, security, configuration, ingestion, data quality,
history, automation and human interpretation.

And yes, it was also enormous fun to make a box of sensors on my wall call a
workflow on a Linux VM and watch a new point appear in a chart.

## Publishing the complete work

I am publishing the implementation so others can inspect it, reproduce it and
adapt it:

- [AirGradient Omniscope firmware](https://github.com/toniopoggi/airgradient-omniscope):
  customised firmware, build instructions, Workflow API integration,
  browser-based installer and stock-firmware recovery.
- [AirGradient Omniscope for Android](https://github.com/toniopoggi/airgradient-omniscope-android):
  local controller, source code, build instructions and APK.

I am also creating a public repository that will document the complete
timeline of my air-quality work: the original Taranto dashboard, the automated
monitoring and social alerts, the historical analyses and this latest
AirGradient experiment.

Open hardware made the latest chapter possible. Open data made the first one
possible. Open documentation is how the work can continue beyond me.

## Still looking after the air

In 2019, I hoped that people would spend some of their time looking after our
planet.

Years later, I am still working on the same idea.

The tools have evolved. The dashboard became an automated sentinel. The
sentinel contributed to civic evidence. And now an open sensor can send its
measurements directly into the analytical environment my team and I have spent
years building.

There is still much more to explore: multiple sensors, schools, community
deployments, indoor/outdoor comparisons and new forms of citizen-owned
monitoring.

But the principle remains clear:

> Data becomes power when people can collect it, understand it, question it
> and retain control of it.

**Sense locally. Control locally. Push privately. Explore openly.**

For science and, inevitably, for the geeky pleasure of making the whole chain
work.

---

## References

- [My original 2019 article: “Air pollution: looking after my hometown”](https://medium.com/omniscope/air-pollution-looking-after-my-hometown-1b98857a994d)
- [PeaceLink: students use the Omniscope dashboard for environmental education](https://www.peacelink.it/ecodidattica/a/46222.html)
- [PeaceLink: Taranto, citizen science and environmental data democratisation](https://www.peacelink.it/citizenscience/a/50007.html)
- [Italian Senate: PeaceLink hearing slides, 6 February 2024](https://www.senato.it/application/xmanager/projects/leg19/attachments/documento_evento_procedura_commissione/files/000/429/055/2024_02_06_PeaceLink_slides.pdf)
- [ISDE: the historical benzene analysis presented at the Italian Senate](https://www.isdenews.it/?p=30644)
- [AirGradient ONE](https://www.airgradient.com/indoor/)
- [AirGradient Omniscope firmware](https://github.com/toniopoggi/airgradient-omniscope)
- [AirGradient Omniscope Android app](https://github.com/toniopoggi/airgradient-omniscope-android)
