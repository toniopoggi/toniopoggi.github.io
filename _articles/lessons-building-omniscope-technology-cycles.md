---
title: "Lessons from Building Omniscope Across Multiple Technology Cycles"
subtitle: "What survived desktop, web, cloud, no-code and AI—and what I would do differently after fifteen years building Omniscope with the Visokio team."
date: 2026-07-27 00:09:00 +0100
last_modified_at: 2026-07-28 12:11:00 +0100
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
  - "Across changing technology cycles, the enduring user problem can survive even when the technical substrate has to be rebuilt."
  - "Omniscope’s history also shows how versioning, permissions, validation and recovery accumulate underneath the visible features."
  - "AI is the newest operating layer on that foundation, with the same need for release discipline and inspectable logic."
next_url: /writing/where-no-code-ends-custom-software-begins/
next_label: "Next in the series"
next_title: "Where no-code ends and custom software should begin"
---

Visokio was founded in 2002 and Omniscope 1.0 arrived in 2005. By the time we
released the rebuilt web generation in 2018, I opened my LinkedIn post with:
“Finally, after 3 years of hard work, the new Omniscope is out.”

My thoughts that day were with the past and present colleagues who had built
it. I also wrote that I would never stop being a developer because creating
software makes me feel “invincible”. That probably says more about the product
history than a neat technology timeline does.

Desktop software gave way to the web. “Big data” changed the way everybody
described data. Cloud and SaaS became the default delivery model, no-code
opened building to more people, and AI can now operate parts of the stack. We
adopted capabilities from every cycle, sometimes rebuilt a great deal, spent
longer than planned on releases and often struggled to explain a product that
crossed several categories. The lessons came from that work, including the
parts we did not predict.

## 1. Keep the product principle, not the implementation

The first Omniscope brought multiple coordinated visualisations into one
desktop environment. Selecting records in one view changed the others, so a
person could investigate a complex dataset without turning every question into
a separate charting exercise.

Around 2015, the original implementation was preventing us from carrying that
idea much further. We began a multi-year rebuild for the web and publicly
released it on **12 November 2018**, after three years of work. The new
workflow, report architecture, server deployment and extension model replaced
much more than the interface; they gave us a foundation on which a different
class of product could grow.

I would not recommend a rewrite as a product ritual. It is expensive,
dangerous and easy to underestimate. In our case the technical substrate was
blocking the way we wanted people to build, publish and operate the product,
which made the risk worth taking.

## 2. Operational capability arrives one unglamorous layer at a time

Product histories naturally remember the visual features, but much of the work
after 2018 was less photogenic. In **2019.3** we added central parameters, JSON
and XML handling, localisation and scheduler-driven parameter changes. In
**2020.2**, Working Copies separated live work from editing while the Workflow
REST API, report editing, multi-tenant enhancements, retries and structured
logs made projects easier to operate.

The next releases kept filling in the system around the analysis.
**2021.2** brought project templates, workflow grouping and isolated Python/R
custom blocks. **2022.1** added reusable macros, mobile layouts, custom-block
libraries and more file and cloud formats. By **2024.1**, Omniscope had revision
history, background validation, the Automation API, Data Profiler and early AI
blocks.

Then the visible features became exciting again. **2025.1** introduced Report
Ninja, Instant Dashboard, Data Q&A, local or cloud models and schema controls.
In **2026**, Insight Explorer and agent capabilities arrived with a stronger
verification path built on the scheduling, APIs and validation already there.
None of those releases on its own turned a prototype into a platform. People could
depend on the product because parameters, versioning, publishing, logs,
permissions and release management had accumulated underneath.

## 3. A visual core needs deliberate escape hatches

One of my posts in 2021 began with a practical question: how do you run a Python
or R script without harming the machine around it? In Omniscope, you can place
the script in a Custom Block and run it inside an isolated Docker container.
At the time my less formal description was “paste your scripts... and boom!”

That extension did not replace the visual workflow. It gave a specialist
algorithm a bounded place inside it. Omniscope also added custom HTML and
JavaScript views, reusable macros, connectors and APIs, while common
preparation and reporting work remained visible to people who did not need to
read the code.

The shared workflow is still the map. Extension boundaries are added when a
real requirement needs them. The
[next article]({{ '/writing/where-no-code-ends-custom-software-begins/' | relative_url }})
covers where those boundaries belong and what testing and ownership they need.

## 4. Technology cycles are real; their marketing generalisations are not

The big-data cycle brought genuine distributed systems and made previously
impossible workloads practical. It also encouraged people to approach every
data problem as if it were enormous, when most everyday datasets still fit on
a modern machine and the hard part is understanding their meaning.

I was reminded of that in 2025 when Azure and AWS both had outages. For years
we had been told that laptops were too small, everything had to move to the
cloud and, more recently, a model could answer the problem for us. Yet I could
still open a laptop without internet and work privately—even on a plane,
surrounded by real clouds. Cloud and SaaS are convenient, and we use online
services ourselves, but keeping local and on-premises deployment gave customers
a choice when privacy, connectivity or control required it.

No-code similarly gave more people the ability to build, while the security and
operational work remained real. AI can now interpret intent, construct
workflows and write substantial software, but the team shipping a production
change still owns the consequences. We try the new capability against actual
work and keep the parts that hold up.

## 5. Independence creates product options and communication problems

Bootstrapping Visokio gave us the freedom to keep local and on-premises
deployment while much of the market moved towards vendor clouds. A customer
could own the complete data path, and we could continue developing one
integrated product instead of splitting every capability into a separately
funded category.

Direct support has been part of that independence. Customers work with people
who can change the product, whether they need application support, technical
help or data-solutions engineering. That contact solves the immediate problem
and can also shape the next improvement in Omniscope.

It also made Omniscope harder to describe. In February 2026, a customer and a
prospect independently told me the same thing on the same day: the website had
not made the product clear, but after seeing it they wondered why everybody was
not already using it. That hurt a bit after twenty years of building with
obsession and care.

“A tool made of tools” makes sense once a file has become a scheduled data
application, a workflow has become a customer-facing tool, an AI question has
produced a report somebody can inspect, or a public measurement has triggered
a contextual alert. We needed to show those complete stories much earlier and
more consistently.

## 6. Release discipline is a product feature

We call our stable milestone releases “Rock” builds. When the 2026 build
finally shipped, my first reaction was: “Sorry, this took a while. But man... we
got there!” The label marks the end of a development phase after extended
automated and manual testing. The release notes still advise teams to test
their own setup before changing a production system, because our testing
cannot reproduce every customer deployment.

A release process needs:

- known versions;
- automated and manual coverage;
- migration behaviour;
- backwards compatibility where promised;
- documented breaking changes;
- staging;
- rollback;
- honest limitations.

New AI capabilities increase the combinations we need to test: model, runtime,
tool interface, data permissions and output parsers. A result can look
convincing while one of those layers is wrong, so the old release discipline
becomes more useful rather than less.

<figure>
  <img src="{{ '/assets/images/articles/rock-2026.png' | relative_url }}" alt="Omniscope Rock 2026 release showing agentic analytics, Insight Explorer and platform capabilities" width="1731" height="909" loading="lazy">
  <figcaption>The 2026 layer includes AI and agents, but it ships on top of years of workflows, scheduling, APIs, validation and deployment work. <a href="https://visokio.com/2026/04/30/omniscope-rock-2026-release/">Read the release record ↗</a></figcaption>
</figure>

The exciting demo still needs a known version and a route back when the upgrade
behaves differently on real data.

## 7. AI rewards accumulated capability

An AI agent becomes useful when it has useful tools to operate. In Omniscope we
did not place a magic brain behind the interface. We described the existing
transforms, joins, reports, workflows and integrations to the model, constrained
how it could call them, and let Omniscope execute the resulting plan.

That model can now construct a workflow from existing blocks, build a report
through the real designer and help explain a calculation whose source inputs
remain visible. It can use a local or cloud provider because model choice sits
outside the durable analytical artefact. Report Ninja, Data Q&A and Insight
Explorer feel new to the user, but they operate capabilities accumulated over
many releases.

## What I would do again

Looking back, I would still keep the full path from source to explanation
visible and let people begin visually, with an explicit route into code when a
specialist requirement appears. I would keep local and on-premises operation as
first-class choices, and keep parameters, APIs and automation inside the
product rather than treating them as later integrations.

I would also continue investing in operational controls that are difficult to
demonstrate, keep model and provider choice reversible, and stay close enough
to the engineering to understand the trade-offs. I would change how early and
consistently we communicated the concrete use cases. A capable product still
has to show somebody the first useful job it can do for them.

## The continuing thread

The product has moved from desktop coordinated visualisation to a web-based
environment for complete data applications and verifiable AI. The
[full Omniscope timeline]({{ '/visokio/timeline/' | relative_url }}) records
the milestones.

The labels will continue to change. I still recognise the work: take data in
the form it actually exists, make the transformations visible, let people
investigate and build, and turn the useful result into something others can
operate. We want customers to keep control of the data and logic while using
new models where they genuinely help.

Fifteen years after joining Visokio, I am still involved in the engineering,
still experimenting and still trying to explain the thing we have built.
Apparently I meant it when I said I would never stop being a developer.
