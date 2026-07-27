---
title: "How AI Agents Can Operate Governed Data Tools"
subtitle: "Treat the agent as a permissioned operator: give it bounded capabilities, explicit data access and artefacts people can review."
date: 2026-07-27 00:03:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "AI agents · Data governance"
series: "Verifiable and private AI analytics"
cluster: ai
cluster_label: "Verifiable and private AI analytics"
article_order: 3
read_time: "7 min"
description: "A practical architecture for AI agents to use governed analytics tools through permissions, bounded operations, execution records and human review."
image: /assets/images/articles/workflow-ninja-in-action.png
image_alt: "Workflow Ninja operating visible blocks inside an Omniscope data workflow"
image_width: 2940
image_height: 1674
image_caption: "An agent becomes useful when it can operate real platform capabilities and leave the resulting workflow visible to people."
tags:
  - AI agents
  - governed analytics
  - agent tools
  - data permissions
  - Omniscope Workflow Ninja
takeaways:
  - "An analytics agent should operate through an authenticated, scoped user or service identity and only through explicit, bounded tools."
  - "Every useful run should leave a normal query, workflow, report or export that people can inspect and rerun."
  - "Governance covers data exposure, execution, versioning and approval; a polished chat interface is not a security boundary."
next_url: /writing/local-llm-analytics-privacy-cost-deployment/
next_label: "Next in the series"
next_title: "Local LLM analytics: privacy, cost and deployment trade-offs"
---

In June 2026 I
[put Codex inside a secluded Windows virtual machine and gave it access to Omniscope](https://www.linkedin.com/posts/antoniopoggi_ai-analytics-omniscope-activity-7468002175340826624-zlHR).

From one request, it prepared several related e-commerce tables, joined and
aggregated them, calculated metrics and produced a table ready for a dashboard.
The interesting part was not that the agent could write code. It was that it
could choose between several ways of doing the work:

- an API or MCP server;
- Workflow Ninja;
- Report Ninja;
- the browser and Omniscope user interface.

The agent was acting more like a technically capable colleague than a
question-answering box.

That power changes the governance question. We are no longer asking only,
“What data can this model read?” We are asking:

> Which actions may this agent take, on whose authority, against which data,
> and what inspectable state will it leave behind?

That is the right question for agentic analytics.

## An agent is an operator, not an oracle

The word *agent* sometimes makes the system sound mysterious. In practice, an
analytics agent is a model in a loop:

1. observe the request and available context;
2. choose a permitted tool;
3. supply arguments;
4. receive the result or error;
5. decide what to do next;
6. stop when it has produced an acceptable outcome.

The model supplies planning and adaptation. The tools supply the real
capabilities.

If the available tool is “run arbitrary code with unrestricted credentials”,
the agent has a dangerous capability. If the tool is “aggregate these approved
fields from this published dataset”, the boundary is much clearer.

The quality of an agentic system therefore depends as much on tool design as on
model intelligence.

## Start with identity

An agent should not have an abstract superuser identity simply because it is
helpful.

It should act through an authenticated identity whose permissions are
understood. Depending on the use case, that may be:

- the requesting user;
- a dedicated service identity;
- a narrowly scoped project account;
- an approval-gated identity for a specific operation.

The distinction matters. A sales analyst asking a question should not gain
access to payroll data because the agent happens to know how to query it. A
published report should not expose its raw preparation project merely because
both appear in the same product.

In Omniscope, API and report access must be designed alongside project
permissions. The
[Query API documentation](https://help.visokio.com/support/solutions/articles/42000115174-omniscope-query-api-accessing-and-tranforming-data-via-rest)
is explicit that access to report data can include the underlying data made
available to that report. A safe published analytical layer is a design
decision, not something the agent can infer after deployment.

## Give the agent bounded tools

A good agent tool has a small, explicit contract.

Consider the difference between these two descriptions:

```text
execute(command)
```

and:

```text
aggregate(
  dataset,
  measures,
  dimensions,
  filters,
  sort,
  row_limit
)
```

The first grants a mechanism and leaves policy elsewhere. The second declares
the analytical operation, makes its inputs reviewable and allows the platform
to validate limits before execution.

Useful governed tools might let an agent:

- inspect an approved schema;
- profile a dataset;
- filter, join, aggregate or calculate fields;
- build a workflow from known blocks;
- query a published report;
- create a chart with declared encodings;
- execute a named workflow with bounded parameters;
- export an approved result;
- save a query or chart into a project.

The tool should return structured status and evidence, not merely “success”.
The agent needs to know what changed, which output was produced and whether
validation warnings occurred.

## Separate data sharing from tool access

Tool permission and model data exposure are related, but they are not the same.

An agent may be allowed to invoke an aggregate operation without being allowed
to send raw rows to an external model. It may receive a schema but not example
values. A local model may be permitted to inspect more data than a public
provider. Sensitive fields may need to be removed before any AI request is
constructed.

This suggests at least three explicit controls:

1. **what the user may access;**
2. **what the tool may execute;**
3. **what data may be placed in the model context.**

Conflating them creates accidental exposure. The model cannot respect a
boundary it was never told about, and a generic tool cannot enforce a policy it
cannot see.

<figure>
  <img src="{{ '/assets/images/articles/ai-data-sharing-settings.png' | relative_url }}" alt="Omniscope AI provider settings with the API key masked and the data-sharing level highlighted" width="1145" height="548" loading="lazy">
  <figcaption>Model access and data-sharing policy are separate controls; both should be explicit before an agent runs. <a href="https://help.visokio.com/support/solutions/articles/42000112241-ai-data-sharing">Review the data-sharing settings ↗</a></figcaption>
</figure>

## Make normal platform artefacts the result

An agent-created workflow should still look like a workflow.

This sounds obvious, but it is one of the most important properties of the
architecture. If an agent joins tables, calculates a metric and builds a
report, the result should remain:

- editable by a person;
- runnable without the original conversation;
- comparable with another method;
- versioned like other project work;
- subject to the platform’s permissions;
- available to a later agent through the same controlled tools.

In
[our June development account](https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/),
we described Workflow Ninja as a private-alpha system able to operate 138
existing workflow blocks through a 28-tool interface. Those numbers will
change. The enduring point is that the agent is not inventing a parallel data
platform. It is operating the capabilities already used by people.

## Preserve execution evidence

For every consequential run, I want enough information to reconstruct what
happened:

- authenticated identity;
- project and data context;
- tool selected;
- validated arguments;
- start and finish time;
- success, warning or failure state;
- produced artefact or changed version;
- source refresh used;
- approval where required.

Ordinary server logs, project version history and execution status already
cover important parts of this record. They should not be over-sold as a magical
agent audit system. The design task is to connect them into a useful evidence
chain.

The same honesty applies to reversibility. A versioned project may let a person
restore an earlier state. It does not make every external action reversible. An
exported file, message sent to a customer or write to another system needs its
own control.

## Put approval at the consequence boundary

Requiring approval for every read operation makes an agent irritating. Allowing
every external write makes it unsafe.

A more practical policy places human approval where consequence changes:

- reading an already permitted schema: usually automatic;
- calculating in a temporary workspace: usually automatic;
- saving a draft workflow: perhaps automatic and versioned;
- publishing a report: approval may be required;
- changing a canonical metric: approval required;
- writing to a system of record: explicit, scoped approval;
- sending a public alert or customer message: explicit policy and evidence.

The right boundary depends on the organisation, but it should be designed
before the agent encounters it.

## Treat errors as part of the interface

Agents improve through feedback. “Something went wrong” is poor feedback.

A governed tool should distinguish:

- invalid arguments;
- permission denied;
- source unavailable;
- schema changed;
- data-quality check failed;
- execution timed out;
- result exceeded an allowed size;
- action requires approval.

The agent can often recover: inspect the new schema, revise the plan, reduce the
query or ask the user. It should not be encouraged to bypass the control.

This is where mature analytics infrastructure matters. Scheduling, validation,
permissions, working copies and logs are not glamorous additions to an agent
demo. They are what lets the demo become operational.

## A minimum architecture

For a serious analytics agent, I would require:

1. authenticated user or service identity;
2. a curated tool catalogue rather than unrestricted execution;
3. schema and metric context appropriate to the request;
4. explicit policy for raw, sampled, aggregated and external-model data;
5. bounded arguments, result sizes and execution time;
6. ordinary project artefacts as the durable output;
7. logs and version history sufficient to inspect the run;
8. human approval at publishing or write boundaries;
9. a separate safe layer for data exposed through reports or APIs;
10. a named person responsible for the process.

None of this prevents the agent from being ambitious. It gives that ambition a
defined surface.

## Governance should make agents more useful

Poor governance is a list of prohibitions added after the prototype.

Good governance gives the agent reliable tools, clear errors and known
boundaries. It reduces the amount of policy the model must guess. It also makes
the output easier for a person to adopt because it lives in the same
environment as the rest of the work.

The agent can be creative in its plan.

The permissions, execution and evidence should be boring.

That is a compliment.
