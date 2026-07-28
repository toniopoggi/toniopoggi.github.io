---
title: Directory
permalink: /directory/
section: directory
body_class: directory-page
schema_type: CollectionPage
description: Search and browse every article and main page on Antonio Poggi’s site, covering Omniscope, AI analytics, data products and air quality.
---
{% assign directory_ai_articles = site.articles | where: 'cluster', 'ai' | sort: 'article_order' %}
{% assign directory_product_articles = site.articles | where: 'cluster', 'products' | sort: 'article_order' %}
{% assign directory_citizen_articles = site.articles | where: 'cluster', 'citizen' | sort: 'article_order' %}
{% assign directory_guide_count = 9 %}
{% assign directory_total = site.articles.size | plus: directory_guide_count %}
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Directory · {{ directory_total }} entries</p>
      <h1>Search the articles and main pages.</h1>
      <p class="lead">Everything on the site is listed here. Search by title or subject, use a filter, or browse the complete directory below.</p>
    </div>
    <aside class="intro-aside">
      <p>Every result is present in the page HTML, so the directory remains useful to readers, search engines and AI systems even without JavaScript.</p>
    </aside>
  </div>
</header>

<div class="directory-content" data-directory>
  <section class="section directory-tools" aria-labelledby="directory-tools-title">
    <div class="shell">
      <div class="directory-search-panel">
        <div>
          <p class="eyebrow">Search and filter</p>
          <h2 id="directory-tools-title">What are you looking for?</h2>
        </div>
        <div data-directory-enhancement hidden>
          <form class="directory-search" role="search" data-directory-form>
            <label for="directory-search">Search by title, topic or description</label>
            <div class="directory-search-field">
              <input id="directory-search" name="q" type="search" placeholder="Try “local AI”, “benzene” or “data applications”" autocomplete="off" data-directory-search>
              <button type="button" data-directory-clear hidden>Clear</button>
            </div>
          </form>
          <div class="directory-filters" role="group" aria-label="Filter directory by subject">
            <button type="button" data-directory-filter="all" aria-pressed="true">All <span>{{ directory_total }}</span></button>
            <button type="button" data-directory-filter="ai" aria-pressed="false">AI analytics <span>{{ directory_ai_articles.size }}</span></button>
            <button type="button" data-directory-filter="products" aria-pressed="false">Data products <span>{{ directory_product_articles.size }}</span></button>
            <button type="button" data-directory-filter="citizen" aria-pressed="false">Citizen science <span>{{ directory_citizen_articles.size }}</span></button>
            <button type="button" data-directory-filter="guides" aria-pressed="false">Site guides <span>{{ directory_guide_count }}</span></button>
          </div>
          <p class="directory-status" aria-live="polite" data-directory-status>Showing all {{ directory_total }} entries.</p>
        </div>
        <noscript><p class="directory-noscript">Search and filters need JavaScript; the complete directory remains visible below.</p></noscript>
      </div>
    </div>
  </section>

  <section class="section directory-group" data-directory-section aria-labelledby="directory-ai-title">
    <div class="shell">
      <div class="directory-group-heading">
        <p class="eyebrow">Series 01 · {{ directory_ai_articles.size }} articles</p>
        <h2 id="directory-ai-title">Verifiable and private AI analytics</h2>
      </div>
      <ol class="directory-list">
        {% for article in directory_ai_articles %}
          {% capture article_search %}{{ article.title }} {{ article.description }} {{ article.tags | join: ' ' }} {{ article.series }}{% endcapture %}
          <li data-directory-item data-directory-filter="ai" data-search="{{ article_search | downcase | strip_newlines | escape }}">
            <a class="directory-entry" href="{{ article.url | relative_url }}">
              <span class="directory-entry-number">0{{ article.article_order }}</span>
              <span class="directory-entry-copy">
                <span class="directory-entry-meta">Article{% if article.read_time %} · {{ article.read_time }}{% endif %}</span>
                <strong>{{ article.title }}</strong>
                <span>{{ article.description }}</span>
              </span>
              <span class="directory-entry-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="section directory-group" data-directory-section aria-labelledby="directory-products-title">
    <div class="shell">
      <div class="directory-group-heading">
        <p class="eyebrow">Series 02 · {{ directory_product_articles.size }} articles</p>
        <h2 id="directory-products-title">Building complete data products</h2>
      </div>
      <ol class="directory-list">
        {% for article in directory_product_articles %}
          {% capture article_search %}{{ article.title }} {{ article.description }} {{ article.tags | join: ' ' }} {{ article.series }}{% endcapture %}
          <li data-directory-item data-directory-filter="products" data-search="{{ article_search | downcase | strip_newlines | escape }}">
            <a class="directory-entry" href="{{ article.url | relative_url }}">
              <span class="directory-entry-number">0{{ article.article_order }}</span>
              <span class="directory-entry-copy">
                <span class="directory-entry-meta">Article{% if article.read_time %} · {{ article.read_time }}{% endif %}</span>
                <strong>{{ article.title }}</strong>
                <span>{{ article.description }}</span>
              </span>
              <span class="directory-entry-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="section directory-group" data-directory-section aria-labelledby="directory-citizen-title">
    <div class="shell">
      <div class="directory-group-heading">
        <p class="eyebrow">Series 03 · {{ directory_citizen_articles.size }} articles</p>
        <h2 id="directory-citizen-title">Citizen science and public evidence</h2>
      </div>
      <ol class="directory-list">
        {% for article in directory_citizen_articles %}
          {% capture article_search %}{{ article.title }} {{ article.description }} {{ article.tags | join: ' ' }} {{ article.series }}{% endcapture %}
          <li data-directory-item data-directory-filter="citizen" data-search="{{ article_search | downcase | strip_newlines | escape }}">
            <a class="directory-entry" href="{{ article.url | relative_url }}">
              <span class="directory-entry-number">0{{ article.article_order }}</span>
              <span class="directory-entry-copy">
                <span class="directory-entry-meta">Article{% if article.read_time %} · {{ article.read_time }}{% endif %}</span>
                <strong>{{ article.title }}</strong>
                <span>{{ article.description }}</span>
              </span>
              <span class="directory-entry-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="section directory-group" data-directory-section aria-labelledby="directory-guides-title">
    <div class="shell">
      <div class="directory-group-heading">
        <p class="eyebrow">Site guides · {{ directory_guide_count }} pages</p>
        <h2 id="directory-guides-title">The principal routes through the site</h2>
      </div>
      <ol class="directory-list directory-list-guides">
        <li data-directory-item data-directory-filter="guides" data-search="home antonio poggi overview omniscope data analytics ai citizen science air quality">
          <a class="directory-entry" href="{{ '/' | relative_url }}">
            <span class="directory-entry-number">01</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Overview</span>
              <strong>Home</strong>
              <span>The quickest introduction to Antonio’s professional work at Visokio and civic air-quality projects.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="visokio omniscope product company data analytics platform">
          <a class="directory-entry" href="{{ '/visokio/' | relative_url }}">
            <span class="directory-entry-number">02</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Product guide</span>
              <strong>Visokio and Omniscope</strong>
              <span>The product story, complete data workflows, data applications and verifiable AI.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="omniscope timeline history technology cycles desktop web cloud ai">
          <a class="directory-entry" href="{{ '/visokio/timeline/' | relative_url }}">
            <span class="directory-entry-number">03</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Product history</span>
              <strong>The Omniscope timeline</strong>
              <span>How Omniscope evolved through coordinated visualisation, workflows, web delivery, data applications and AI.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="whole data journey preparation analysis reporting automation delivery">
          <a class="directory-entry" href="{{ '/visokio/whole-data-journey/' | relative_url }}">
            <span class="directory-entry-number">04</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Capability guide</span>
              <strong>The whole data journey</strong>
              <span>Why data preparation, analysis, reporting, automation and delivery should stay connected.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="data applications internal tools embedded analytics workflows apps">
          <a class="directory-entry" href="{{ '/visokio/data-apps/' | relative_url }}">
            <span class="directory-entry-number">05</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Capability guide</span>
              <strong>Data applications</strong>
              <span>How workflows become internal tools, branded analytics, embedded experiences and automated services.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="verifiable ai analytics local models agents tools evidence governance">
          <a class="directory-entry" href="{{ '/visokio/verifiable-ai/' | relative_url }}">
            <span class="directory-entry-number">06</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Capability guide</span>
              <strong>Verifiable AI analytics</strong>
              <span>How models can operate real analytics tools while transformations, evidence and review remain visible.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="air quality taranto benzene citizen science sensor public evidence">
          <a class="directory-entry" href="{{ '/air-quality/' | relative_url }}">
            <span class="directory-entry-number">07</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Project guide</span>
              <strong>Air quality</strong>
              <span>Taranto monitoring data, benzene alerts, work with local citizens and the open AirGradient sensor project.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="writing articles essays publication">
          <a class="directory-entry" href="{{ '/writing/' | relative_url }}">
            <span class="directory-entry-number">08</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Publication</span>
              <strong>Writing</strong>
              <span>All fifteen articles, organised into three subject series.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li data-directory-item data-directory-filter="guides" data-search="about antonio poggi biography experience contact london taranto">
          <a class="directory-entry" href="{{ '/about/' | relative_url }}">
            <span class="directory-entry-number">09</span>
            <span class="directory-entry-copy">
              <span class="directory-entry-meta">Profile</span>
              <strong>About Antonio</strong>
              <span>Background, current focus, public profiles and ways to continue the conversation.</span>
            </span>
            <span class="directory-entry-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ol>
    </div>
  </section>

  <section class="section directory-empty" data-directory-empty hidden>
    <div class="shell">
      <p class="eyebrow">No exact match</p>
      <h2>Try a broader word or another subject.</h2>
      <p class="lead">Search terms such as “AI”, “Omniscope”, “workflow”, “benzene” or “sensor” work well.</p>
    </div>
  </section>
</div>
