---
title: Writing
permalink: /writing/
section: writing
description: Selected writing by Antonio Poggi about Omniscope, product, data, AI, software and citizen science.
---
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Writing</p>
      <h1>Ideas worth keeping.</h1>
      <p class="lead">Selected essays and articles from my own site and the places where I have written over the years. This is a curated index—not a mirror of every social post.</p>
    </div>
    <aside class="intro-aside">
      <p>For current experiments, product progress and shorter observations, follow me on <a href="https://www.linkedin.com/in/antoniopoggi">LinkedIn</a>.</p>
    </aside>
  </div>
</header>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">On this site</p>
      <h2>Original essays.</h2>
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
      <p class="eyebrow">Published elsewhere</p>
      <p class="lead">Different places serve different readers. Company material remains at Visokio; public conversation lives on LinkedIn; the original Taranto story remains on Medium.</p>
    </div>
    <div class="link-groups">
      <div class="link-group">
        <span class="pillar-number">PRODUCT</span>
        <h2>Visokio</h2>
        <p>Official product thinking, use cases, releases and technical work around Omniscope.</p>
        <a href="https://visokio.com/author/antonio17b4b024ad/">View author archive ↗</a>
      </div>
      <div class="link-group">
        <span class="pillar-number">CONVERSATION</span>
        <h2>LinkedIn</h2>
        <p>Hundreds of posts and native articles about product building, analytics, AI and current experiments.</p>
        <a href="https://www.linkedin.com/in/antoniopoggi/recent-activity/all/">View activity ↗</a>
      </div>
      <div class="link-group">
        <span class="pillar-number">ORIGIN STORY</span>
        <h2>Medium</h2>
        <p>The 2019 article that first documented the public air-quality dashboard for Taranto.</p>
        <a href="https://medium.com/omniscope/air-pollution-looking-after-my-hometown-1b98857a994d">Read the original ↗</a>
      </div>
    </div>
  </div>
</section>

