---
title: Writing
permalink: /writing/
section: writing
description: Selected writing by Antonio Poggi, organised around Omniscope, analytics platforms, data applications, AI, software engineering and citizen science.
---
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Writing</p>
      <h1>A map of the ideas behind the work.</h1>
      <p class="lead">I have written hundreds of posts and articles across Visokio, LinkedIn and Medium. This page organises the strongest material by subject and gives each idea one primary home, rather than pretending every social post is a separate publication.</p>
    </div>
    <aside class="intro-aside">
      <p>Visokio articles carry the official product record. LinkedIn carries experiments and discussion. This site connects both to the longer arc of the work.</p>
    </aside>
  </div>
</header>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Original essays</p>
      <h2>Written for this site.</h2>
      <p class="lead">Long-form accounts of the air-quality work, from its civic purpose to the hardware and software built for the latest experiment.</p>
    </div>
    <div class="article-list">
      {% assign sorted_articles = site.articles | sort: 'date' | reverse %}
      {% for article in sorted_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}">
          <time datetime="{{ article.date | date_to_xmlschema }}">{{ article.date | date: "%-d %b %Y" }}</time>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Omniscope · The platform</p>
      <h2>Why one complete data environment matters.</h2>
      <p class="lead">The central product argument: preparation, analysis, reporting, automation and delivery should remain part of one visible system.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://visokio.com/2026/01/26/omniscope-one-complete-analytics-platform-built-for-data-and-decisions-you-own/">
        <span class="tag">Primary · Visokio · 2026</span>
        <div>
          <h3>Why Omniscope exists</h3>
          <p>One complete analytics platform for data and decisions organisations own.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/pulse/omniscope-one-platform-working-data-across-whole-business-poggi-lipte">
        <span class="tag">LinkedIn article</span>
        <div>
          <h3>One platform across the whole business</h3>
          <p>How a shared data environment connects different functions without forcing them into separate tools.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2025/09/16/omniscope-compared-to-other-bi-and-analytics-tools-as-alternative-to-tableau-power-bi-looker/">
        <span class="tag">Primary · Visokio · 2025</span>
        <div>
          <h3>Beyond conventional BI</h3>
          <p>Where Omniscope sits when compared with dashboard-focused analytics products.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/visokio/timeline/' | relative_url }}">
        <span class="tag">Guide · This site</span>
        <div>
          <h3>The Omniscope timeline</h3>
          <p>How the product evolved from coordinated visualisation to an operational analytics and data-application platform.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Workflows · DataOps · Automation</p>
      <h2>Making analytical work operational.</h2>
      <p class="lead">The path from a useful prototype to something scheduled, governed, repeatable and safe to depend on.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://visokio.com/2025/10/14/omniscope-for-dataops-see-fix-and-build-data-pipelines-anywhere/">
        <span class="tag">Primary · Visokio · 2025</span>
        <div>
          <h3>Omniscope for DataOps</h3>
          <p>See, fix and build data pipelines while keeping the process visible.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2020/06/01/omniscope-rock-build-2020-2/">
        <span class="tag">Release record · 2020</span>
        <div>
          <h3>Workflows become services</h3>
          <p>Working Copies, the Workflow Execution REST API, scheduling and multi-tenancy establish the operational foundation.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2023/12/04/how-to-create-a-twitter-x-bot-posting-data-driven-content-with-charts/">
        <span class="tag">Applied tutorial · 2023</span>
        <div>
          <h3>A complete data-driven alert bot</h3>
          <p>Refresh data, apply logic, generate a chart and publish an alert from one Omniscope project.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/visokio/whole-data-journey/' | relative_url }}">
        <span class="tag">Guide · This site</span>
        <div>
          <h3>The whole data journey</h3>
          <p>Why source, transformation, analysis, automation and delivery should remain connected.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Data applications · Embedded analytics</p>
      <h2>Turning analytical logic into a product.</h2>
      <p class="lead">Internal tools, branded customer experiences and embedded analytics built on the same workflow and governance foundation.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://visokio.com/2022/05/31/no-code-development-platform-omniscope-build-data-web-apps/">
        <span class="tag">Primary · Visokio · 2022</span>
        <div>
          <h3>Build complete data web applications</h3>
          <p>ETL, analytics, visualisation, automation and code extensions in one platform.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/pulse/leveraging-no-code-development-platform-build-data-apps-poggi">
        <span class="tag">LinkedIn article</span>
        <div>
          <h3>Leveraging a no-code data platform</h3>
          <p>How focused applications can be assembled while retaining the option to extend with code.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2025/02/11/elevate-your-saas-with-omniscope-augment-your-offer-with-interactive-data-explorations-and-data-driven-insights/">
        <span class="tag">Primary · Visokio · 2025</span>
        <div>
          <h3>Embedded analytics for SaaS</h3>
          <p>Make interactive data exploration part of the product rather than a generic external dashboard.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/visokio/data-apps/' | relative_url }}">
        <span class="tag">Guide · This site</span>
        <div>
          <h3>From workflow to data app</h3>
          <p>A concise map of the application patterns supported by the platform.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">AI · Agents · Verification</p>
      <h2>Models become useful when they can operate real tools.</h2>
      <p class="lead">The current narrative is not AI replacing the analytics platform. It is AI operating a mature platform whose transformations and evidence can still be inspected.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://www.linkedin.com/pulse/omniscope-toolbox-llms-ai-product-antonio-poggi-sfnpf">
        <span class="tag">LinkedIn article · Foundation</span>
        <div>
          <h3>Omniscope as a toolbox for LLMs</h3>
          <p>Models plan while Omniscope performs the actual analytical and reporting operations.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/pulse/can-agent-replace-your-bi-stack-only-you-add-antonio-poggi-gpfme">
        <span class="tag">LinkedIn article · Agents</span>
        <div>
          <h3>Can an agent replace a BI stack?</h3>
          <p>Only if it has access to the governed capabilities required to do the real work.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2026/04/08/trust-in-ai-analytics-omniscope-as-verification-layer/">
        <span class="tag">Primary · Visokio · Verification</span>
        <div>
          <h3>Trust in AI analytics</h3>
          <p>Why visible, repeatable transformations turn a plausible answer into something a person can check.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/pulse/all-you-do-prompt-leaving-lot-table-antonio-poggi-7poge">
        <span class="tag">LinkedIn article · Practice</span>
        <div>
          <h3>If all you do is prompt</h3>
          <p>Why tools, context, iteration and verification matter beyond the prompt itself.</p>
        </div>
      </a>
      <a class="work-card" href="https://visokio.com/2026/05/27/running-omniscope-against-a-local-qwen3-6-27b-fp8-model-on-an-h100/">
        <span class="tag">Primary · Visokio · Local AI</span>
        <div>
          <h3>Omniscope with local Qwen on an H100</h3>
          <p>A tested private analytics stack using Qwen, vLLM and controlled infrastructure.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/visokio/verifiable-ai/' | relative_url }}">
        <span class="tag">Guide · This site</span>
        <div>
          <h3>Verifiable AI analytics</h3>
          <p>The operating model, human comparison and principles behind the current work.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Software engineering · Control</p>
      <h2>AI changes the tools, not the responsibility.</h2>
      <p class="lead">Software remains a system with production consequences. Model flexibility, repositories, tests and human ownership matter more as generation becomes easier.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://visokio.com/2026/06/19/we-let-ai-write-our-software-the-discipline-is-in-how-we-keep-control/">
        <span class="tag">Primary · Visokio · 2026</span>
        <div>
          <h3>We let AI write our software</h3>
          <p>The discipline is in architecture, verification, model choice and keeping control of the durable system.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/posts/antoniopoggi_bigdata-cloud-saas-activity-7389404412697309185-Xlv-">
        <span class="tag">LinkedIn post · Independence</span>
        <div>
          <h3>Local tools and ownership still matter</h3>
          <p>A reflection on bootstrapping, technology cycles and retaining control of the complete stack.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Citizen science · Air quality</p>
      <h2>Public data becomes useful when people can act on it.</h2>
      <p class="lead">The Taranto work is where product capability, software, public communication and civic purpose meet.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://medium.com/omniscope/air-pollution-looking-after-my-hometown-1b98857a994d">
        <span class="tag">Medium · Origin story · 2019</span>
        <div>
          <h3>Air pollution: looking after my hometown</h3>
          <p>The original account of turning public monitoring files into an interactive Omniscope report for Taranto.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/air-quality/' | relative_url }}">
        <span class="tag">Living record · This site</span>
        <div>
          <h3>The air-quality project</h3>
          <p>The timeline from public dashboard to alerts, civic evidence and a privately connected open sensor.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="archive-note">
      <p class="kicker">The wider archive</p>
      <p>This is a deliberately edited selection. The complete public record includes more than forty Visokio articles and hundreds of shorter LinkedIn posts about releases, experiments, customers, data applications, engineering, AI and public-interest work. <a href="https://visokio.com/author/antonio17b4b024ad/">Browse my Visokio archive ↗</a> or <a href="https://www.linkedin.com/in/antoniopoggi/recent-activity/all/">follow the continuing discussion on LinkedIn ↗</a>.</p>
    </div>
  </div>
</section>
