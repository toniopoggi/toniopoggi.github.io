---
title: Verifiable AI Analytics
permalink: /visokio/verifiable-ai/
section: visokio
description: How Omniscope lets local or frontier models operate real analytics tools while keeping transformations, evidence and human review visible.
image: /assets/images/omniscope-human-vs-ai.jpg
---
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Visokio · AI · Verification</p>
      <h1>I want AI to do useful analytical work that I can still inspect.</h1>
      <p class="lead">In Omniscope, a language model can interpret a question, plan the analysis and operate real workflow and reporting tools. The joins, calculations, transformations and charts are then left in the project for a person to open, test and change.</p>
    </div>
    <aside class="intro-aside">
      <p><strong>The model uses the same Omniscope tools people already use.</strong><br>The normal workflow, validation, permissions and review controls still apply.</p>
    </aside>
  </div>
</header>

<section class="statement">
  <div class="shell">
    <blockquote>The model helps interpret the question and decide what analysis to run. Omniscope performs the data work and leaves the result open for inspection.</blockquote>
    <cite>HOW WE USE LLMS IN OMNISCOPE</cite>
  </div>
</section>

<section class="section">
  <div class="shell split-content">
    <h2>The model operates the platform</h2>
    <div class="body-copy">
      <p>Omniscope already connects and prepares data, applies calculations, builds visualisations, publishes reports and runs workflows. We expose those existing capabilities to the model through controlled tools, much as we expose them to a person through the interface.</p>
      <p>Report Ninja drives the real report designer. Data Q&amp;A applies filters, aggregations, joins and calculated fields. Workflow blocks can call models inside repeatable data processes, and external agents can use authenticated, permissioned Omniscope services. When the run finishes, the analysis, report or workflow remains in the product; it has not vanished into the chat history.</p>
      <p><a href="https://www.linkedin.com/pulse/omniscope-toolbox-llms-ai-product-antonio-poggi-sfnpf">Read Omniscope as a toolbox for LLMs ↗</a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">A small experiment</p>
      <h2>The same question, five tables, one human and one AI.</h2>
      <p class="lead">The human analysis took five minutes. The AI built its answer in thirty seconds, which looked spectacular until I added the three and a half minutes needed to inspect its transformations and verify the result. It was still faster, and the review time was part of the comparison rather than an inconvenient footnote.</p>
    </div>
    <figure class="feature-image">
      <img src="{{ '/assets/images/omniscope-human-vs-ai.jpg' | relative_url }}" alt="Comparison of a human and an AI answering the same multi-table data question in Omniscope" width="800" height="502" loading="lazy">
      <figcaption>Five minutes for the human analysis, thirty seconds for the AI result, and three and a half minutes to inspect and verify the AI-built transformations. <a href="https://www.linkedin.com/posts/antoniopoggi_ai-dataanalytics-humanintheloop-activity-7381657189771382784-kHJ1">View the original experiment ↗</a></figcaption>
    </figure>
  </div>
</section>

<section>
  <div class="metric-strip">
    <div class="metric">
      <strong>5 min</strong>
      <span>Human analysis across five normalised tables.</span>
    </div>
    <div class="metric">
      <strong>30 sec</strong>
      <span>AI result built as visible Omniscope transformations.</span>
    </div>
    <div class="metric">
      <strong>3.5 min</strong>
      <span>AI result inspected and verified by a human.</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">The verification layer</p>
      <h2>What I expect to inspect before accepting the answer.</h2>
    </div>
    <div class="principles">
      <div class="principle">
        <span class="number">01</span>
        <h3>See the operations.</h3>
        <p>Filters, joins, calculations and transformations are represented in the platform instead of being hidden inside a conversational response.</p>
      </div>
      <div class="principle">
        <span class="number">02</span>
        <h3>Repeat the analysis.</h3>
        <p>The work can run again against refreshed data, be compared with a human method and become part of a controlled workflow.</p>
      </div>
      <div class="principle">
        <span class="number">03</span>
        <h3>Keep a human in control.</h3>
        <p>People can examine assumptions, revise logic, apply permissions and decide whether the result is safe to use.</p>
      </div>
    </div>
    <div class="button-row">
      <a class="button button-primary" href="https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/">Read about the Verification Layer ↗</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell split-content">
    <h2>We have tested the same tools with private, self-hosted models</h2>
    <div class="body-copy">
      <p>Omniscope can work with frontier model providers or self-hosted models. We have tested local Qwen models through vLLM on controlled infrastructure, allowing the model to inspect datasets, plan multi-step analysis and call tools without moving the data into a public AI service.</p>
      <p>The setup is known to work, but model fit, endpoint security, GPU cost and version pinning still matter. The generated analytical work remains in Omniscope in a form the user can check.</p>
      <p><a href="https://visokio.com/2026/05/27/running-omniscope-against-a-local-qwen3-6-27b-fp8-model-on-an-h100/">Read the local Qwen and H100 test ↗</a><br><a href="https://www.linkedin.com/pulse/proving-full-european-ai-data-analytics-stack-omniscope-poggi-7tyxe">Read about the European AI and analytics stack ↗</a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell split-content">
    <h2>Model choice should remain reversible</h2>
    <div class="body-copy">
      <p>Models change quickly. We use several frontier and local models, and our own tests regularly show that one is excellent for a particular tool-calling task and disappointing on another. The durable analytical work therefore stays in the projects, workflows, repositories and tests the team controls, rather than becoming inseparable from whichever provider is strongest this month.</p>
      <p>We take the same approach to AI-assisted software engineering. The productivity gain is real—I see it every week—but the team still owns the architecture, review and production consequences.</p>
      <p><a href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">Read how we use AI while retaining engineering control ↗</a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="button-row">
      <a class="button button-primary" href="{{ '/visokio/whole-data-journey/' | relative_url }}">See the mature platform underneath</a>
      <a class="button" href="{{ '/visokio/timeline/' | relative_url }}">Explore the product timeline</a>
    </div>
  </div>
</section>
