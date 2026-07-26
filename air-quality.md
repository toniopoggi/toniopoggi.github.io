---
title: Air Quality
permalink: /air-quality/
section: air-quality
description: Antonio Poggi’s air-quality citizen-science work, from public monitoring dashboards and benzene alerts in Taranto to an open sensor connected directly to Omniscope.
image: /assets/images/x-2025-benzene-peak-42-54.jpg
---
<header class="page-intro">
  <div class="shell page-intro-grid">
    <div>
      <p class="eyebrow">Air quality · Citizen science</p>
      <h1>From public data to citizen-owned instruments.</h1>
      <p class="lead">A long-running effort to make environmental measurements around Taranto easier to understand, investigate and use, followed by a new experiment that brings the same philosophy all the way to the physical sensor.</p>
    </div>
    <aside class="intro-aside">
      <p><strong>Taranto, Puglia.</strong><br>A beautiful city living beside one of Europe’s largest industrial sites, and the place where I grew up.</p>
    </aside>
  </div>
</header>

<section class="section">
  <div class="shell">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-year">2018–19</div>
        <div class="timeline-content">
          <h3>Turn public files into a public instrument</h3>
          <p>I use Omniscope to combine and visualise ARPA Puglia measurements, publishing an interactive dashboard where citizens can compare pollutants, stations, periods and the underlying observations.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-year">2019–24</div>
        <div class="timeline-content">
          <h3>Make monitoring operational</h3>
          <p>The history expands, an Italian edition is added, and the project grows into hourly benzene monitoring with automated public alerts linking back to interactive evidence.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-year">2024–25</div>
        <div class="timeline-content">
          <h3>Support civic analysis</h3>
          <p>Work with PeaceLink and local advocates develops into longer historical analyses, including more than 80,000 hourly benzene measurements and evidence presented during an Italian Senate hearing.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-year">2026</div>
        <div class="timeline-content">
          <h3>Democratise the instrument</h3>
          <p>I customise an open AirGradient monitor so it can send measurements directly and privately to an Omniscope workflow, with no vendor cloud, middleware, home server or inbound router port.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="metric-strip">
    <div class="metric">
      <strong>80k+</strong>
      <span>Hourly benzene observations examined across 2013–2023.</span>
    </div>
    <div class="metric">
      <strong>63</strong>
      <span>Observations over the project’s 27 µg/m³ acute reference level.</span>
    </div>
    <div class="metric">
      <strong>1 min</strong>
      <span>Current interval for the new sensor’s direct push to Omniscope.</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">The evidence</p>
      <h2>Peaks need attention. History gives them meaning.</h2>
    </div>
    <figure class="feature-image">
      <img src="{{ '/assets/images/x-2025-benzene-trend-2023-2025.jpg' | relative_url }}" alt="Omniscope report comparing benzene peaks and averages across Taranto monitoring stations" width="1008" height="1402" loading="lazy">
      <figcaption>Benzene peaks and average concentrations across Cokeria, Meteo Parchi, Via Orsini and Via Machiavelli, 2023–2025.</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Read the story</p>
      <h2>From seven years of monitoring to one very geeky sensor.</h2>
    </div>
    <div class="article-list">
      {% assign sorted_articles = site.articles | sort: 'date' %}
      {% for article in sorted_articles %}
        <a class="article-row" href="{{ article.url | relative_url }}">
          <time datetime="{{ article.date | date_to_xmlschema }}">{{ article.date | date: "%Y" }}</time>
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
      <p class="eyebrow">Public record</p>
      <h2>The work travelled beyond the dashboard.</h2>
    </div>
    <div class="work-grid">
      <a class="work-card" href="https://www.peacelink.it/ecodidattica/a/46222.html">
        <span class="tag">PeaceLink · February 2019</span>
        <div>
          <h3>Environmental data in the classroom</h3>
          <p>Alessandro Marescotti documents students using the Omniscope dashboard to compare ARPA monitoring data and describes it as environmental data democratisation.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.senato.it/application/xmanager/projects/leg19/attachments/documento_evento_procedura_commissione/files/000/429/055/2024_02_06_PeaceLink_slides.pdf">
        <span class="tag">Italian Senate · February 2024</span>
        <div>
          <h3>Analysis enters the institutional record</h3>
          <p>PeaceLink’s official hearing slides credit Antonio for data analysis and processing with Omniscope, and acknowledge Annamaria Moschetti among the collaborators.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.isdenews.it/?p=30644">
        <span class="tag">Historical analysis · 2013–2023</span>
        <div>
          <h3>Eleven years of benzene measurements</h3>
          <p>More than 80,000 hourly observations reveal that 32 of the 63 readings over 27 µg/m³ occurred in 2023 alone.</p>
        </div>
      </a>
      <a class="work-card" href="https://www.peacelink.it/citizenscience/a/50007.html">
        <span class="tag">Citizen science</span>
        <div>
          <h3>Monitoring from below</h3>
          <p>PeaceLink’s account of the dashboard, public alerts and the role of accessible environmental evidence.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="archive-note">
      <p class="kicker">Archive in progress</p>
      <p>I am assembling the fuller record: public posts and alerts, work supporting Alessandro Marescotti, PeaceLink and citizens of Taranto and Tamburi, exchanges with scientists and doctors including Annamaria Moschetti, and the Senate hearing where analysis produced in Omniscope was presented. This first edition establishes the spine; the documented archive will deepen it.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">Open implementation</p>
      <p class="lead">The new sensor experiment is documented in public repositories so other people can inspect it, adapt it and build their own path from an open monitor to private historical analysis.</p>
    </div>
    <div class="button-row">
      <a class="button button-primary" href="https://github.com/toniopoggi/airgradient-omniscope">Firmware and web installer ↗</a>
      <a class="button" href="https://github.com/toniopoggi/airgradient-omniscope-android">Android controller ↗</a>
    </div>
  </div>
</section>
