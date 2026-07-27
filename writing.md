---
title: Writing
permalink: /writing/
section: writing
description: Field guides by Antonio Poggi on verifiable AI analytics, complete data products, Omniscope and citizen-owned air-quality evidence.
---
{% assign ai_articles = site.articles | where: 'cluster', 'ai' | sort: 'article_order' %}
{% assign product_articles = site.articles | where: 'cluster', 'products' | sort: 'article_order' %}
{% assign citizen_articles = site.articles | where: 'cluster', 'citizen' | sort: 'article_order' %}
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Writing · {{ site.articles.size }} field guides</p>
      <h1>Build the answer. Preserve the evidence.</h1>
      <p class="lead">Three connected series on AI that can be verified, data work that can become a product, and public measurements that citizens can actually use.</p>
      <div class="button-row">
        <a class="button button-primary" href="{{ '/directory/' | relative_url }}">Search all articles and pages <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside class="intro-aside">
      <p>The articles draw on two decades of building Omniscope, more than forty Visokio articles, hundreds of public posts and seven years of air-quality work around Taranto.</p>
    </aside>
  </div>
</header>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">The publication</p>
      <h2>Three ways into the same work.</h2>
      <p class="lead">Start with the question closest to you. Each article is self-contained; together they show how data moves from source to inspectable decision and useful action.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="#verifiable-ai">
        <span class="tag">Series 01 · {{ ai_articles.size }} articles</span>
        <div>
          <h3>Verifiable and private AI analytics</h3>
          <p>Where models belong, how agents operate real tools, and what it takes to keep AI-assisted analysis inspectable.</p>
        </div>
      </a>
      <a class="work-card" href="#data-products">
        <span class="tag">Series 02 · {{ product_articles.size }} articles</span>
        <div>
          <h3>Building complete data products</h3>
          <p>From one useful file to a governed, scheduled application—and the engineering boundary between blocks and code.</p>
        </div>
      </a>
      <a class="work-card" href="#citizen-evidence">
        <span class="tag">Series 03 · {{ citizen_articles.size }} articles</span>
        <div>
          <h3>Citizen science and public evidence</h3>
          <p>Taranto, benzene, public alerts and a private path from an open physical sensor to an analytical record.</p>
        </div>
      </a>
    </div>
  </div>
</section>
<section class="section article-cluster" id="verifiable-ai">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Series 01</p>
      <h2>Verifiable and private AI analytics.</h2>
      <p class="lead">The model interprets and plans. Governed tools execute. People inspect the data, calculations and artefacts before they rely on the answer.</p>
    </div>
    <div class="article-list">
      {% for article in ai_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}">
          <span class="article-index">0{{ article.article_order }}</span>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section article-cluster" id="data-products">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Series 02</p>
      <h2>Building complete data products.</h2>
      <p class="lead">Useful analysis earns stronger contracts, interfaces, scheduling and ownership without losing the visible logic that made the prototype valuable.</p>
    </div>
    <div class="article-list">
      {% for article in product_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}">
          <span class="article-index">0{{ article.article_order }}</span>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section article-cluster" id="citizen-evidence">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Series 03</p>
      <h2>Citizen science and public evidence.</h2>
      <p class="lead">Public measurements become useful when source, grain, gaps, context and method remain attached—and when citizens can inspect the complete path.</p>
    </div>
    <div class="article-list">
      {% for article in citizen_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}">
          <span class="article-index">0{{ article.article_order }}</span>
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
      <p class="eyebrow">Primary record</p>
      <h2>Follow the work back to its sources.</h2>
      <p class="lead">The field guides synthesise firsthand builds, release notes, documentation, experiments and public evidence. These archives preserve the wider record.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://visokio.com/author/antonio17b4b024ad/">
        <span class="tag">Visokio · 2019–2026</span>
        <div>
          <h3>My Visokio articles</h3>
          <p>Product releases, data applications, local models, AI agents, verification and implementation notes.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.linkedin.com/in/antoniopoggi/recent-activity/all/">
        <span class="tag">LinkedIn · Continuing record</span>
        <div>
          <h3>Experiments and discussion</h3>
          <p>Work in progress, short technical observations, product arguments and public-interest analysis.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/visokio/' | relative_url }}">
        <span class="tag">Omniscope · Product map</span>
        <div>
          <h3>The Visokio and Omniscope story</h3>
          <p>Product history, complete data workflows, data applications and verifiable AI in one guided section.</p>
        </div>
      </a>
      <a class="work-card" href="{{ '/air-quality/' | relative_url }}">
        <span class="tag">Taranto · Living record</span>
        <div>
          <h3>The air-quality project</h3>
          <p>The timeline, live reports, public channels, civic evidence and open implementations behind the citizen-science series.</p>
        </div>
      </a>
    </div>
  </div>
</section>
