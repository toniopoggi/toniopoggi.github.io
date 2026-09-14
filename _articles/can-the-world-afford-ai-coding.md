---
title: "Can the world afford AI coding at this pace?"
subtitle: "One measured coding-agent session, 315 million context tokens and a question about the economics behind flat subscriptions and slower frontier development."
date: 2026-09-14 16:00:00 +0100
last_modified_at: 2026-09-14 20:03:36 +0100
eyebrow: "AI economics · Agentic coding"
series: "Building in the AI age"
cluster: ai-business
cluster_label: "Building in the AI age"
article_order: 1
read_time: "9 min"
description: "A measured coding-agent session exposed the gap between subscription pricing and list-price inference, then raised a harder question about AI scaling, safety and IPO economics."
image: /assets/images/articles/ai-coding-pet-power-stations.png
image_alt: "An illustrated London scene with people coding beside small dog-like power stations carrying AI and cloud company logos"
image_width: 1536
image_height: 1024
image_type: image/png
image_caption: "<em>At these numbers, everyone will need their own data centre,</em>"
tags:
  - AI coding economics
  - coding agents
  - inference cost
  - data centres
  - frontier AI
  - AI company economics
takeaways:
  - "This article starts with one Saturday morning: four coding agents processed 315.1 million context tokens in 3 hours and 20 minutes, equivalent to $298 at published API prices—not a bill."
  - "It follows the expensive patterns—agent fan-out, old contexts and repeated re-reading—then deliberately scales them to test the pressure on chips, electricity and subscription economics."
  - "That is the backdrop for the labs’ sudden calls to pace frontier development, arriving as Anthropic and OpenAI face extraordinary capital needs and possible IPOs."
next_url: /writing/
next_label: "All writing"
next_title: "Browse all four article series"
---

On Saturday morning I had four coding agents running side by side for 3 hours
and 20 minutes. Between them they made 1,259 API requests and processed 315.1
million tokens of context. When I repriced every request using the published
rate for its model and token category, the total came to **$298**.

The token counts are measured. The dollars are not a bill and they are
certainly not the provider's cost: they are the list-price equivalent of work
included in a flat subscription. Important. Across 22 active days, the same
method recorded about 42,000 requests; normalised to a 30.44-day month, the
pattern comes to roughly **$7,000** at list price, against a $200 subscription.

That does not prove the subscription loses $6,800 on me. Nobody outside the
provider can see the serving margin, how its internal metering works, or how
much capacity would otherwise have sat idle. It does show the size of the gap
hidden by the flat fee.

## Eight characters, 19 agents

The most expensive instruction that morning was not a difficult specification.
It was “go ahead”: eight characters including the space.

Those two words released 19 review agents onto one codebase. The result was 458
requests across 20 contexts, $62 at list price and a run rate of $528 an hour.
Of the 28 prompts I typed that morning, two accounted for $159 of the $298. The
length of the prompt was irrelevant; the fan-out behind it was the expensive
part.

Old sessions hurt as well. One context had been alive since 25 August, with
nearly 18,000 transcript records and 11 compactions. Its first request of the
day reloaded 555,000 tokens before doing new work, and six cold reloads came to
$31. Across the whole morning, tool output and conversation re-read on every
turn accounted for $86. Context amplification was 28 times overall and above
90 times in the two oldest sessions.

Focused work looked very different. A single session without fan-out ran at
$18 to $24 an hour, while a 77-request CI investigation cost $10. The lesson
from my own data is practical: parallel reviews, long-lived sessions and
casually accumulated context dominate the bill long before the useful coding
disappears.

The account's rate-limit display supplied another clue, although only a clue.
The $298 coincided with 98 per cent of a five-hour allowance and 20 per cent of
a fresh weekly allowance. If both percentages track the same hidden unit as my
price reconstruction, a full five-hour block is equivalent to about $304 and
the weekly allowance to 4.9 such blocks. The arithmetic is exact; the
assumption about the metering unit is not.

## Scaling one strange morning

Then I made the deliberately unreasonable move: I scaled my pattern.

Using [SlashData's early-2025 estimate of 36.5 million professional
developers](https://www.slashdata.co/post/global-developer-population-trends-2025-how-many-developers-are-there)
and roughly 7.4 billion context tokens per developer per normalised month, one
per cent adoption produces about 2.7 quadrillion context tokens. At ten per
cent it is 27 quadrillion; at full adoption, 270 quadrillion.

Google said at I/O in May that it was processing more than [3.2 quadrillion
tokens a month across its
surfaces](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/), seven
times the previous year's figure. So one per cent of one profession, behaving
like me, lands in the same order of magnitude as Google's published total.

This is a scale comparison, not an equivalence. Google does not publish enough
detail to establish that its “tokens processed” and the context-token
accounting in my transcripts measure the same work. The workloads are
different as well. The comparison stopped me because of its size, but it
should not be made to carry more than that.

The hardware conversion is weaker again. I used an [MLPerf Llama 2 70B result
on H100s](https://mlcommons.org/2024/03/mlperf-llama2-70b/) as a throughput
anchor, then allowed a wide range for prompt caching. My median request carried
179,000 tokens, while the benchmark used much shorter prompts; 96 per cent of
my context tokens were cache reads. Translating this workload into
frontier-model accelerator time is therefore a stress test with a very wide
error bar, not a capacity forecast.

The denominator is also provisional. My internal model currently gives 22.1
million H100-equivalents worldwide, a sum of estimates by operator, but that
work is not yet published. As a public cross-check, Epoch AI's current tracker
covers [86 large AI data-centre sites, 13.9 million H100-equivalents and 13.3
GW of IT power](https://epoch.ai/data/ai-data-centers); it estimates 46 per cent
coverage of deployed capacity, with a wide confidence interval, and its
catalogue includes sites under construction. That supports the order of
magnitude, not our exact total.

With all those warnings attached, my scenario puts one per cent adoption at
roughly 0.2 to 1.5 per cent of the provisional accelerator fleet and 1 to 5 TWh
of electricity a year. At ten per cent, it becomes 2.1 to 15.1 per cent of the
fleet and 7 to 47 TWh. Full adoption reaches 21.6 to 151 per cent of the fleet
and 67 to 467 TWh.

The [IEA estimates](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)
that all data centres used about 415 TWh in 2024, and [global electricity
consumption](https://www.iea.org/reports/electricity-2026/demand) was 28,200
TWh in 2025. In this particular scenario, global annual electricity does not
bind first; accelerator availability and economics do. Local grids can still
be a serious constraint precisely because data-centre demand is concentrated.
A global percentage does not make the connection queue in one place disappear.

## Prices are moving in more than one direction

The comforting answer is that inference becomes cheaper every year. It does,
for many fixed capabilities and many smaller models, but the current frontier
price cards do not describe one clean downward line.

Anthropic cut Opus pricing from $15/$75 per million input/output tokens for
Opus 4.1 to $5/$25 for Opus 4.5, and has kept recent Opus versions around that
level. Its newer Fable 5.1 is $10/$50. [OpenAI launched GPT-5 at
$1.25/$10](https://openai.com/index/introducing-gpt-5-for-developers/), then
priced GPT-5.4 at $2.50/$15, GPT-5.5 at $5/$30 and GPT-6 Astra at $10/$50.
These are selected published list prices, not a quality-adjusted index; context
length, caching, batch processing, routing and how many tokens a model needs to
finish the task can reverse the comparison. The current
[Anthropic](https://claude.com/pricing) and
[OpenAI](https://developers.openai.com/api/docs/pricing) cards make the
ambiguity visible.

Holding capability fixed gives a more optimistic history, but even there the
choice of benchmark controls the headline. Epoch AI found annual declines
ranging from [roughly 9 to 900
times](https://epoch.ai/data-insights/llm-inference-price-trends) depending on
the performance milestone, and warned that the fastest falls might not
persist. “AI is getting cheaper” is true. It is not yet a budget.

## The sudden agreement to pace the frontier

This weekend added a strange new piece to the economics. Dario Amodei argued
that labs should [slow the rate of capability
improvement](https://darioamodei.com/post/we-must-pace-the-frontier) so safety
work and independent evaluation have time to catch up. Anthropic committed to
embedded external evaluators; [Sam Altman, Elon Musk and Demis Hassabis then
endorsed the direction](https://www.axios.com/2026/09/13/ai-labs-regulation-safety),
an unusual convergence among fierce competitors.

There is more here than a press statement. OpenAI had already disclosed [a
two-week pause in reinforcement-learning
training](https://openai.com/index/pacing-model-development-cyber-capabilities/)
while it hardened research environments after serious cyber-capability
concerns. Anthropic separately reported [pauses in external cyber evaluations
and higher-risk reinforcement-learning
environments](https://www.anthropic.com/news/improving-alignment-security-efforts).
These were targeted operational pauses, not a common timetable for slowing all
model development. No enforceable industry-wide speed limit has been
announced.

I find the timing hard to ignore. [Anthropic is still reported to be
considering a 2026 listing, while OpenAI is leaning towards
2027](https://www.axios.com/2026/09/14/anthropic-ipo-safety-openai). [Reuters
has also relayed a
report](https://au.marketscreener.com/news/anthropic-tells-investors-it-will-be-profitable-for-second-straight-quarter-ft-reports-ce785bdcd981fe26)
that Anthropic expects positive adjusted operating income for a second
consecutive quarter. This is investor information reported by journalists,
not an audited public filing, and the adjusted measure is not the same thing as
durable profitability.

An IPO does not oblige a company to be profitable; many loss-making companies
list. It does expose the economics to public-market scrutiny every quarter and
requires investors to believe the path from astonishing revenue to sustainable
returns. Slowing the frontier could reduce risk and give safety work time. It
could also extend the commercial life of existing models and change the timing
of enormous training costs. Both can be true, and the coincidence is worth
examining. It is not evidence that the safety argument is a financial pretext.

## So, can the world afford it?

At one per cent adoption, even my aggressive usage pattern fits comfortably
inside the provisional global totals. At full adoption, the upper end of the
same calculation asks for more accelerators than the present fleet contains.
That is not a prediction of failure. It is a sign that the practice cannot
scale unchanged: models, chips, caching, routing, prices and developer
behaviour will all move.

The part we can act on today is much closer to the keyboard. My $298 morning
became expensive through a fan-out hidden behind eight characters, old
contexts that had to be warmed again, and the same material passing through
the model many times. A flat subscription made all of that feel free.

Every engineering organisation using coding agents can run this calculation
over its own transcripts. The labs can help by publishing clearer metering
rules, meaningful limits and economics that distinguish inference from
training. Independent safety evaluators need enough access to test the pacing
claims as well.

Then we can argue about whether AI coding is affordable with something better
than a subscription price on one side and a data-centre photograph on the
other.
