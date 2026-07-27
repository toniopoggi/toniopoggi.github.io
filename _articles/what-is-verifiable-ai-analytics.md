---
title: "What Is Verifiable AI Analytics?"
subtitle: "A useful AI answer should leave behind the data, operations and assumptions a person needs to check it."
date: 2026-07-27 00:01:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
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
  - "Verifiable AI analytics leaves an inspectable analytical artefact, not only a plausible sentence."
  - "The model can interpret and plan; governed tools should execute joins, filters, calculations and queries."
  - "Visible logic makes an answer reviewable and repeatable, but it does not make bad data or a bad assumption automatically correct."
next_url: /writing/why-an-llm-should-not-be-your-analytics-engine/
next_label: "Next in the series"
next_title: "Why an LLM should not be your analytics engine"
---

In [one Omniscope experiment](https://www.linkedin.com/posts/antoniopoggi_ai-dataanalytics-humanintheloop-activity-7381657189771382784-kHJ1),
I gave a person and an AI the same apparently simple question:

> Which vendors exclusively supply pencils?

The data was spread across five normalised tables. Answering correctly meant
finding the right relationships, joining at the right grain, filtering the
right products and checking that “exclusively” had not quietly become “also”.

The human analysis took about five minutes. The AI produced a result in roughly
30 seconds. Then came the important part: a person spent about three minutes
checking the joins, transformations and conclusion.

That review was not an unfortunate tax on the AI result. It was the thing that
made the result usable.

This is what I mean by **verifiable AI analytics**:

> AI-assisted analysis in which the data, definitions, operations, assumptions
> and resulting evidence remain visible enough for a person to inspect, rerun
> and challenge.

It is not a promise that the answer is automatically true. It is an
architecture that makes the route to the answer available for examination.

## A plausible answer is not evidence

Language models are exceptionally good at producing coherent explanations.
That strength creates a particular risk in analytics: a fluent answer can feel
more certain than the work underneath it deserves.

A response may contain a perfectly formatted percentage while concealing any
number of problems:

- the wrong date field;
- an accidental many-to-many join;
- a total calculated at the wrong grain;
- a filter applied after rather than before an aggregation;
- a business term interpreted differently from the organisation’s definition;
- missing rows silently treated as zeros;
- an assumption presented as if it came from the source data.

Adding a paragraph that says “here is my reasoning” does not solve this. Model
reasoning is another generated text. The executed query, the source fields and
the actual calculation are the evidence.

This distinction sits at the centre of our work on
[Omniscope as a verification layer](https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/).

## Three jobs, not one magic box

The cleanest way I have found to think about the system is to separate three
jobs.

### The model interprets and plans

The model is useful where language and ambiguity are unavoidable. It can:

- interpret the question;
- identify likely measures and dimensions;
- propose filters, joins and calculations;
- decide which analytical tools are needed;
- explain the result in language appropriate to the audience.

This is probabilistic work. There may be several sensible plans, and some will
be better than others.

### The platform executes

The analytical platform performs the concrete operations against the data:

- typed filters;
- joins with declared keys;
- grouped aggregations;
- calculated fields;
- statistical or machine-learning operations;
- chart construction;
- data-quality checks.

These operations should be represented as real queries or workflow steps,
rather than existing only inside the model’s response.

### A person verifies

The person does not need to repeat every click from scratch. They do need to be
able to answer practical questions:

- Which source did this value come from?
- What does the metric mean here?
- Which records were included and excluded?
- At what grain was the calculation performed?
- Did the join multiply any rows?
- Which parts came from data and which were assumptions?
- Would I be comfortable defending this method to somebody else?

That final question is a useful one. It changes the standard from “does the
answer look reasonable?” to “can I stand behind how it was produced?”

## What must be inspectable?

Verification becomes practical when the system preserves more than a source
link.

### The analytical lineage

The reviewer should see the path from the source tables to the final result:
which data was selected, how tables were connected, where fields were derived
and in what order the operations ran.

### Metric definitions

“Revenue”, “active customer” and “conversion” are not self-defining. A
verifiable system needs the organisation’s definitions, including windows,
denominators, exclusions, currency treatment and restatement rules.

### Calculations and input values

If a response says that growth was 17.4%, the user should be able to open the
calculation and see the two values, formula and time periods behind it.

<figure>
  <img src="{{ '/assets/images/articles/inspectable-calculations.png' | relative_url }}" alt="Insight Explorer highlighting calculations that can be opened and verified" width="1885" height="1287" loading="lazy">
  <figcaption>Clickable values connect the narrative back to the formula and source inputs. This was added after an early tester objected that prose calculations had no visible provenance. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">Read the development account ↗</a></figcaption>
</figure>

### Assumptions and limitations

Some questions cannot be answered from the available data without an
assumption. That is not necessarily a failure. Hiding the assumption is.

A useful result distinguishes:

- values taken directly from data;
- values calculated from data;
- parameters supplied by the user;
- assumptions introduced to make the analysis possible;
- limitations that remain unresolved.

### The produced artefact

The strongest output is not a transient chat message. It is a query, chart,
workflow or report that a person can open, edit and run again.

In Omniscope Insight Explorer, the route from answer to evidence can include
the query lineage, chart configuration, selected data, formulae and input
origins. A useful query or chart can then be promoted into the report rather
than disappearing when the conversation ends. The
[Insight Explorer documentation](https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-)
describes that answer-to-artefact path in detail.

## Reproducible does not mean correct

This qualification matters.

A deterministic platform can reproduce the same wrong join very efficiently.
A visible workflow can expose a calculation based on a poor definition. A
carefully logged process can run against incomplete data.

Verification therefore has two layers:

1. **mechanical verification** — what actually ran, against which data, with
   which settings;
2. **analytical verification** — whether that method was appropriate for the
   question and the decision.

The first makes the second possible. It does not replace it.

The answer may also legitimately change. New rows can arrive. A metric
definition can be revised. A source system can restate history. A software
version can alter an algorithm. Reproducibility only has meaning when those
inputs and versions are identified.

## A practical verification test

Before trusting AI-generated analysis in a consequential process, I would ask:

1. Can we identify the exact source data and its refresh time?
2. Are the business terms in the question mapped to explicit definitions?
3. Can we inspect filters, joins, groupings and calculations?
4. Are assumptions separated from data-derived findings?
5. Can another person rerun the work?
6. Can the result be compared with a known case or independent method?
7. Are access permissions applied to the execution, not only the chat screen?
8. Can a useful result become a governed report or workflow?
9. Will changes to logic, data or software be visible?
10. Is a named person still accountable for deciding whether the answer is fit
    to use?

If the only evidence is the confidence of the prose, the system is not
verifiable.

## Why this matters more as AI improves

Better models will produce more useful plans and fewer obvious errors. That is
welcome. It does not remove the need for verification; it makes unverified
answers easier to accept.

The useful destination is not slower AI surrounded by bureaucracy. It is
faster analytical work with a shorter, clearer path to inspection.

The model can remove much of the mechanical labour. The platform can preserve
the analytical operations. The person can spend more time on definitions,
assumptions and consequences.

Getting an answer is impressive.

Knowing what produced it is what turns the answer into work.
