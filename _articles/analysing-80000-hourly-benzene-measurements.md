---
title: "What I Learned from Analysing 80,000 Hourly Benzene Measurements"
subtitle: "Grain, missingness, reference levels and dataset versions matter as much as the chart—especially when evidence enters public debate."
date: 2026-07-27 00:12:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "Citizen science · Evidence"
series: "Citizen science and public evidence"
cluster: citizen
cluster_label: "Citizen science and public evidence"
article_order: 2
read_time: "7 min"
description: "Lessons from analysing more than 80,000 hourly benzene readings in Taranto: preserve peaks, define thresholds, expose gaps and version the evidence."
image: /assets/images/articles/benzene-hourly-readings-2013-2023.png
image_alt: "Bar chart of hourly benzene readings above 27 micrograms per cubic metre at Via Machiavelli from 2013 to 2023, with 32 readings in 2023"
image_width: 1600
image_height: 900
image_caption: "The February 2024 Senate dataset snapshot concentrated 32 of its 63 readings above 27 µg/m³ in 2023. Source: PeaceLink Senate submission, page 5."
tags:
  - benzene
  - Taranto air quality
  - hourly air-quality data
  - citizen science
  - environmental evidence
  - Omniscope
takeaways:
  - "Annual averages and hourly peaks answer different questions; do not collapse one into the other."
  - "The February 2024 Senate snapshot contained 63 readings above 27 µg/m³, including 32 in 2023; a later final ARPA report gave 47 for 2023, so snapshot dates must be disclosed."
  - "The 27 µg/m³ OEHHA acute REL is a one-hour health reference, not an EU or Italian ambient legal limit and not proof of individual harm."
next_url: /writing/citizen-owned-air-quality/
next_label: "Next in the series"
next_title: "Making institutional air-quality data usable by citizens"
---

For the February 2024 Senate hearing, PeaceLink asked me to examine all the
hourly benzene measurements from the Via Machiavelli monitoring station in
Taranto across 2013–2023.

The dataset contained more than 80,000 observations.

That number sounds substantial, but volume was not the difficult part. The
difficult part was deciding what could be claimed from the measurements,
preserving the hourly events that annual summaries hide, and making the result
clear enough to enter a public and institutional discussion without making it
sound more certain than it was.

The analysis was later presented by Alessandro Marescotti during an
[Italian Senate hearing on 6 February 2024](https://www.senato.it/application/xmanager/projects/leg19/attachments/documento_evento_procedura_commissione/files/000/429/055/2024_02_06_PeaceLink_slides.pdf).
The official slides credit my data analysis and processing with
[Omniscope](https://visokio.com/).

What follows is not only the result. It is what the work taught me about public
evidence.

## Hourly grain changes the question

Benzene regulation and public reporting often focus on annual averages. Those
are essential for assessing long-term ambient concentrations and legal
compliance.

An annual mean cannot describe the shape of every hour inside it.

Two years can have the same annual average while one contains a relatively
stable distribution and the other contains short, extreme episodes. People
living near a monitoring station experience both patterns, but the analytical
questions are different:

- What was the station’s annual mean?
- How often did unusually high hourly episodes occur?
- Were they concentrated in particular months or times?
- Did the distribution change?
- Were measurements missing during events of interest?

Aggregating too early destroys the evidence needed for the second group.

The first lesson was simple: retain the finest trustworthy grain, then derive
the summaries. Do not keep only the summary and hope it answers every future
question.

## A threshold needs a name and a meaning

For the hourly analysis, PeaceLink used **27 µg/m³** as a reference.

That value comes from the California Office of Environmental Health Hazard
Assessment’s
[acute Reference Exposure Level for benzene](https://oehha.ca.gov/air/crnr/notice-adoption-revised-reference-exposure-levels-benzene).
It describes a one-hour airborne concentration not anticipated to cause
adverse non-cancer effects for that exposure duration.

The wording matters:

- it is a health-based acute reference level;
- it is designed for infrequent one-hour exposure;
- it is **not** an Italian or EU ambient legal limit;
- exceeding it is not automatic proof of individual harm;
- exceeding it is not, by itself, proof of a legal breach or source.

The EU ambient benzene limit under
[Directive 2008/50/EC](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32008L0050)
is expressed as an **annual** mean. The recast
[Directive (EU) 2024/2881](https://eur-lex.europa.eu/eli/dir/2024/2881/oj/eng)
sets a tighter annual value to be attained by 2030.

An hourly 27 µg/m³ event and an annual 5 or 3.4 µg/m³ limit cannot be compared
as if they were interchangeable thresholds. Different averaging periods
answer different health and legal questions.

Whenever an alert or chart draws a line, the line should carry its source,
duration and status.

## What the February 2024 snapshot showed

In the dataset snapshot analysed for the Senate hearing, the Via Machiavelli
series contained **63 hourly observations above 27 µg/m³**.

Their yearly distribution was:

| Year | Hourly readings above 27 µg/m³ |
| ---: | ---: |
| 2013 | 4 |
| 2014–2017 | 0 |
| 2018 | 1 |
| 2019 | 0 |
| 2020 | 2 |
| 2021 | 7 |
| 2022 | 17 |
| 2023 | 32 |
| **Total** | **63** |

These counts appear on page 5 of
[PeaceLink’s Senate submission](https://www.senato.it/application/xmanager/projects/leg19/attachments/documento_evento_procedura_commissione/files/000/429/055/2024_02_06_PeaceLink_slides.pdf).

The striking finding was the concentration in the latest year of that
snapshot: 32 in 2023, compared with 31 across the previous ten years combined.

That justified attention. It did not identify a cause by itself.

Time, wind direction, other stations, industrial operations and validated
source records all become relevant to a causal investigation. A single
monitoring series can show when and where a pattern deserves examination. It
cannot close every explanatory question.

## A later official report gave a different count

There is an important complication.

The later final ARPA Puglia benzene report for 2023 records **47** Via
Machiavelli observations above 27 µg/m³, not 32.

The exact
[ARPA Puglia 2023 benzene report](https://www.arpa.puglia.it/moduli/output_immagine.php?id=7864)
contains that later official count.

The February hearing used an earlier dataset snapshot. I have not found a
public reconciliation that explains the difference. It may involve validation,
completion or revision of the source series, but the reason remains unresolved
and should not be guessed away.

This changed one of my strongest lessons:

> A result is not fully described by the query. It also needs the source
> snapshot and its date.

Anyone citing the 63/32 result should call it what it is: the dataset snapshot
analysed and filed for the February 2024 hearing. The final 2023 ARPA report is
a later version and should be cited for its final annual count.

The discrepancy does not make the earlier analysis worthless. Hiding it would.

## Missingness is evidence too

Public environmental datasets contain gaps, station outages, delayed
validation and revised records.

These must remain visible.

For each period I want to know:

- how many hours should exist;
- how many measurements are present;
- whether missingness is isolated or continuous;
- whether values are provisional or validated;
- whether timestamps and daylight-saving changes were handled consistently;
- whether duplicate observations exist;
- whether units changed;
- when the source file was retrieved.

A line chart that connects across a three-day gap can visually imply
continuous monitoring. An annual summary can hide that the station was absent
during an event somebody wants to investigate.

Absence does not prove why data is missing. It does affect what the available
data can support.

## A peak and a trend can both be true

Later analysis across 2023–2025 showed a reduction in the number and average of
high daily benzene readings at several Taranto stations, particularly around
Tamburi.

At the same time, later hourly episodes still exceeded the 27 µg/m³ acute
reference.

These findings are not contradictory.

Longer-term improvement can coexist with individual events that deserve
attention. Public communication becomes distorted when it insists on only one
of those truths.

<figure>
  <img src="{{ '/assets/images/benzene-trend-linkedin-2023-2025.jpg' | relative_url }}" alt="Omniscope report comparing the number and average of high daily benzene readings at four Taranto stations from 2023 through 2025" width="800" height="1112" loading="lazy">
  <figcaption>This later chart counts daily means above 5 µg/m³; it is not the same metric as hourly readings above 27 µg/m³. The 2025 period was incomplete when posted. <a href="https://www.linkedin.com/posts/antoniopoggi_benzene-taranto-datademocratisation-activity-7406674550211629057-qY1t">See the original Italian analysis ↗</a></figcaption>
</figure>

The distinction between hourly and daily measures belongs in the caption, not
in a footnote nobody reads.

## Evidence has to travel

The analysis moved through several forms:

1. source monitoring records;
2. a prepared and checked hourly dataset;
3. an Omniscope workflow and report;
4. charts and threshold counts;
5. PeaceLink’s public explanation;
6. the Senate hearing slides.

At every hand-off, context could have been lost.

The most valuable properties were:

- the raw observations remained available;
- the distribution by year was visible;
- the threshold was named;
- the station and period were explicit;
- the method could be rerun;
- later data could be compared;
- uncertainty about causation remained stated.

This is what turns a chart into public evidence rather than campaign
decoration.

## What I would preserve in the next analysis

For any long-running environmental series, I would now keep:

- the original downloaded files;
- retrieval time and source URL;
- file checksum where practical;
- validation or provisional status;
- normalised UTC and local timestamps;
- unit and averaging period;
- missingness report;
- transformation version;
- threshold definition and source;
- result snapshot used for each publication;
- links from every public claim back to the interactive evidence.

I would also reconcile later official revisions explicitly rather than
silently updating an old number.

## The number is not the conclusion

“More than 80,000 measurements” communicates scale.

“63 above the reference” communicates a finding from one snapshot.

Neither is the complete conclusion.

The complete work includes grain, coverage, threshold meaning, version,
comparison and the limits of attribution. It includes the later official count
that does not match the earlier snapshot. It includes the fact that trends can
improve while significant episodes continue.

That may be less satisfying than one permanent headline.

It is much closer to evidence.
