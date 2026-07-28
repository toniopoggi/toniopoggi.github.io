---
title: "What Is Verifiable AI Analytics?"
subtitle: "A useful AI answer should leave behind the data, operations and assumptions a person needs to check it."
date: 2026-07-27 00:01:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
eyebrow: "AI analytics · Verification"
series: "Verifiable and private AI analytics"
cluster: ai
cluster_label: "Verifiable and private AI analytics"
article_order: 1
read_time: "7 min"
description: "Verifiable AI analytics separates model planning from governed execution, preserving the queries, calculations, lineage and evidence behind every answer."
image: /assets/images/omniscope-human-vs-ai.jpg
image_alt: "Human and AI comparison for the same multi-table pencil-vendor question in Omniscope"
image_width: 800
image_height: 502
image_caption: "The AI produced the result quickly; human inspection remained part of the complete task."
tags:
  - verifiable AI analytics
  - explainable analytics
  - AI governance
  - analytics lineage
  - Omniscope
takeaways:
  - "Verifiable AI analytics means being able to open the data, joins, calculations and assumptions behind an answer."
  - "The model can interpret the question and plan the work, while the analytics platform turns that plan into visible operations."
  - "A person still has to decide whether those operations and the underlying data are good enough for the decision."
next_url: /writing/why-an-llm-should-not-be-your-analytics-engine/
next_label: "Next in the series"
next_title: "Why an LLM should not be your analytics engine"
---

In October 2025 I ran a small experiment in Omniscope. I gave a person and an
AI the same apparently simple question:

> Which vendors exclusively supply pencils?

The data was spread across five normalised tables. To answer correctly, both
had to find the relationships, join at the right grain, identify the pencil
products and make sure "exclusively" had not quietly become "also".

The human analysis took about five minutes. The AI produced a result in roughly
30 seconds. I expected the AI to be faster. What I wanted to measure was the
whole task, so the experiment carried on: checking the joins, transformations
and conclusion took another three and a half minutes. The
[original comparison](https://www.linkedin.com/posts/antoniopoggi_ai-dataanalytics-humanintheloop-activity-7381657189771382784-kHJ1)
includes both times.

That is what I mean by **verifiable AI analytics**:

> AI-assisted analysis in which the data, definitions, operations, assumptions
> and resulting evidence remain visible enough for a person to inspect, rerun
> and challenge.

It does not promise that the answer is true. It gives you something better than
a confident sentence: the route to the answer, in a form you can examine.

## What the answer needs to show

Language models are very good at producing coherent explanations. That is
useful, but in analytics it can also disguise a weak method. A polished
percentage may have been built with the wrong date field, a many-to-many join,
a calculation at the wrong grain or a filter applied in the wrong place.
Missing rows can become zeros. An assumption can appear as if it came from the
data.

The pencil question is a good example. A fluent explanation of which vendors
"only" sell pencils tells me nothing about whether the query also included
vendors selling pens. I need to see the product filter, the joins and the
records behind the final set.

Asking the model to explain its reasoning does not fix this on its own. That is
more generated language. The executed query, source fields, calculation and
intermediate data are what I can actually check.

This distinction sits at the centre of our work on
[Omniscope as a verification layer](https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/).

## Who does what

The experiment becomes easier to understand if you separate what the model
did, what Omniscope did and what the person checking the result did.

### The model interprets and plans

The model interpreted the question, inspected the available schema and planned
the filters, joins and calculations it needed. This is exactly the sort of work
LLMs are good at: moving from human language to a possible analytical method.
It is also probabilistic. Another run or model may choose a different method,
and "possible" is not the same as correct.

### The platform executes

Omniscope performed the real work against the data: typed filters, joins with
declared keys, groupings, calculated fields and the resulting view. Those
operations existed as query or workflow steps, not only as prose inside the
model response. I could open them and see what had actually run.

### A person verifies

The reviewer did not have to rebuild the analysis from scratch. They did need
to check which records were included, whether the joins multiplied rows and
whether the result matched the meaning of the question.

The test I use is simple: could I explain and defend this method to somebody
else? If not, the answer is not ready just because it looks reasonable.

## What I want to inspect

Verification needs more than a source link or a paragraph about the model's
reasoning. It needs the pieces a reviewer would actually use.

### The analytical lineage

I want to see the path from the five source tables to the final vendor list:
which data was selected, how the tables were connected, where fields were
derived and in what order the operations ran. The same principle applies to a
much larger workflow.

### Metric definitions

"Exclusively" was the dangerous word in the pencil test. In another analysis it
might be "revenue", "active customer" or "conversion". These terms are not
self-defining. The workflow needs the relevant definition, including time
windows, denominators, exclusions or currency treatment, rather than letting
the model quietly choose one.

### Calculations and input values

If an answer says growth was 17.4%, I should be able to open that number and
see the two values, formula and time periods behind it. This sounds obvious,
but an early tester caught us presenting calculations in prose without enough
visible provenance. The objection was right, and we changed the product.

<figure>
  <img src="{{ '/assets/images/articles/inspectable-calculations.png' | relative_url }}" alt="Insight Explorer highlighting calculations that can be opened and verified" width="1885" height="1287" loading="lazy">
  <figcaption>Clickable values connect the narrative back to the formula and source inputs. This was added after an early tester objected that prose calculations had no visible provenance. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">Read the development account ↗</a></figcaption>
</figure>

### Assumptions and limitations

Some questions need an assumption because the required information is not in
the data. Fine, but say so. A reviewer should be able to distinguish a source
value from a calculation, a user-supplied parameter and an assumption the
model introduced. Unresolved limitations should remain visible too.

### The produced artefact

In Omniscope Insight Explorer, the answer can leave behind query lineage,
selected data, formulae, input origins and the chart configuration. I can open
that work, edit it, rerun it and, if it is worth keeping, add the query or chart
to a report. It does not have to disappear with the conversation. The
[Insight Explorer documentation](https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-)
describes that answer-to-artefact path in detail.

## Reproduction and analytical judgement

A visible workflow can reproduce the same wrong join very efficiently. It can
also expose a perfectly repeatable calculation based on a poor definition or
incomplete data. I still need to know what ran, against which data and with
which settings, but then somebody has to judge whether that method was
appropriate for the question.

The answer may also legitimately change. New rows can arrive. A metric
definition can be revised. A source system can restate history. A software
version can alter an algorithm. Reproducibility only has meaning when those
inputs and versions are identified.

## A practical verification test

For analysis that will affect a real decision, these are the checks I care
about:

1. Can I identify the source data, its refresh time and the permissions used?
2. Can I see how the business terms were defined?
3. Can I inspect the filters, joins, groupings and calculations that ran?
4. Are assumptions and limitations separate from findings derived from data?
5. Can another person rerun the work and compare it with a known case or
   independent method?
6. Is somebody still responsible for deciding that the result is fit to use?

Version history and a saved report or workflow help because they preserve what
changed and give useful work somewhere to live. If the only supporting evidence
is confident prose, I would not use the answer in a consequential process.

## As model quality improves

Better models are producing better plans and fewer obvious errors. Great. They
are also making an unchecked result easier to accept because it looks so
finished.

In the pencil experiment, 30 seconds for the first answer plus three and a half
minutes of inspection was a good result. The mechanical work became much
faster, and the person could spend the remaining time on the meaning of the
question and the joins that supported it. That is the trade I want. A
30-second answer I cannot inspect would be much less useful.
