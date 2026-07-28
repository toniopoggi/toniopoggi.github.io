---
title: "Why an LLM Should Not Be Your Analytics Engine"
subtitle: "Language models are excellent at understanding intent. Your numbers still need a system built to execute, govern and repeat analytical work."
date: 2026-07-27 00:02:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
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
  - "An LLM can explore data, draft queries and explain results, while the analytics engine keeps definitions, permissions and execution under control."
  - "For a one-off, low-consequence question an agent may be enough, but shared KPIs and operational reporting need repeatable assets."
  - "Agents can remove a lot of labour from the stack without removing the responsibilities that made the numbers dependable."
next_url: /writing/how-ai-agents-operate-governed-data-tools/
next_label: "Next in the series"
next_title: "How AI agents can operate governed data tools"
---

A strange idea is doing the rounds in boardrooms:

> We have an AI agent now. Put it on top of Snowflake, Salesforce or whatever.
> We can drop the pipeline work, BI tools, modelling and definitions. The agent
> will handle it.

I understand why this is appealing. It sounds like fewer tools, fewer people,
faster answers and lower cost. I use these models daily and we are giving them
more access to Omniscope, not less. I am not anti-AI. Quite the opposite.

But the argument mixes up getting an answer with running a reliable reporting
system. As I wrote in
[Can an Agent replace your BI stack?](https://www.linkedin.com/pulse/can-agent-replace-your-bi-stack-only-you-add-antonio-poggi-gpfme),
if finance reporting relies on "ask the agent again and see what it says", you
do not have a process. You have a conversation.

That conversation may be useful. It may even produce the right number. An
analytics engine has a longer job: preserve definitions, execute calculations
at the right grain, enforce access, survive refreshed data, run on schedule,
show failures and let somebody reproduce the result later.

## What LLMs are very good at

Let us keep the distinction simple. Automation is about repeatability: the same
input should produce the same output, you can schedule it, test it, monitor it
and see who changed what. Agents are about capability. They can explore an
unfamiliar schema, write queries or code, explain what they did and move across
several tools to complete a task.

Agents can drive automation, but they are not automation by default.

For ad-hoc exploration they can cover a surprising amount of the job. A model
can turn a vague business question into a plan, identify likely measures,
propose transformations, select a chart and explain the result to somebody who
does not know SQL. It can classify text, draft Python or R and help compare
alternative methods.

There is a version of the "agent replaces the stack" argument that holds. If
the organisation is small, the number has few consumers, "good enough" really
is acceptable and most questions are disposable, an agent on top of a
warehouse may save time and money. Forcing every experiment through a formal
production process would be silly.

That is the honest steelman. The boundary appears when the answer becomes
something other people rely on.

## What an analytics engine must do

Finance close, board reporting, shared KPIs, customer-facing analytics and
regulated data all change the requirements. Now the number needs an owner and a
definition. It needs access controls, validation, monitoring and a method that
can be reproduced next week or next quarter.

This is how I divide the work:

| Responsibility | Best role for the LLM | Best role for the analytics platform |
| --- | --- | --- |
| Understand a natural-language request | Interpret ambiguity and ask for missing context | Supply schemas, definitions and available operations |
| Choose a method | Propose a plan and alternatives | Constrain the plan to valid, permissioned tools |
| Calculate a result | Specify the calculation | Execute typed filters, joins, formulae and aggregations |
| Explain the finding | Produce a clear narrative | Expose the source values and calculation behind each claim |
| Repeat the work | Request or revise another run | Run saved logic against refreshed data |
| Govern access | Work within the user's intent | Enforce identity, project permissions and data boundaries |
| Operate in production | Help diagnose or revise | Schedule, monitor, log, retry and show failures |
| Preserve knowledge | Describe what was done | Store the query, workflow, report and version history |

The model still has a useful role in every row. It just does not carry the
whole system on its own.

## Defining the number

The obvious worry is a calculation error. In practice, the more dangerous
errors are often plausible interpretations of the wrong definition.

Imagine the agent produces the correct board number today. It can still fail
the CFO test if the same question returns a different value next week, nobody
can show the exact logic used at month-end, definitions drift between teams or
permissions are applied inconsistently.

This is not fixed by a longer prompt. The organisation has to store and enforce
what its metrics mean, including the time window, denominator, exclusions,
currency treatment and restatement rules. Otherwise natural language makes the
question easier to ask while leaving the real disagreement untouched.

The same applies to apparently ordinary language. In our five-table pencil
experiment, the word "exclusively" changed the required query. The arithmetic
was not difficult. The meaning was.

## From generated code to normal analytical work

We ask LLMs to write SQL, Python and workflow logic constantly. Generated code
is still code. It needs an identified source and schema, safe credentials,
permission checks, bounded execution, tests against known cases, handling for
nulls and schema changes, a recorded version and an owner.

Tool calls do not make those needs disappear. They have to execute through the
user's permissions and leave a query, workflow or report that somebody can
inspect.

<figure>
  <img src="{{ '/assets/images/articles/explained-calculation-local-llm.png' | relative_url }}" alt="An AI-generated analytical calculation expanded to show its formula and source inputs" width="1898" height="1295" loading="lazy">
  <figcaption>The prose is useful; the expanded formula and source inputs are what make the numerical claim checkable. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">See how this verification feature emerged from tester feedback ↗</a></figcaption>
</figure>

Once that generated query becomes a normal part of the analytical system, it
can be reviewed, compared, scheduled and fixed without having to reconstruct a
chat.

## Where the method lives

A chat contains useful context. It is a poor place to keep an organisation's
analytical method.

The next session may use another model. The source data may have changed. Part
of the discussion may fall outside the context window. A prompt update can
alter the plan, and a person reading the final response may not have access to
the earlier steps.

A saved query or workflow can declare its inputs, parameters, operations,
outputs, validation and execution state. That also keeps model choice
reversible. If the durable logic lives in one provider's conversation, changing
models means changing the analytical system. If it lives in workflows, reports
and code the team controls, the model is much easier to swap.

## The architecture we use

The pattern we are building in Omniscope looks like this:

```text
Natural-language question
          |
          v
LLM interprets intent and plans
          |
          v
Analytical tools execute
          |
          v
Query, workflow, chart and evidence
          |
          v
Human reviews, reuses and operationalises
```

The model can call real data-preparation, analytical and reporting tools.
Omniscope performs the operations and leaves them visible. The user can inspect
the result, revise it and, if the work deserves to survive, turn it into a
report or scheduled workflow.

This is the argument behind
[Omniscope as a toolbox for LLMs](https://www.linkedin.com/pulse/omniscope-toolbox-llms-ai-product-antonio-poggi-sfnpf)
and the later
[verification-layer work](https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/).

## Ten questions for consequential analytics

Before anybody deletes an established process in favour of "ask the agent", I
would ask:

1. Where are KPI definitions stored, and how are they enforced across teams?
2. Can the same result be reproduced from identified data and logic?
3. Can we show how a board number was produced, including versions and
   approvals?
4. How are late data, backfills and restated periods handled?
5. Which quality checks stop bad data reaching dashboards and executive packs?
6. How are source and row-level permissions enforced and audited?
7. What happens at 2am when the refresh fails, and who owns the SLA?
8. Can a metric change be reviewed, rolled out and rolled back?
9. What stops widespread chat querying from creating an uncontrolled cost
   spike?
10. Where does somebody get the canonical number without re-prompting?

If those answers are clear, an agent-first design may be viable. If every
answer is "the model will work it out", the design is not finished.

## What changes in the stack

AI is already removing a lot of labour from analytics. People can spend less
time finding tables, remembering syntax, writing standard transformations and
formatting the first chart. Smaller teams can do work that once required
several specialist hand-offs.

Good. That is real progress.

Definitions still need owners. Data still arrives late. Permissions still
matter, and scheduled jobs still fail at inconvenient times. The agent can
help build, operate and diagnose more of that system, but something still has
to own the number when it reaches the board pack.
