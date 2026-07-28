---
title: "Designing Alerts That Preserve the Evidence Behind the Claim"
subtitle: "The social post should attract attention without becoming the only surviving record of the measurement, method and context."
date: 2026-07-27 00:14:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
eyebrow: "Public alerts · Provenance"
series: "Citizen science and public evidence"
cluster: citizen
cluster_label: "Citizen science and public evidence"
article_order: 4
read_time: "6 min"
description: "Design data-driven air-quality alerts with station, time, units, averaging period, reference meaning, source status and links to inspectable evidence."
image: /assets/images/x-2025-benzene-peak-42-54.jpg
image_alt: "Hourly benzene report for Via Machiavelli showing July 2025 peaks and the 27 micrograms per cubic metre acute reference"
image_width: 1920
image_height: 1080
image_caption: "An alert image should show the event and the immediate context. The interactive report should preserve the deeper evidence."
tags:
  - data-driven alerts
  - alert provenance
  - air-quality alerts
  - environmental evidence
  - Taranto
  - Omniscope
takeaways:
  - "I treat an alert as a route into the evidence, not as the end of it."
  - "It therefore includes the station, pollutant, timestamp and timezone, value and unit, averaging duration, reference meaning, source status and a report link."
  - "I also preserve the source snapshot, rule version and publication record outside the social platform so revisions and platform changes remain auditable."
next_url: /writing/open-hardware-private-infrastructure-citizen-owned-monitoring/
next_label: "Next in the series"
next_title: "Open hardware, private infrastructure and citizen-owned monitoring"
---

A real Via Machiavelli alert reported an hourly benzene value of 42.54 µg/m³
against the 27 µg/m³ acute reference. Strip away the station, hour, unit and
reference, and it becomes:

> High benzene in Taranto: 42.54.

Which station? Which hour? Which unit? Was 42.54 an hourly mean or an
instantaneous value? High compared with what? Was the source provisional? What
happened before and after? Can anybody inspect the observation?

The number gets attention because it is large. The missing context makes it
difficult to assess and easy to misuse.

I built the Taranto automation so a reader could move from that number to the
station, surrounding hours, threshold definition and source data in the
Omniscope report.

## The alert is the last step of a data workflow

The visible post may contain one sentence and one image. Behind it sits a
complete process:

```text
official source
  → retrieve and timestamp
  → type and validate
  → preserve station and averaging grain
  → apply an explicit reference rule
  → isolate new qualifying observations
  → generate evidence image and text
  → publish
  → link to the interactive report
  → record what was sent
```

In the original
[OmniscopeBot implementation](https://visokio.com/2023/12/04/how-to-create-a-twitter-x-bot-posting-data-driven-content-with-charts/),
an Omniscope workflow obtained the data, transformed it, compared measurements
with configured conditions, generated a report screenshot and passed qualifying
rows to a Python block for publication.

The code that called the social API was a small part of my work. Most of it was
in the preceding workflow: preparing the source data, preserving its hourly
meaning, applying the configured condition and deciding what the screenshot
and text had to contain.

## What I include in each alert

For each measurement-based alert I keep enough information to interpret the
number and a direct route to the fuller report.

### 1. Station and pollutant

“Taranto” is not a measurement location.

Name the station and pollutant. If the station identifier changed, preserve
the identifier used by the source.

### 2. Observation time and timezone

State the hour or period represented by the value, not only when the post was
published.

Use a timezone. Environmental series cross daylight-saving changes, and “03:00”
can otherwise become ambiguous.

### 3. Value, unit and averaging duration

Write:

```text
42.54 µg/m³, hourly mean
```

not:

```text
42.54
```

The averaging duration is part of the measure. Hourly, daily and annual values
cannot be compared as if they were the same threshold event.

### 4. Reference and its status

If the alert uses 27 µg/m³, call it the
[OEHHA acute Reference Exposure Level](https://oehha.ca.gov/air/crnr/notice-adoption-revised-reference-exposure-levels-benzene)
for infrequent one-hour benzene exposure and non-cancer effects.

Also say what it is not: exceeding the reference is neither proof of individual
harm nor an Italian or EU ambient legal breach.

A threshold without its authority, duration and legal status invites a much
stronger interpretation than the data supports.

### 5. Source-data status

Identify the agency and whether the observation is provisional or validated
where that information is available.

If a later validated file can revise the value, the publication process needs
a way to retain or amend the original alert.

### 6. Evidence link

The post should link to a report where a reader can inspect the surrounding
hours, longer history, station comparisons, source rows, update time and gaps
in coverage.

The current
[Aria Taranto report](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Aria+Taranto/)
and
[benzene history](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Benzene/)
provide that path.

### 7. Workflow and publication time

The observation may represent 03:00, the source may publish it later, the
workflow may retrieve it at 05:10 and the social API may accept the post at
05:11.

I preserve each time separately because they describe different stages of the
same alert.

## The screenshot is a bridge

A useful screenshot shows the current observation, reference line, preceding
hours or days, station name, source update time and units. That is enough for a
reader to decide whether to open the report.

It may be compressed by the platform. Alt text may disappear. The post may be
re-shared without its link. A screenshot also freezes the provisional state at
publication time while the report may later refresh.

I use the screenshot for the immediate view and the report for the data and
history that cannot fit inside it.

## Context should counterbalance the peak

An alert feed naturally emphasises exceptional events. Without longer-term
context, it can leave the false impression that conditions never improve.

In the incomplete 2025 period available when
[this comparison was published](https://x.com/toniopoggi/status/2000692932861407515),
Taranto reporting showed a falling number and average of high daily benzene
readings across several stations from 2023 into 2025, while individual hourly
episodes still deserved attention.

<figure>
  <img src="{{ '/assets/images/x-2025-benzene-trend-2023-2025.jpg' | relative_url }}" alt="Omniscope report comparing high daily benzene readings across four Taranto stations from 2023 through 2025" width="1008" height="1402" loading="lazy">
  <figcaption>This chart uses daily means above 5 µg/m³, a different measure from an hourly 27 µg/m³ alert. The 2025 period was incomplete when the image was published. Long-term context and short-term alerts can both be true.</figcaption>
</figure>

The alert channel and historical report should show both the individual event
and the longer direction.

## Do not rewrite the historical rules

The first 2023 OmniscopeBot tutorial used a different, lower trigger in its
example. The current project uses the 27 µg/m³ acute reference for particular
hourly alerts.

It would be inaccurate to describe every historical post as if it used today’s
rule.

Store a rule version with each alert:

- threshold value;
- comparison operator;
- averaging period;
- pollutant and station scope;
- source of the reference;
- effective date;
- workflow version.

When the rule changes, history should explain the change rather than silently
reclassifying old publications.

## Handle duplicates and revisions

Once I automated publication, timeouts, retries and source revisions became
part of the same workflow.

### Duplicate protection

A retry after a timeout may publish the same observation twice.

Use a stable key such as:

```text
source + station + pollutant + observation_timestamp + rule_version
```

Record successful publication separately from attempted publication. Do not
assume an HTTP timeout means the social platform rejected the post.

### Source revisions

If provisional data is corrected, retain:

- the value originally alerted;
- the corrected value;
- revision time;
- source file or record version;
- whether the alert was amended or withdrawn.

Deleting the old post without explanation weakens the public record.

### Gaps

If the source or workflow is unavailable, the gap needs to remain visible.
Silence from the alert account cannot establish that there were no high
readings.

## Keep a record outside the social platform

The Taranto alert channel began on X through
[OmniscopeBot](https://x.com/OmniscopeBot) and later moved to the
[Aria Taranto Facebook page](https://www.facebook.com/people/Aria-Taranto/61592438068219/).

Platforms change API access, link behaviour, image quality and account policy.
Accounts can be suspended or removed.

I therefore keep the durable record under project control:

- alert payload;
- source observation or snapshot;
- generated image;
- rule version;
- workflow execution;
- publication result and platform identifier;
- canonical report URL;
- correction history.

The social platform distributes the alert, while this retained material allows
the project to reconstruct or correct it later.

## Learn from official communication standards

Annex XVI of
[Directive 2008/50/EC](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32008L0050)
requires official exceedance information to identify matters such as location,
threshold type, start and duration, and concentrations.

Citizen benzene alerts are not statutory EU alerts, and this does not make
them so.

The structure is still useful design inspiration. Public warnings should tell
people what happened, where, when, at what concentration and against which
defined reference.

I apply the same practical test to each alert: it should explain the
measurement when published and leave enough state for me to trace and correct
it later.
