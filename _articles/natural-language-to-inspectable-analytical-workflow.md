---
title: "From Natural-Language Question to Inspectable Analytical Workflow"
subtitle: "Natural language is a very good input format. The evidence should finish as data, queries, calculations and reusable analytical artefacts."
date: 2026-07-27 00:05:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
eyebrow: "Natural-language analytics · Workflow"
series: "Verifiable and private AI analytics"
cluster: ai
cluster_label: "Verifiable and private AI analytics"
article_order: 5
read_time: "7 min"
description: "Follow an AI analytics request from natural-language intent through schema context, governed execution, validation, evidence and a reusable workflow."
image: /assets/images/articles/semantic-etl-pipeline.png
image_alt: "Semantic ETL pipeline turning a long document into structured relational evidence for analytical question answering"
image_width: 1672
image_height: 941
image_caption: "A useful pattern for unstructured material: extract once into grounded, structured records; query the evidence many times."
tags:
  - natural-language analytics
  - analytical workflow
  - semantic ETL
  - AI verification
  - Insight Explorer
  - Omniscope
takeaways:
  - "Natural language is an easy way to describe the task, while the method and result are more useful as data, operations and saved artefacts."
  - "In the Ferrari Luce experiment we extracted grounded facts into related tables before asking questions over the material."
  - "That structure made the answers faster to reuse and gave a reviewer records, source spans and workflow steps to inspect."
next_url: /writing/
next_label: "Explore the publication"
next_title: "Browse all three article series"
---

Everyone was talking about the Ferrari Luce for different reasons. I used its
press kit for a different experiment: turning roughly 90,000 characters of
PDF and text into structured, queryable data.

The workflow, all in Omniscope, looked like this:

```text
PDF and text
  → LangExtract in a custom block
  → facts, attributes, metrics, entities and run metadata
  → Insight Explorer Q&A over the structured tables
```

The Q&A model was not repeatedly retrieving from the raw document. We extracted
the material once, kept grounded source spans, reviewed the resulting tables
and then asked questions over those records.

That is a much more interesting use of natural language than putting a chat box
over a document and hoping for the best. The initial request can be informal,
but the work it creates should become something people can inspect.

## Step 1: state the analytical intent

The task in this experiment was to turn the Ferrari press kit into structured
facts that could be queried many times. That immediately raises questions the
workflow has to settle. Which kinds of thing count as a fact? How should a
performance number differ from an attribute? Which entity does a statement
belong to? What happens when the document does not provide a value?

We instructed the extraction not to invent missing information and to preserve
the source text supporting each record. These are part of the analytical
intent, not optional prompt decoration.

For a normal question over tables, the same discipline applies. The model may
need the organisation's definition of a metric, the comparison period or an
exclusion before it can plan sensible work. Sometimes the context resolves the
term. Sometimes the quickest route is to ask the user.

## Step 2: supply the right context

The model cannot build a reliable plan from a filename or a list of table names
alone. In the Ferrari workflow, it needed the document, the extraction schema,
the required record types and the rule that each extracted item stay grounded
in the source.

Once those records existed, Insight Explorer needed the related tables, their
fields and relationships, types and units, plus any quality warnings from the
extraction run. The application also decides which data the selected model may
see. A cloud model might receive schema and aggregates while a local model is
allowed to inspect sample rows.

More context is not always better. I want the context needed for the task,
without dumping every available document or an uncontrolled warehouse into the
model window.

## Step 3: create a plan that can become operations

For this experiment the plan was concrete:

1. load and prepare the press-kit text;
2. extract facts, attributes, metrics and entities with grounded source spans;
3. turn those results into related analytical tables;
4. keep run metadata so the extraction can be identified;
5. review the structured output and its quality;
6. let Insight Explorer query those tables;
7. preserve useful queries, charts and evidence in Omniscope.

LangExtract and the local model helped perform the fuzzy part: recognising
meaning in unstructured language. Omniscope handled the surrounding data
workflow and the resulting analytical records. The plan did not remain a
paragraph describing what the system *would* do.

## Step 4: execute against governed data

Once the extraction ran, the press kit became ordinary analytical data:
filterable, joinable, visualisable and available to the same data-quality and
reporting tools as other Omniscope datasets.

That gave us tables for performance metrics, battery specifications, design
features, collaborators, entities and attributes. Run metadata identified the
extraction, while grounded spans retained the connection to the original
document.

```text
unstructured document
  → grounded extraction
  → typed relational records
  → quality review
  → repeated analytical questions
```

This execution record is more useful than a model saying it "read the press
kit". I can inspect the extracted row, its type and the source text from which
it came.

## Step 5: validate before narrating

Extraction can look impressive while quietly dropping a qualification,
duplicating a fact or assigning a number to the wrong entity. Before asking for
a polished summary, start with ordinary checks: inspect the source
span, look for duplicates and missing values, confirm types and units, review
the related entity, and make sure absent information has not been filled by the
model's imagination.

The table design matters too. Facts, attributes, metrics and entities have
different shapes. Forcing all of them into one vague text table would make the
next analytical step harder, even if the extraction itself sounded clever.

Validation does not need to become a giant ceremony. A small review of the
records most relevant to the question can catch a bad extraction before it
becomes a confident answer.

## Step 6: produce an answer that points back to evidence

Insight Explorer then answered natural-language questions over the structured
semantic layer. If an answer used a performance metric, the reviewer could
inspect the table record and the grounded press-kit span behind it. The model's
internal reasoning was not the evidence; the extracted records and executed
query were.

This is the purpose of the "Explain Query" work in
[Omniscope Insight Explorer](https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-).
Lineage, chart configuration, data, formulae, input origins and limitations
remain connected to the response.

<figure>
  <img src="{{ '/assets/images/articles/insight-explorer-query-lineage.png' | relative_url }}" alt="Omniscope Explain view connecting source tables through query steps to a joined analytical result" width="1097" height="714" loading="lazy">
  <figcaption>Explain Query connects the answer to the exact sources, joins and transformations used to produce it. <a href="https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-">See the Insight Explorer documentation ↗</a></figcaption>
</figure>

The narrative should still distinguish what came directly from the source,
what was derived, which parameters the user supplied and which limitations
remain.

## Step 7: turn the answer into an artefact

A useful query should have a life beyond the chat. In Omniscope I can save it,
edit the generated operations, add its chart to a report, compare the method,
rerun it when data changes and place validation or scheduling around it.

Most questions do not need to become dashboards. But when a question is asked
again, or its answer starts feeding a decision, rebuilding the method from
prompt history is a waste. The structured tables and saved query give the work
somewhere normal to live.

## The result: extract once, query many times

Repeatedly sending all 90,000 characters to a chat would be slower, more
expensive and harder to review. The semantic-ETL approach performs the fuzzy
extraction once and makes the result available for many analytical questions.

It also changes where an error can be corrected. If a source passage was
extracted badly, fix or rerun the extraction. If the query used the wrong
field, inspect and revise the query. You do not have to keep rephrasing the
question and hoping the next answer improves.

The
[full semantic-ETL experiment](https://visokio.com/2026/05/28/from-unstructured-text-to-structured-qa-langextract-omniscope-and-insight-explorer/)
includes the workflow and table design in more detail. The LLM was one useful
step inside it, not the whole application.

## What can still go wrong?

An inspectable workflow is not immune to error. The extraction may omit a
qualification, the source document itself may be misleading, a technically
valid relationship may still be wrong for the question, or a reviewer may
approve the result too quickly.

The advantage is having somewhere to look. We can inspect the resolved
definition, source passage, extracted record, intermediate tables, executed
operations and final claim. A disagreement can become a correction to a
specific step rather than another round of prompting.

## A practical standard

For a natural-language analytical system, I would still ask five questions:

1. **Intent:** What did it decide the user meant?
2. **Method:** Which operations did it choose?
3. **Execution:** What actually ran against the data?
4. **Evidence:** Which records and calculations support the claims?
5. **Reuse:** What can be saved, edited and rerun?

If the answer to any of these is "somewhere in the conversation", the work is
not ready to reuse.

## Language at the front, structure underneath

Natural language made the Ferrari experiment easier to define and made the
resulting tables easier to question. The durable part was still the workflow:
grounded extraction, related records, quality review, executed queries and
artefacts that could be opened again.

If an answer looked wrong, I knew whether to inspect the source span, the
extraction or the query. That is a much better debugging interface than asking
the same document another question and getting a new paragraph back.
