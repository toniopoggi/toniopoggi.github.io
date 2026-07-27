---
title: "From Natural-Language Question to Inspectable Analytical Workflow"
subtitle: "Natural language is a very good input format. The evidence should finish as data, queries, calculations and reusable analytical artefacts."
date: 2026-07-27 00:05:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
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
  - "Natural language captures intent; it should not be the only representation of the method or result."
  - "A strong system resolves definitions, executes visible operations, validates the result and links each numerical claim to evidence."
  - "Useful one-off analysis should be promotable into a saved query, report or scheduled workflow."
next_url: /writing/
next_label: "Explore the publication"
next_title: "Browse all three article series"
---

“Ask your data a question” is an attractive promise.

It removes syntax from the first step. A person can describe the problem in
their own language instead of translating it into a query tool before they
have even started thinking.

The danger is treating the sentence at the other end as the complete product.

Natural language is an excellent input format. It is a poor evidence format.

The useful path is longer:

```text
question
  → resolved intent
  → analytical plan
  → governed execution
  → validation
  → answer with evidence
  → reusable artefact
```

This article follows that path.

## Step 1: state the analytical intent

A user might ask:

> Which product categories grew fastest this quarter, and was the growth
> driven by price or volume?

The sentence contains more ambiguity than it appears to:

- Which definition of product category?
- Calendar quarter or fiscal quarter?
- Revenue, gross value or booked value?
- Compared with the previous quarter or the same quarter last year?
- How should returns and currency changes be treated?
- Does “price” mean average realised unit price?
- Which data is complete enough to use?

The model’s first job is not to calculate. It is to turn an informal request
into an explicit analytical specification.

Sometimes it can resolve the terms from governed metadata. Sometimes it should
ask a question. Guessing quickly is not always the fastest route to a useful
answer.

## Step 2: supply the right context

An agent cannot plan sound analysis from table names alone.

The system should provide bounded context:

- approved datasets and fields;
- relationships and join keys;
- types and units;
- metric definitions;
- data freshness;
- row-level or project permissions;
- available analytical tools;
- known quality warnings;
- the report or business context in which the question was asked.

This is also the point to control data exposure. A cloud model may receive
schema and aggregate context while a local model is allowed to inspect sample
rows. Sensitive fields can be excluded before the request is constructed.

More context is not always better. The right context reduces ambiguity without
dumping an uncontrolled warehouse into the model window.

## Step 3: create a plan that can become operations

For the question above, a plan might be:

1. select the current and comparison quarters;
2. aggregate units and net revenue by product category and period;
3. calculate realised price as net revenue divided by units;
4. separate the change in revenue into price and volume contributions;
5. rank categories by growth;
6. retain a minimum-volume field so tiny categories are visible;
7. produce a chart and a supporting table.

The model may generate this plan, but the plan should not remain prose. Each
step needs a corresponding query or workflow operation that the analytical
platform can validate and execute.

This is where an LLM becomes more useful than a chat layer. It can select and
configure real tools.

## Step 4: execute against governed data

The platform now performs the work:

- typed date filters;
- joins using declared relationships;
- groupings at the intended grain;
- formulae with explicit inputs;
- sorting and ranking;
- chart construction with named fields.

Execution should inherit permissions and return structured state. If a field
is missing or a join multiplies rows, the model needs a specific error or
warning rather than a blank result it can explain away.

The difference matters:

```text
“I would join orders to products and calculate growth.”
```

is a proposed method.

```text
orders.product_id = products.product_id
→ 184,203 order rows
→ grouped by category and fiscal_quarter
→ net_revenue = gross_revenue - returns
```

is the beginning of an inspectable execution record.

## Step 5: validate before narrating

Before producing a polished conclusion, the system should test the result.

Useful checks include:

- row counts before and after joins;
- uniqueness of expected keys;
- missingness in required measures;
- reconciliation of totals with a known report;
- complete coverage of the requested periods;
- denominator checks;
- outlier and small-sample warnings;
- confirmation that units and currencies match.

Validation does not have to become a giant ceremony. A few relevant checks can
prevent a confident explanation of a broken intermediate table.

The model can help choose checks. The platform should execute them.

## Step 6: produce an answer that points back to evidence

The narrative should clearly distinguish:

- direct observations;
- derived calculations;
- user-supplied parameters;
- assumptions;
- limitations.

If it says a category grew by 18%, the value should be openable. A reviewer
should be able to see the two periods, totals and growth formula. If the answer
attributes the change to price, the price and volume decomposition should be
available rather than merely described.

This is the purpose of the “Explain Query” work in
[Omniscope Insight Explorer](https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-).
Lineage, chart configuration, data, formulae, input origins and limitations
remain connected to the response.

<figure>
  <img src="{{ '/assets/images/articles/insight-explorer-query-lineage.png' | relative_url }}" alt="Omniscope Explain view connecting source tables through query steps to a joined analytical result" width="1097" height="714" loading="lazy">
  <figcaption>Explain Query connects the answer to the exact sources, joins and transformations used to produce it. <a href="https://help.visokio.com/support/solutions/articles/42000116042-insight-explorer-natural-language-data-q-a-from-answer-to-verifiable-and-reusable-artefacts-">See the Insight Explorer documentation ↗</a></figcaption>
</figure>

Showing the model’s internal reasoning would not provide the same assurance.
Verification lives in the executed operations and data.

## Step 7: turn the answer into an artefact

Many natural-language systems stop after displaying a response. That wastes
the most valuable part of the work.

If the query was useful, a user should be able to:

- save it;
- add the chart to a report;
- edit the generated operations;
- compare it with another method;
- rerun it when data refreshes;
- place validation around it;
- schedule it;
- expose it through a controlled application.

The temporary answer becomes part of the organisation’s analytical memory.

This does not mean every question should become a dashboard. Most should not.
It means the useful ones have a path out of chat.

## A second pattern: extract once, query many times

Natural-language analytics is not limited to tables that already exist.

In one recent experiment, we processed a Ferrari Luce press kit containing
roughly 90,000 characters. Repeatedly sending the whole document to a chat
would have been slow, expensive and difficult to govern.

Instead, a local model and LangExtract performed a semantic ETL step. The
workflow produced related tables for:

- facts;
- attributes;
- metrics;
- entities;
- run metadata.

Extracted records retained grounded source spans, and the extraction was
instructed not to invent missing information. Insight Explorer then answered
questions over the structured semantic layer rather than rereading the raw
document for every request.

This pattern changes the economics and the evidence:

```text
unstructured document
  → grounded extraction
  → typed relational records
  → quality review
  → repeated analytical questions
```

As I wrote in the
[full semantic-ETL experiment](https://visokio.com/2026/05/28/from-unstructured-text-to-structured-qa-langextract-omniscope-and-insight-explorer/),
the LLM is one step in a larger workflow.

## What can still go wrong?

An inspectable workflow is not immune to error.

The model may select a reasonable but wrong metric. A join may be technically
valid but analytically inappropriate. A source document may be misleading.
An extraction may omit a qualification. A human may approve a result too
quickly.

The architecture helps because these failures have somewhere to become
visible.

The reviewer can inspect:

- the resolved definitions;
- the selected sources;
- the operations;
- the intermediate data;
- the validation;
- the cited spans;
- the final claim.

Without that chain, disagreement becomes another prompt. With it, disagreement
can become a precise correction.

## A practical standard

For natural-language analytics, I would expect the system to answer five
questions:

1. **Intent:** What did it decide the user meant?
2. **Method:** Which operations did it choose?
3. **Execution:** What actually ran against the data?
4. **Evidence:** Which records and calculations support the claims?
5. **Reuse:** What can be saved, edited and rerun?

If any answer is “it is somewhere in the conversation”, the workflow is not
finished.

## Language at the front, structure underneath

Natural language opens analytics to more people and makes experienced people
faster. That is a substantial change.

It does not require us to turn data work into an exchange of unstructured
sentences.

Use language to express intent. Use the model to plan and explain. Use governed
tools to execute. Preserve the work as structure.

The chat can disappear.

The evidence should remain.
