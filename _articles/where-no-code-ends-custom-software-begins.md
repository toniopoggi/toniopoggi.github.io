---
title: "Where No-Code Ends and Custom Software Should Begin"
subtitle: "How I decide whether a requirement belongs in a visual workflow, a bounded Python/R/JavaScript component or a separate service."
date: 2026-07-27 00:10:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
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
  - "The requirement sets the no-code boundary: common preparation, validation and orchestration can remain visible."
  - "Specialist algorithms or interfaces can then sit inside bounded, testable code components."
  - "When transactionality, concurrency, independent scaling or specialised security demands more, the boundary moves to a separate service or system of record."
next_url: /writing/
next_label: "Explore the publication"
next_title: "Browse all three article series"
---

In 2022 I
[described Omniscope as a no-code development platform](https://www.linkedin.com/pulse/leveraging-no-code-development-platform-build-data-apps-poggi).
It began with questions people actually ask after hearing “no-code”: how do I
load the data, clean it, analyse it, build the interface, automate the result
and deploy it? Near the end I invited developers to extend the same workflows
with Python and R, or build custom interfaces with HTML and JavaScript.

Both parts were intentional. A common join is usually clearer in a visible
workflow. A specialised forecasting library may be clearer in Python. A
transactional customer record may belong in a database behind an application
service, while a distinctive browser interaction may require JavaScript. In
practice I choose from those options by following the job and its operational
requirements.

## What visual tooling is good at

Visual workflow blocks work well for the operations that appear in almost
every data project: importing files, databases and APIs; selecting, renaming
and typing fields; filtering, sorting, joining, appending, aggregating and
pivoting; calculating known formulae; and validating records. The same
workflow can accept parameters, run on a schedule, be monitored and feed
reports or exports.

A domain expert can inspect that sequence, a reviewer can open an intermediate
result and an error can point to a particular block. A later builder can change
one filter without first reverse-engineering an undocumented script.

A complex visual workflow can express substantial logic. I keep using that
representation while it continues to help people understand and change the
work.

## The first boundary: specialist method

Embedded Python or R becomes useful when the project needs a particular
statistical or machine-learning library, a domain-specific algorithm, a custom
optimisation, an unusual file or protocol, or a well-tested internal package.
It can also be the sensible choice when a sequence of generic operations
cannot provide the required performance.

I want that code to own the specialist part while the surrounding selection,
validation, comparison, reporting and scheduling remain visible.

For example:

```text
visual workflow
  → select and validate modelling fields
  → custom Python block runs specialist algorithm
  → typed result returns to workflow
  → compare, report and schedule visibly
```

The workflow still shows where the method is used, what enters it and what
comes out. This is the same idea behind the Python and R Custom Blocks we added
to Omniscope: the script can use its specialised runtime without taking the
whole data path with it.

## The second boundary: specialised interaction

A report can cover a great deal with charts, filters, tables, parameters and
editable fields. Custom HTML and JavaScript become appropriate when the user
needs a guided multi-step form, a domain-specific canvas or diagram,
drag-and-drop planning, a bespoke control surface, integration with another
browser component or a highly branded embedded experience.

The custom view should still consume defined data and parameters and emit
defined events. In the customer-success prototype, JavaScript extended a
focused part of the application while the workflow, validation and reporting
remained in Omniscope. Letting the view grow into a second unversioned
application framework would have lost that advantage.

## The third boundary: a separate system

Some requirements belong outside the analytical platform. High-concurrency
transactional writes or strict consistency across several entities usually
need a separately engineered service or system of record. The same may be true
for complex authentication or delegated authorisation, independent scaling and
availability, a public API with a long-lived external contract, low-latency
event processing, offline mobile behaviour, specialised security certification
or an application lifecycle owned by another team.

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

I do not calculate a score from this table. I use it to make the reason for
crossing the boundary explicit before we add another runtime or service.

## Contain custom code

Custom code creates capability and responsibility. The checklist I use is
deliberately practical.

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

Isolation limits what a failed or hostile script can reach. Correctness,
dependency safety and analytical suitability still need their own tests and
review.

## Package repeated exceptions

The first custom script may be a justified exception. By the fifth copy, the
same method probably deserves a reusable custom block, shared library,
versioned service, template, macro or governed API. Give it a clear name and
interface, test the component boundary on every change, publish a versioned
artefact and reuse that known version.

That is how a useful exception becomes part of the team’s normal toolbox
instead of another pasted fragment.

<figure>
  <img src="{{ '/assets/images/articles/workflow-ninja-in-action.png' | relative_url }}" alt="An Omniscope workflow combining visible blocks with agent-assisted construction" width="2940" height="1674" loading="lazy">
  <figcaption>Visual orchestration can remain the shared map even when agents or custom code build particular components. <a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">Read how we keep AI-authored work inspectable ↗</a></figcaption>
</figure>

## AI-generated code is still custom software

AI reduces the cost of generation, while dependency, security, testing, review
and ownership remain part of the software. In the
[Data Quality Inspector experiment](https://www.linkedin.com/posts/antoniopoggi_data-quality-inspector-visokio-activity-7400205203167260672-G014),
asking an agent for the whole stack at once lost the plot; the useful middle
ground was to let AI create bounded pieces while I controlled architecture,
assembly, review and deployment.

## Signs you have stayed no-code too long

I become suspicious when dozens of blocks imitate one clear algorithm,
performance depends on repeated workarounds or the workflow hides the method
instead of explaining it. A specialist library may already solve the problem
well. Error handling may be impossible to express safely, the interface may be
fighting the user’s job, or files may be simulating transactional behaviour.
If the same workaround has been copied across projects, the boundary has
probably been postponed for too long.

At that point, adding a contained block or service can remove complexity from
the shared workflow.

## Signs you introduced custom software too early

I stay visual when the logic is common and already provided, or when business
users need to review and change it. A script that mostly moves and renames
fields is rarely earning its own runtime. A bespoke service may add deployment
and monitoring work without adding capability, and code understood only by its
original author is a warning—especially when the team has no plan to test or
own it.

Writing 200 lines of code for a join still leaves us with a join.

## No code does not mean no engineering

A visual data application still needs sound modelling, validation, access
control, tests, release management, monitoring, retention and an owner. Custom
code arrives with exactly the same obligations.

The Data Quality Inspector kept its preparation, API wiring, template,
deployment and report in Omniscope while a bounded Python block added a useful
method. The customer-success prototype went one step further: SQLite owned the
transactional records, Omniscope owned the visible analytical application, and
Python and JavaScript extended selected parts.

Those were practical boundaries discovered while building. I could still open
the workflow and understand the complete application, while each specialised
component carried the responsibility it was designed for. That is the result I
look for when deciding where the next piece should live.
