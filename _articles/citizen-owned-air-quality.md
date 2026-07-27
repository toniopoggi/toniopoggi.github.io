---
title: "Making Institutional Air-Quality Data Usable by Citizens"
subtitle: "Publishing a file is not the same as giving people an instrument for comparison, investigation and public evidence."
date: 2026-07-27 00:13:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "Citizen science · Public data"
series: "Citizen science and public evidence"
cluster: citizen
cluster_label: "Citizen science and public evidence"
article_order: 3
read_time: "7 min"
description: "How ARPA Puglia monitoring files became a public, Italian-language Omniscope instrument for citizens, classrooms, comparisons and civic investigation."
image: /assets/images/x-2025-pm10-tamburi-talsano.jpg
image_alt: "Omniscope report comparing PM10 measurements in Tamburi and Talsano from 2017 through June 2025"
image_width: 1101
image_height: 1003
image_caption: "A public file becomes more useful when citizens can compare places and years without rebuilding the analysis themselves."
tags:
  - public air-quality data
  - Taranto
  - ARPA Puglia
  - citizen science
  - data democratisation
  - Omniscope
takeaways:
  - "Publicly available data becomes usable when source, grain, coverage, language, comparisons, raw rows and visible gaps travel together."
  - "The Taranto report moved from daily files to historical comparisons, Italian localisation, hourly evidence and public alerts."
  - "Accessible analysis helps citizens ask better questions; it does not prove causation or replace official scientific responsibility."
next_url: /writing/alerts-that-preserve-evidence/
next_label: "Next in the series"
next_title: "Designing alerts that preserve the evidence behind the claim"
---

In January 2019 I published
[“Air pollution: looking after my hometown”](https://medium.com/omniscope/air-pollution-looking-after-my-hometown-1b98857a994d).

My hometown is Taranto, in Puglia: a beautiful city by the sea, living beside
one of Europe’s largest industrial sites and with the impossible argument of
“health versus jobs” hanging over its citizens.

[ARPA Puglia](https://www.arpa.puglia.it/pagina2873_report-annuali-e-mensili-qualit-dellaria-rrqa.html),
the regional environmental agency, was already publishing validated monitoring
data.

The data was public.

Using it still required somebody to find the right files, understand the
fields, combine dates, compare stations and create charts. “Available for
download” and “available to citizens” were not the same thing.

I was living in London and building
[Omniscope with the Visokio team](https://visokio.com/). The tool I could
contribute was an analytical instrument: a public report that let people
investigate the measurements without first becoming data engineers.

## Public is not the same as usable

Open-data programmes often measure success at publication.

A file appears on a website. A licence permits reuse. The obligation is met.

That is necessary and valuable. It is not the end of accessibility.

For a citizen trying to understand the air around their home, basic questions
remain:

- Which station is closest?
- Which pollutants does it measure?
- Is this value high relative to the station’s own history?
- How does one neighbourhood compare with another?
- Are measurements missing?
- Is the data hourly, daily or annual?
- When was it last updated?
- Can I inspect the original rows behind the chart?

If each question requires a new spreadsheet, script or expert, the data is
open in principle and restricted in practice.

## The first report

I used Omniscope to build a public report around the ARPA Puglia records.

The first version had five complementary ways to examine the same data:

1. **Summary** — an overview of pollutant concentrations and current context;
2. **Pollutant** — the history and distribution of a selected measure;
3. **Station** — all available pollutants from one monitoring location;
4. **Distribution** — comparisons that did not reduce every period to one
   average;
5. **Raw data** — the observations behind the visualisations.

No single view answered every question.

The summary offered orientation. The pollutant and station views supported
investigation. Distributions exposed spread and unusual observations. Raw rows
kept the visual claims connected to the source.

I later added comparison views, extended the history back to January 2016 and
published an Italian version.

Localisation was not decoration. An English analytical interface for an
Italian civic audience would have preserved an avoidable barrier.

## The missing-data moment

One photograph gave the project its first sharp test.

At 10:30pm on 2 November 2018, I had photographed orange clouds glowing near
the industrial area. Later, while building the report, I tried to inspect the
corresponding PAH measurements from the Cokeria and Tamburi stations.

The observations were absent between 2 and 4 November 2018.

That did **not** prove why they were absent. It did not prove that anybody had
deliberately withheld them, and I did not claim that.

It showed something more basic: a gap in monitoring is part of the public
evidence. If the interface quietly connects the points on either side, a
citizen may not even know the gap exists.

Usable data needs to expose:

- expected and available coverage;
- station outages;
- provisional and validated status;
- refresh time;
- breaks in the series.

Missingness is not only a technical quality metric. It changes which public
questions the dataset can answer.

## Comparison turns values into context

A measurement in isolation is difficult to interpret.

Comparison can provide several kinds of context:

- the same station over time;
- nearby stations during the same period;
- a neighbourhood closer to the industrial site and one farther away;
- weekdays and weekends;
- wind directions and speeds;
- the full distribution rather than only the mean.

The
[PM10 comparison between Tamburi and Talsano across 2017–June 2025](https://x.com/toniopoggi/status/1946655197259870594)
is one example. It lets a citizen examine relative differences, monthly
changes and longer-term trends in the same report.

Comparison still requires discipline. A difference between stations does not
automatically identify its cause. Monitors may have different local
conditions, coverage and surroundings. Weather and other sources matter.

The report should make the relationship visible and leave causal attribution
open to proper investigation.

## Exploration should preserve uncertainty

An earlier analysis examined black-carbon readings alongside wind direction
and speed.

Lower readings under stronger northerly winds could be consistent with
dispersion. They could also reflect another factor or a limitation in the
available monitoring.

<figure>
  <img src="{{ '/assets/images/air-quality-wind-black-carbon.jpg' | relative_url }}" alt="Omniscope analysis comparing wind direction and speed with black-carbon measurements around Taranto" width="800" height="425" loading="lazy">
  <figcaption>The purpose of the exploration is to expose a relationship worth investigating, not to convert correlation into proof. <a href="https://www.linkedin.com/posts/antoniopoggi_airpollution-dataviz-omniscope-activity-6612327702907228160-afWw">Read the original methodological note ↗</a></figcaption>
</figure>

This is a feature of interactive analysis: people can move beyond the headline
and test whether a pattern survives a different filter, period or station.

The interface should encourage that curiosity rather than presenting every
visual association as a conclusion.

## Citizens began using the instrument

The most important validation was not page traffic. It was use.

On 22 February 2019, PeaceLink described four students using Omniscope to
compare ARPA monitoring data in an environmental-education activity.
The
[classroom account](https://www.peacelink.it/ecodidattica/a/46222.html)
called the work environmental data democratisation.

Students did not need to reproduce my ingestion and preparation before asking
questions. They could begin with the comparison.

PeaceLink later used the reporting system in its own citizen-science activity.
Its
[2024 account of the project](https://www.peacelink.it/citizenscience/a/50007.html)
explains the practical benefit: citizens no longer had to download repeated
files and construct complex spreadsheets before comparing hourly information.

That is what “usable” means here. The technical work happens once and remains
open enough for many people to explore.

## From a reference library to a living instrument

The first report was mainly a way to explore validated historical files.

The project later acquired:

- automated refresh;
- hourly benzene monitoring;
- threshold detection;
- screenshots and public alerts;
- direct links back to interactive reports;
- longer-term multi-station comparisons;
- reproducible historical analysis.

This changed the role of the system.

A static open-data portal waits for somebody to search. A living analytical
instrument can notice a defined condition and bring it into public attention.

The
[Aria Taranto report](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Aria+Taranto/)
and
[historical benzene report](https://omniscope.app/Air+Pollution/Italy/Taranto.iox/r/Benzene/)
now sit behind the public alert channel. The alert creates immediacy. The
report retains time, station, history and comparison.

The next article in this series examines how to design that alert without
separating the claim from its evidence.

## The work entered a wider civic record

The accessible report became part of a collaboration with Alessandro
Marescotti, PeaceLink and local citizens.

For the February 2024 Senate hearing, we examined more than 80,000 hourly
benzene observations from Via Machiavelli. PeaceLink presented the resulting
evidence during the hearing on ILVA.

The analysis—and an important later discrepancy between its February snapshot
and ARPA’s final 2023 reporting—is documented separately in
[What I learned from analysing 80,000 hourly benzene measurements]({{ '/writing/analysing-80000-hourly-benzene-measurements/' | relative_url }}).

The civic value did not come from software acting alone.

Automation supplied timely, repeatable analysis. People in Taranto supplied
local observation, interpretation, communication and persistence. Institutions
retained their scientific and legal responsibilities.

The system helped those parts meet around evidence.

## A practical definition of usable public evidence

For institutional air-quality data, I now look for these properties:

1. **Source** — identify the agency, dataset and retrieval time.
2. **Grain** — state whether values are hourly, daily or annual.
3. **Coverage** — expose missing periods and station availability.
4. **Units** — preserve the measure and averaging duration.
5. **Context** — provide history and relevant comparisons.
6. **Raw observations** — let people inspect what supports the chart.
7. **Language** — communicate in the language of the intended community.
8. **Update state** — show when the report last refreshed.
9. **Reference definitions** — distinguish health guidance from legal limits.
10. **Caution** — separate an observed relationship from causal proof.

These are not advanced visualisation features. They are conditions for public
understanding.

## Make the path shorter

Software does not remove pollution. It does not make policy, replace
regulatory monitoring or settle scientific attribution.

It can shorten the path:

```text
institutional measurement
  → understandable comparison
  → citizen question
  → public evidence
  → informed scrutiny
```

In 2019, my contribution was to turn published files into something people
could use directly.

That remains the core idea.

Do not stop at making data downloadable.

Make the evidence explorable.
