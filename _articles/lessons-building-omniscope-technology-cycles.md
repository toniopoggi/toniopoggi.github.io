---
title: "Lessons from Building Omniscope Across Multiple Technology Cycles"
subtitle: "Desktop BI, big data, cloud, no-code and AI changed the interface and the language. The need for inspectable, operable data work remained."
date: 2026-07-27 00:09:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "Product history · Engineering"
series: "Building complete data products"
cluster: products
cluster_label: "Building complete data products"
article_order: 4
read_time: "7 min"
description: "Seven product lessons from more than two decades of building Omniscope through desktop, web, cloud, no-code and AI technology cycles."
image: /assets/images/articles/omniscope-report-2019.jpg
image_alt: "An Omniscope web-generation report from the early years of the rebuilt platform"
image_width: 1600
image_height: 977
image_caption: "The web generation of Omniscope was publicly released in November 2018 after a three-year rebuild. The interface changed; the product principle survived."
tags:
  - Omniscope history
  - software product strategy
  - analytics platform
  - bootstrapped software
  - technology cycles
takeaways:
  - "Preserve the enduring user problem while being willing to rebuild the technical substrate."
  - "Mature products accumulate operational controls—versioning, permissions, validation and recovery—not only visible features."
  - "AI is the newest operating layer over the platform, not a reason to discard release discipline or inspectable logic."
next_url: /writing/where-no-code-ends-custom-software-begins/
next_label: "Next in the series"
next_title: "Where no-code ends and custom software should begin"
---

Visokio was founded in 2002. Omniscope 1.0 arrived in 2005.

Since then, the software industry has repeatedly announced that the old way is
finished.

Desktop software gave way to the web. “Big data” changed every product page.
Cloud and SaaS became the default delivery model. No-code promised to turn
everyone into a builder. AI now promises to operate—or replace—the whole
stack.

Each cycle changed something important. None removed the need to connect data,
understand it, explain the result and keep the work running.

This is not a tidy story in which we predicted every trend. We rebuilt,
discarded work, got the communication wrong, added features before people had
language for the category and occasionally spent much longer than planned on a
release.

Those are the parts that produced the useful lessons.

## 1. Keep the product principle, not the implementation

The first Omniscope brought multiple coordinated visualisations into one
desktop environment. Selecting records in one view changed the others. The
important idea was that a person could work across a complex dataset
interactively, without breaking the investigation into disconnected charting
steps.

The technology of that implementation could not be preserved forever.

Around 2015 we began a multi-year rebuild for the web. The new generation was
publicly released on **12 November 2018** after three years of work. It was not
a reskin. The workflow, report architecture, server deployment and extension
model had to provide a foundation for a different class of product.

At the time I wrote that I would never stop being a developer. That was not a
job-title claim. It was recognition that understanding how the product is made
changes how you operate, explain and sell it.

The lesson is not “always rewrite”. Rewrites are expensive and dangerous.

Rebuild the substrate only when it prevents the product principle from
surviving the next stage.

## 2. Operational capability arrives one unglamorous layer at a time

Product histories tend to remember the visual features. Users notice the new
chart. The operational foundations often matter more.

The Omniscope release record shows the accumulation:

- **2019.3:** central parameters, JSON and XML handling, localisation and
  scheduler-driven parameter changes;
- **2020.2:** Working Copies, Workflow REST API, report editing, enhancements
  to multi-tenant reports, retries and structured logs;
- **2021.2:** project templates, workflow grouping and isolated Python/R
  custom blocks;
- **2022.1:** reusable macros, mobile layouts, custom-block libraries and
  broader file and cloud formats;
- **2024.1:** revision history, background validation, Automation API, Data
  Profiler and early AI blocks;
- **2025.1:** Report Ninja, Instant Dashboard, Data Q&A, local or cloud models
  and schema controls;
- **2026:** Insight Explorer, agent capabilities and a stronger verification
  path alongside scheduling, APIs and validation.

No single feature transformed a prototype into a platform. Parameters,
versioning, safe publishing, logs, permissions and release management did it
together.

This is the quiet work of a mature product: making the useful thing safe to
depend on.

## 3. A visual core needs deliberate escape hatches

Omniscope kept its visual workflow and reporting core while adding R and
Python blocks, custom HTML and JavaScript views, reusable macros, connectors
and APIs. That let common work remain visible without pretending every valuable
exception could be represented by a standard block.

The historical lesson is simple: preserve the shared visual map, then add
explicit extension boundaries as real requirements appear. The
[next article]({{ '/writing/where-no-code-ends-custom-software-begins/' | relative_url }})
covers where those boundaries belong and what testing and ownership they need.

## 4. Technology cycles are real; their marketing generalisations are not

The big-data cycle brought genuine distributed systems and made previously
impossible workloads practical.

It also encouraged people to design every data problem as if it were enormous.
Most datasets used for everyday decisions are still small enough to work with
locally. The difficult part is often meaning, not volume.

Cloud and SaaS made software easier to access and operate.

They also normalised a model in which the vendor hosts the data and execution
environment, while much of the configured analytical logic lives inside that
service. That trade-off is sensible for many organisations and unacceptable
for others.

No-code gave more people the ability to build.

It did not eliminate engineering, security or operational responsibility.

AI can interpret intent, construct workflows and write substantial software.

It does not own the consequence of a wrong production change.

The useful response to a technology cycle is to adopt the capability without
inheriting every slogan.

## 5. Independence creates product options and communication problems

Bootstrapping Visokio gave us unusual freedom.

We could keep local and on-premises deployment while the market moved towards
vendor clouds. We could support a customer that wanted to own the complete
data path. We could keep one integrated product instead of splitting every
capability into a separately funded category.

The same independence made the product harder to describe.

“A tool made of tools” is useful when you are solving a complete problem. It
is awkward when a website visitor wants to put it in one software-category
box.

That February 2026 feedback—unclear before a demo, obvious after it—was not a
request for another feature. It was a reminder that product communication is
part of product work.

Integrated products need concrete stories:

- a file becomes a scheduled data application;
- a workflow becomes a customer-facing tool;
- an AI answer becomes a verifiable report;
- a public measurement becomes a contextual alert.

The architecture explains how. The story explains why anybody should care.

## 6. Release discipline is a product feature

We call our stable milestone releases “Rock” builds.

The label marks the end of a development phase after extended automated and
manual testing. It does not mean every deployment should upgrade blindly. The
2026 release notes still advise teams to test their own setup before changing a
production system.

That tension is healthy.

A release process needs:

- known versions;
- automated and manual coverage;
- migration behaviour;
- backwards compatibility where promised;
- documented breaking changes;
- staging;
- rollback;
- honest limitations.

New AI capabilities do not lower this bar. They increase the number of
combinations to test: model, runtime, tool interface, data permissions and
output parsers.

<figure>
  <img src="{{ '/assets/images/articles/rock-2026.png' | relative_url }}" alt="Omniscope Rock 2026 release showing agentic analytics, Insight Explorer and platform capabilities" width="1731" height="909" loading="lazy">
  <figcaption>The 2026 layer includes AI and agents, but it ships on top of years of workflows, scheduling, APIs, validation and deployment work. <a href="https://visokio.com/2026/04/30/omniscope-rock-2026-release/">Read the release record ↗</a></figcaption>
</figure>

There is nothing old-fashioned about wanting production software to be
boringly recoverable.

## 7. AI rewards accumulated capability

An AI agent is only as useful as the tools it can operate.

If a platform can only draw a chart, the model can draw charts. If the platform
can connect, clean, validate, analyse, schedule, publish and expose APIs, the
model can assemble a much more complete outcome.

This is why the current AI work feels like a continuation rather than a pivot.

The model provides a new interface to capabilities built across earlier
cycles. It can plan a workflow using existing blocks. It can build a report
through the real designer. It can explain a calculation whose source inputs
remain visible. It can use a local or cloud model because provider choice is
kept outside the durable analytical artefact.

AI makes the mature platform more accessible. The mature platform makes AI
more trustworthy.

Neither emerged in one release.

## What I would do again

Looking back across the cycles, I would preserve these choices:

1. keep the full path from source to explanation visible;
2. let people start visually and escape into code when needed;
3. treat on-premises and local operation as first-class rather than legacy;
4. make parameters, APIs and automation part of the product;
5. add operational controls even when they are difficult to demonstrate;
6. keep model and provider choice reversible;
7. stay close enough to the engineering to understand the real trade-offs.

I would also communicate the concrete use cases earlier and more consistently.

Being capable of many things does not relieve a product of explaining the
first useful thing.

## The continuing thread

The product has moved from desktop coordinated visualisation to a web-based
environment for complete data applications and verifiable AI. The
[full Omniscope timeline]({{ '/visokio/timeline/' | relative_url }}) records
the milestones.

The labels around it will continue to change.

What persists is the job:

- take data in the form it actually exists;
- make the transformations visible;
- let people investigate and build;
- turn useful work into something others can operate;
- keep control of the data and logic;
- adopt new intelligence without losing the evidence.

Technology cycles are not imaginary. They just do not absolve us from product
memory.
