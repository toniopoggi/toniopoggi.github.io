---
title: "Why an LLM Should Not Be Your Analytics Engine"
subtitle: "Language models are excellent at understanding intent. Your numbers still need a system built to execute, govern and repeat analytical work."
date: 2026-07-27 00:02:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "AI analytics · Architecture"
series: "Verifiable and private AI analytics"
cluster: ai
cluster_label: "Verifiable and private AI analytics"
article_order: 2
read_time: "7 min"
description: "LLMs should plan and explain analytics, while governed data tools execute calculations, enforce definitions and preserve reproducible evidence."
image: /assets/images/articles/ai-agent-control.png
image_alt: "Illustration of competing AI model providers represented as robot racers"
image_width: 1536
image_height: 1024
image_caption: "The model race moves quickly; durable analytical definitions and workflows should outlast it."
tags:
  - LLM analytics
  - analytics architecture
  - AI agents
  - data governance
  - Omniscope
takeaways:
  - "An LLM is a powerful interface and planner, but it is not a substitute for metric definitions, typed execution, permissions and operational controls."
  - "The honest architecture is LLM plus analytics engine, not LLM versus analytics stack."
  - "For consequential numbers, require an executable query or workflow and evidence a reviewer can inspect."
next_url: /writing/how-ai-agents-operate-governed-data-tools/
next_label: "Next in the series"
next_title: "How AI agents can operate governed data tools"
---

As I wrote in
[Can an Agent replace your BI stack?](https://www.linkedin.com/pulse/can-agent-replace-your-bi-stack-only-you-add-antonio-poggi-gpfme),
if your finance reporting process is “ask the agent again and see what it
says”, you do not have a reporting process.

You have a conversation.

That conversation may be useful. It may be much faster than the spreadsheet
work it replaced. It may even produce the right number.

But an analytics engine has to do more than produce a convincing answer once.
It has to preserve definitions, handle data types and grain, execute
calculations, enforce access, survive refreshed data, run on schedule, expose
failures and let another person reproduce the result.

This is why I do not think a language model should be your analytics engine.

That is not an anti-LLM position. We are giving models more access to
Omniscope, not less. It is an argument for putting probabilistic intelligence
in the part of the system where it is most useful.

## What LLMs are very good at

The case for using a language model in analytics is strong.

A model can translate a vague business question into a more precise plan. It
can explore an unfamiliar schema, identify likely measures, draft a query,
select tools, propose a chart and explain the result. It can help a user who
knows the business but does not know SQL.

It can also do valuable analytical work directly:

- classify and extract information from unstructured text;
- propose transformations;
- generate Python, R or SQL;
- compare alternative approaches;
- summarise findings for different audiences;
- notice plausible relationships a person should investigate.

For ad-hoc, low-consequence exploration, an agent may cover a surprisingly
large part of the job. If the question is disposable, the dataset is small and
“good enough” really is good enough, forcing every answer through a formal
production system would be unnecessary.

That is the strongest version of the opposing case, and I agree with it.

The boundary appears when the number becomes something other people will rely
on.

## What an analytics engine must do

Once a result feeds a board pack, bonus calculation, customer application,
regulatory process or shared KPI, different obligations appear.

| Responsibility | Best role for the LLM | Best role for the analytics platform |
| --- | --- | --- |
| Understand a natural-language request | Interpret ambiguity and ask for missing context | Supply schemas, governed definitions and available operations |
| Choose a method | Propose a plan and alternatives | Constrain the plan to valid, permissioned tools |
| Calculate a result | Specify the required calculation | Execute typed filters, joins, formulae and aggregations |
| Explain the finding | Produce a clear narrative | Expose the source values and calculation behind each claim |
| Repeat the work | Request or schedule another run | Run the saved logic against refreshed data |
| Govern access | Operate within the user’s intent | Enforce identity, project permissions and data boundaries |
| Operate in production | Help diagnose or revise | Schedule, monitor, log, retry and surface failures |
| Preserve knowledge | Describe what was done | Store the query, workflow, report and version history |

The model remains important in every row. It simply does not carry the whole
system on its own.

## Numbers need semantics, not only arithmetic

The obvious concern is that a model can make a calculation error. That is real,
but it is not the most interesting problem.

Most damaging analytical errors are semantically plausible.

Imagine asking for monthly recurring revenue. The arithmetic is simple. The
definition is not:

- Are annual contracts divided by twelve?
- Are paused subscriptions included?
- Which exchange rate is used?
- Are credits netted in the booking month or service month?
- Is expansion counted at signature or activation?
- What happens when historical contracts are restated?

A model cannot infer the organisation’s canonical answer from the phrase
“monthly recurring revenue”. It needs a governed definition, and the system
needs to enforce that definition consistently.

Without this, natural language makes analytics easier to request while leaving
the hardest disagreement untouched.

## A generated query is not yet a governed query

Asking an LLM to write SQL or Python is useful. We do it constantly.

The generated code still needs:

- an identified source and schema;
- safe credentials;
- permission checks;
- bounded execution;
- tests against known cases;
- handling for nulls, duplicates and schema drift;
- a recorded version;
- an owner.

The same applies when the model uses tools rather than writing code. The tool
call must execute within the user’s permissions and return an artefact that can
be inspected.

The important change is not that the model can produce a query. It is that the
query becomes a normal part of the analytical system.

<figure>
  <img src="{{ '/assets/images/articles/explained-calculation-local-llm.png' | relative_url }}" alt="An AI-generated analytical calculation expanded to show its formula and source inputs" width="1898" height="1295" loading="lazy">
  <figcaption>The prose is useful; the expanded formula and source inputs are what make the numerical claim checkable. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">See how this verification feature emerged from tester feedback ↗</a></figcaption>
</figure>

## Why conversation history is not operational memory

A chat contains valuable context, but it is a poor substitute for a durable
analytical artefact.

The next session may use a different model. The source data may have changed.
Part of the conversation may fall outside the context window. A prompt update
may alter the plan. A person reading the final response may not have access to
the hidden steps.

By contrast, a saved workflow or query can declare:

- its inputs;
- its parameters;
- its sequence of operations;
- its outputs;
- its validation;
- its execution state.

That is what allows useful ad-hoc work to become repeatable work.

This is also why I prefer model neutrality. If the durable logic lives in a
particular provider’s conversation, changing models means changing the
analytical system. If it lives in ordinary workflows, reports and code that we
control, the model is replaceable.

## The better architecture

The pattern we are building in Omniscope is straightforward:

```text
Natural-language question
          |
          v
LLM interprets intent and plans
          |
          v
Governed analytical tools execute
          |
          v
Query, workflow, chart and evidence
          |
          v
Human reviews, reuses and operationalises
```

The model is not outside the stack. It is an operating layer over the stack.

It can call real preparation, analytical and reporting capabilities. The
platform applies the operations and preserves them visibly. The user can
inspect the result, revise it and promote it into a reusable report or
scheduled workflow.

This is the argument behind
[Omniscope as a toolbox for LLMs](https://www.linkedin.com/pulse/omniscope-toolbox-llms-ai-product-antonio-poggi-sfnpf)
and the more recent
[verification-layer work](https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/).

## Ten questions for consequential analytics

Before replacing an established analytical process with “ask the agent”, test
the proposed system against these questions:

1. Does it use the same metric definition as the rest of the organisation?
2. Can the exact result be reproduced from identified data and logic?
3. Is there an audit trail of the operations that ran?
4. Are data-quality checks applied before the answer is used?
5. Are source and row-level permissions enforced?
6. Can it run reliably without a person keeping the chat alive?
7. What happens when a field is renamed or a source is late?
8. Can logic changes be reviewed and rolled back?
9. Can costs and model usage be controlled?
10. Which artefact becomes the canonical source of truth?

If the answer to all ten is “the model will work it out”, the design is
unfinished.

## The stack does not disappear

AI will remove a great deal of labour from analytics. It already has.

People will spend less time finding tables, remembering syntax, assembling
standard transformations and formatting the first version of a chart. Smaller
teams will complete work that previously required several specialist hand-offs.

But the responsibilities of an analytical system remain. Definitions still
need owners. Data still arrives late. Permissions still matter. Calculations
still need to be defensible. Scheduled jobs still fail at inconvenient times.

The choice is not between an LLM and an analytics stack.

It is between an LLM improvising around the stack, and an LLM operating it
properly.

The stack does not go away. The labour shifts.
