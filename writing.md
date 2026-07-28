---
title: Writing
permalink: /writing/
section: writing
description: Articles by Antonio Poggi on verifiable AI analytics, complete data products, Omniscope and air-quality monitoring.
---
{% assign ai_articles = site.articles | where: 'cluster', 'ai' | sort: 'article_order' %}
{% assign product_articles = site.articles | where: 'cluster', 'products' | sort: 'article_order' %}
{% assign citizen_articles = site.articles | where: 'cluster', 'citizen' | sort: 'article_order' %}
{% assign italian_articles = site.articles | where: 'cluster', 'citizen-it' | sort: 'article_order' %}
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Writing · {{ site.articles.size }} articles</p>
      <h1>Articles about Omniscope, AI, data products and air quality.</h1>
      <p class="lead">These articles come from work I have done at Visokio, technical experiments I have run myself and seven years of air-quality work around Taranto.</p>
      <div class="button-row">
        <a class="button button-primary" href="{{ '/directory/' | relative_url }}">Search all articles and pages <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside class="intro-aside">
      <p>I have pulled the useful material out of two decades of product work, the Visokio archive, around 200 LinkedIn posts and the civic record, then linked each article back to the original sources.</p>
    </aside>
  </div>
</header>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">The publication</p>
      <h2>Browse by subject.</h2>
      <p class="lead">Each article stands on its own. The three series make it easier to follow one subject from the first practical question through to the technical and operational detail.</p>
    </div>
    <div class="work-grid">
      <a class="work-card" href="#verifiable-ai">
        <span class="tag">Series 01 · {{ ai_articles.size }} articles</span>
        <div>
          <h3>Verifiable and private AI analytics</h3>
          <p>Experiments with local and frontier models, agents operating Omniscope, and the controls needed to inspect the analysis they leave behind.</p>
        </div>
      </a>
      <a class="work-card" href="#data-products">
        <span class="tag">Series 02 · {{ product_articles.size }} articles</span>
        <div>
          <h3>Building complete data products</h3>
          <p>How a useful prototype acquires data contracts, an interface, scheduling and ownership, including the point where visual tools need custom code.</p>
        </div>
      </a>
      <a class="work-card" href="#citizen-evidence">
        <span class="tag">Series 03 · {{ citizen_articles.size }} articles</span>
        <div>
          <h3>Citizen science and public evidence</h3>
          <p>Taranto, benzene, public alerts and a privately operated AirGradient monitor sending measurements directly to Omniscope.</p>
        </div>
      </a>
      <a class="work-card" href="#in-italian">
        <span class="tag">In Italian · {{ italian_articles.size }} article</span>
        <div>
          <h3>Qualità dell’aria a Taranto</h3>
          <p>The detailed account of the environmental-data work carried out with PeaceLink over time.</p>
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
      <p class="lead">I use language models every day and I am excited by what they can already do. These articles are about putting that capability to work inside a real analytical system, while keeping the generated queries, transformations, charts and assumptions available for a person to inspect.</p>
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
      <p class="lead">A prototype becomes interesting when other people start depending on it. This series follows what has to be added—contracts, validation, interfaces, automation, releases and an owner—without throwing away the visible analytical logic that made the first version useful.</p>
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
      <p class="lead">This series records how the Taranto work grew from public files into reports, alerts, civic and institutional evidence, then a privately operated sensor. It also covers the limitations, gaps and responsibilities that need to remain visible.</p>
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

<section class="section article-cluster" id="in-italian">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">In Italian</p>
      <h2>The PeaceLink work, in Italian.</h2>
      <p class="lead">This article brings together the work with PeaceLink on environmental data, reports, alerts and public evidence in Taranto.</p>
    </div>
    <div class="article-list">
      {% for article in italian_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}" lang="it" hreflang="it">
          <span class="article-index">IT</span>
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
      <p class="eyebrow">Earlier writing and source material</p>
      <h2>The wider record is still available.</h2>
      <p class="lead">The articles bring together firsthand builds, release notes, documentation, experiments and public evidence. These links lead back to the larger archives and the original work.</p>
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
