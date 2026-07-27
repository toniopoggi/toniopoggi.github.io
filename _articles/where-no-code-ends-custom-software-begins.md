---
title: "Where No-Code Ends and Custom Software Should Begin"
subtitle: "Use visual components for common, inspectable logic; embedded code for the valuable exception; and external software when the system boundary demands it."
date: 2026-07-27 00:10:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "No-code · Custom software"
series: "Building complete data products"
cluster: products
cluster_label: "Building complete data products"
article_order: 5
read_time: "7 min"
description: "A practical decision framework for choosing visual no-code workflows, embedded Python/R/JavaScript or a separately engineered software service."
image: /assets/images/articles/secure-python-r-docker.png
image_alt: "Omniscope, R, Python and Docker logos arranged around a central shield"
image_width: 1000
image_height: 812
image_caption: "Custom code is most useful when it sits behind an explicit boundary with declared inputs, outputs, dependencies and permissions."
tags:
  - no-code
  - low-code
  - custom software
  - Python analytics
  - data applications
  - Omniscope
takeaways:
  - "The no-code boundary is set by the requirement, not by a purity contest."
  - "Use embedded code for specialist algorithms or interfaces while keeping common preparation, validation and orchestration visible."
  - "Choose a separate service or system of record when transactionality, concurrency, independent scaling or specialised security demands it."
next_url: /writing/
next_label: "Explore the publication"
next_title: "Browse all three article series"
---

In 2022 I
[described Omniscope as a no-code development platform](https://www.linkedin.com/pulse/leveraging-no-code-development-platform-build-data-apps-poggi).
In the same article I showed how to extend workflows with Python and R, and
interfaces with HTML and JavaScript.

That was not a contradiction. The requirement sets the boundary.

The best data applications I have seen use the simplest representation that
makes each part safe, clear and maintainable. A common join belongs in a
visible workflow. A specialised forecasting library may belong in Python. A
transactional customer record may belong in a database behind an application
service. A distinctive interaction may require JavaScript.

## What visual tooling is good at

Visual workflow blocks work particularly well for common data operations:

- import files, databases and APIs;
- select, rename and type fields;
- filter and sort;
- join and append;
- aggregate and pivot;
- calculate known formulae;
- validate records;
- parameterise execution;
- schedule and monitor;
- feed reports and exports.

These operations benefit from being visible.

A domain expert can inspect the sequence. A reviewer can open an intermediate
result. An error can point to a block. A later builder does not need to
reverse-engineer an undocumented script before changing one filter.

Visual does not mean trivial. A complex workflow can express substantial
logic. The question is whether the representation continues to help people
understand it.

## The first boundary: specialist method

No-code should end when forcing a valuable specialist method into generic
blocks makes it less clear or less capable.

Use embedded Python or R when you need:

- a particular statistical or machine-learning library;
- a domain-specific algorithm;
- a custom optimisation;
- an unusual file or protocol;
- a well-tested internal package;
- performance that a sequence of generic operations cannot provide.

The code should implement the *exception*, not recreate the plumbing around it.

For example:

```text
visual workflow
  → select and validate modelling fields
  → custom Python block runs specialist algorithm
  → typed result returns to workflow
  → compare, report and schedule visibly
```

The workflow still shows where the method is used, what enters it and what
comes out. The code owns the part that genuinely requires code.

## The second boundary: specialised interaction

A report can cover a great deal with charts, filters, tables, parameters and
editable fields.

Custom HTML and JavaScript become appropriate when the user’s job needs an
interaction the report system does not naturally express:

- a guided multi-step form;
- a domain-specific canvas or diagram;
- drag-and-drop planning;
- a bespoke control surface;
- integration with another browser component;
- a highly branded embedded experience.

Again, keep the contract narrow. The custom view should consume defined data
and parameters and emit defined events. It should not quietly become a second,
unversioned application framework inside the report.

## The third boundary: a separate system

Some requirements belong outside the analytical platform.

Choose a separately engineered service, application or system of record when
you need:

- high-concurrency transactional writes;
- strict consistency across several entities;
- complex authentication or delegated authorisation;
- independent scaling and availability;
- a public API with a long-lived external contract;
- low-latency event processing;
- offline mobile behaviour;
- specialised security certification;
- an application lifecycle owned by another team.

The analytics workflow can still participate. It may prepare data, calculate
scores, expose a governed result or drive the reporting surface. It should not
pretend to own responsibilities for which it was not designed.

The customer-success prototype described in the
[previous article]({{ '/writing/analytical-workflow-to-internal-product/' | relative_url }})
used SQLite for transactional records and Omniscope for the visible
preparation, validation, editing and reporting. That boundary was more honest
than treating an editable analytical table as the whole database.

## A decision matrix

When deciding where a component belongs, I use questions like these:

| Question | Visual workflow | Embedded code | Separate software |
| --- | --- | --- | --- |
| Is the operation common and well understood? | Usually | Sometimes | Rarely |
| Must business reviewers inspect it directly? | Strong fit | Expose inputs/outputs | Provide separate evidence |
| Does it depend on a specialist library? | If a native block exists | Strong fit | If it needs its own runtime/service |
| Is the behaviour highly transactional? | Weak fit | Weak fit | Strong fit |
| Does it need independent scaling? | Limited | Limited | Strong fit |
| Does the user need a bespoke interface? | Standard interactions | Custom view | Full application |
| Will it change frequently with business rules? | Strong fit | If tests and ownership exist | If a product team owns it |
| Must it deploy independently? | No | Usually no | Yes |

This is not a scoring formula. It forces the team to discuss the real reason
for crossing the boundary.

## Contain custom code

Custom code creates capability and responsibility.

A Python block should have:

- explicit input and output schemas;
- pinned or managed dependencies;
- bounded memory and execution time;
- only the files and network routes it needs;
- tests against known cases;
- logging that avoids secrets;
- a version and owner;
- a documented failure contract.

Omniscope can execute custom Python and R blocks in isolated Docker
containers. The
[container-execution documentation](https://help.visokio.com/support/solutions/articles/42000089057-custom-block-execution-in-docker-containers)
describes explicit images, volumes and server policy.

Isolation reduces risk. It does not make the algorithm correct, the dependency
safe or the result analytically appropriate.

## Package repeated exceptions

The first custom script may be a justified exception. The fifth copy is a
signal.

If several projects need the same method, package it as:

- a reusable custom block;
- a shared library;
- a versioned service;
- a template or macro;
- a governed API.

Give it a clear name and interface. Test it at the component boundary on every
change, publish a versioned artefact, and reuse that known version.

This is how low-code stays maintainable. The valuable custom method becomes a
normal tool rather than a pasted fragment.

<figure>
  <img src="{{ '/assets/images/articles/workflow-ninja-in-action.png' | relative_url }}" alt="An Omniscope workflow combining visible blocks with agent-assisted construction" width="2940" height="1674" loading="lazy">
  <figcaption>Visual orchestration can remain the shared map even when agents or custom code build particular components. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">Read how we keep AI-authored work inspectable ↗</a></figcaption>
</figure>

## AI-generated code is still custom software

AI reduces the cost of generation, but it does not remove dependency, security,
testing, review or ownership obligations. In the
[Data Quality Inspector experiment](https://www.linkedin.com/posts/antoniopoggi_data-quality-inspector-visokio-activity-7400205203167260672-G014),
asking an agent for the whole stack at once lost the plot; the useful middle
ground was to let AI create bounded pieces while I controlled architecture,
assembly, review and deployment.

## Signs you have stayed no-code too long

Move towards code or a service when:

- dozens of blocks imitate one clear algorithm;
- performance depends on repeated workarounds;
- the workflow hides rather than explains the method;
- a specialist library already solves the problem well;
- error handling cannot be expressed safely;
- the interface is fighting the user’s job;
- transactional behaviour is being simulated with files;
- the same workaround has been copied across projects.

The objective is not to minimise code. It is to minimise unnecessary
complexity.

## Signs you introduced custom software too early

Stay visual when:

- the logic is common and already provided;
- business users need to review or change it;
- the script mostly moves and renames fields;
- a bespoke service would add deployment and monitoring without new
  capability;
- only its original author understands it;
- the team has no plan to test or own it.

Writing 200 lines of code for a join does not make the join more serious.

## No code does not mean no engineering

A visual data application still needs:

- sound modelling;
- validation;
- access control;
- tests;
- release management;
- monitoring;
- retention;
- an owner.

Conversely, custom code does not make a system automatically robust.

The mature approach is compositional:

> visual where visibility and speed matter; code where specialisation matters;
> a separate system where the operational boundary matters.

No purity test. No cliff at the edge of the block library.

Just an explicit decision about which tool should carry which responsibility.
