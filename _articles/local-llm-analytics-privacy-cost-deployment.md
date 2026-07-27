---
title: "Local LLM Analytics: Privacy, Cost and Deployment Trade-offs"
subtitle: "Running the model yourself can protect control and data residency. It also gives you the GPU bill, cold starts, version conflicts and operational responsibility."
date: 2026-07-27 00:04:00 +0100
last_modified_at: 2026-07-27 21:25:00 +0100
eyebrow: "Local AI · Deployment"
series: "Verifiable and private AI analytics"
cluster: ai
cluster_label: "Verifiable and private AI analytics"
article_order: 4
read_time: "8 min"
description: "A practical comparison of local, cloud and hybrid LLM analytics across privacy, model quality, GPU cost, latency, reliability and operations."
image: /assets/images/articles/local-qwen-h100.png
image_alt: "Omniscope connected to a local Qwen 3.6 model served by vLLM on an NVIDIA H100"
image_width: 1672
image_height: 941
image_caption: "A tested May 2026 stack: Omniscope, Qwen3.6-27B-FP8, vLLM 0.20.1 and one H100 80GB."
tags:
  - local LLM analytics
  - private AI
  - self-hosted LLM
  - H100
  - Qwen
  - Omniscope
takeaways:
  - "Local deployment improves control only when the endpoint, network, permissions, logs and stored prompts are also secured."
  - "Compare cost per useful workload, including idle GPU time and operations, not only API token price."
  - "Tool-calling and structured-output reliability matter more to analytics than a model’s benchmark headline."
next_url: /writing/natural-language-to-inspectable-analytical-workflow/
next_label: "Next in the series"
next_title: "From natural-language question to inspectable analytical workflow"
---

Local AI became very easy to romanticise.

Keep the data inside your infrastructure. Avoid a provider dependency. Pay no
per-token bill. Work even when an external service is unavailable.

All of those can be real advantages.

Then the model takes 90 seconds to start, a runtime update breaks tool calls,
the GPU sits idle all weekend and somebody has to work out why a perfectly
valid response was wrapped in the wrong chat template.

Local LLM analytics is not automatically private, cheap or reliable. It is a
deployment choice. A very physical one.

I still like it. I just think it should be chosen for the right reasons.

## Stop using “local” for three different things

People often collapse local execution, private hosting and open-weight models
into “local AI”. They are not equivalent.

The actual arrangements include:

- a model running on the analyst’s laptop;
- an inference server on a workstation inside the office;
- a GPU machine in the organisation’s data centre;
- a dedicated instance inside a private cloud network;
- a European or other region-specific hosting provider;
- a managed external endpoint using open weights — not local, despite the
  model licence.

These do not provide the same privacy or operational properties.

Before choosing, define the boundary:

- Where do model weights run?
- Where are prompts and responses stored?
- Does the endpoint accept connections outside the private network?
- Are request logs enabled?
- Can administrators inspect the traffic?
- Which data is placed into the model context?
- Is telemetry sent by the runtime or surrounding application?
- How are credentials and model configuration protected?

An open-weight model sent data through an unsecured endpoint is not private.
A server in the same building with shared administrator access may be less
controlled than a properly isolated cloud service.

“Local” is a location. Privacy is a system property.

## A working reference point

In May 2026 I tested a specific configuration for real Omniscope analytical
work:

- **Omniscope 2026.1 b22470 or later;**
- **Qwen3.6-27B-FP8;**
- **vLLM 0.20.1;**
- **one NVIDIA H100 with 80GB memory;**
- a current NVIDIA driver, container runtime and sufficient disk for images
  and model files.

I tested multi-step Insight Explorer questions, Instant Dashboard and AI
Insights. That matters because generating prose is not the difficult test.
The model had to reason over schemas, call tools and return structured output
that the application could actually consume.

The configuration was a known-working point, not a timeless recommendation.
Local AI changes too quickly for that. The exact version pins are part of the
result.

<figure>
  <img src="{{ '/assets/images/articles/omniscope-h100-workbench.png' | relative_url }}" alt="Conceptual illustration of a Qwen model served through vLLM on H100 hardware" width="1376" height="768" loading="lazy">
  <figcaption>Conceptual view of the tested stack. The reproducible evidence is the pinned configuration and commands in the <a href="https://visokio.com/2026/05/27/running-omniscope-against-a-local-qwen3-6-27b-fp8-model-on-an-h100/">linked setup guide ↗</a>.</figcaption>
</figure>

## Privacy and control

The strongest case for local inference is control over the data path.

For regulated, confidential or commercially sensitive work, an organisation
may need to ensure that prompts and source data do not leave a controlled
environment. It may need to run in a disconnected network. It may need to
choose when a model is updated rather than accepting a provider change.

Local deployment can support those requirements. It also transfers the
responsibility:

- secure the inference endpoint;
- authenticate callers;
- restrict network routes;
- patch the host and runtime;
- manage logs and retention;
- control which projects can use which model;
- review licenses and model provenance;
- monitor resource use;
- document the configuration.

The model is only one component. Private analytics also needs governed source
access, execution tools and outputs.

## Cost: token bill versus utilisation

Cloud APIs make cost visible per request. Local infrastructure turns much of
that cost into capacity.

In the May test, a GCP Spot H100 was approximately **$2–2.50 per hour**. Left
running continuously, that is roughly **$1,500 per month** before the other
operational costs.

That does not mean the setup costs $1,500 per month. An auto-shutdown machine
used for a few intensive sessions may cost a fraction of that. Equally, a GPU
that sits idle for most of the day can make a cheap-looking per-token
calculation meaningless.

A fair comparison includes:

- model download and storage;
- GPU hours, including idle and cold-start time;
- engineering time to configure and upgrade;
- monitoring, security and backup;
- failed experiments;
- concurrency requirements;
- the cost of a fallback when the local service is unavailable;
- cloud API charges for the same real workload.

The relevant unit is not the price of one million tokens. It is the cost of
useful, accepted analytical work.

### Utilisation changes the answer

If many users submit steady workloads, owned or reserved capacity can be
efficient. If requests are occasional and bursty, an API may be cheaper and
operationally simpler. If data cannot leave the perimeter, price may be a
secondary constraint.

This is why there is no universal winner.

## Quality versus hardware footprint

Larger models tend to need more memory and may deliver stronger reasoning, but
model size is not the same as application quality.

Quantisation reduces memory and can make local deployment practical. It can
also alter output quality. A smaller model may respond quickly but fail on
multi-step joins. A reasoning model may solve a difficult plan but take too
long for an interactive application.

For analytics, test at least:

- schema interpretation;
- function or tool selection;
- valid structured output;
- multi-step planning;
- recovery from a tool error;
- calculation explanation;
- instruction following under realistic context sizes;
- latency from the user’s perspective.

A benchmark score cannot tell you whether the model will reliably emit the
JSON your report builder expects.

## The model is not the complete inference stack

One of the less glamorous lessons from local deployment is that “the model”
does not operate alone.

The behaviour depends on a combination of:

```text
model weights
  + tokenizer and chat template
  + inference engine
  + reasoning/tool-call parser
  + launch flags and version
```

In 2025 we tested GPT-OSS through different engines. Some combinations produced
confident text describing a tool call without actually making one. Others
parsed the same model correctly. In that particular period, llama.cpp proved
more reliable for the interactive workflow than vLLM.

That was not a permanent verdict on either engine. It was a reminder that
OpenAI-compatible endpoints are not behaviourally identical.

<figure>
  <img src="{{ '/assets/images/articles/llama-cpp-testing.png' | relative_url }}" alt="Cartoon of llama.cpp carrying a developer past a stalled vLLM tank during a difficult local LLM deployment" width="1280" height="853" loading="lazy">
  <figcaption>Model, template and inference engine form one behavioural system. Test the combination, not the logo. <a href="https://visokio.com/2025/09/19/lessons-from-the-trenches-why-llama-cpp-works-best-today/">Read the dated engineering account ↗</a></figcaption>
</figure>

## Latency and cold starts

The H100 configuration took roughly **60–120 seconds** to start without a warm
cache. That is manageable for a scheduled service with auto-shutdown, but it is
not invisible.

You need to decide:

- Is the model always warm?
- How quickly must the first answer arrive?
- How many concurrent users are expected?
- Should smaller requests use another model?
- What happens during startup or model loading?
- Can a queue form without making the application feel broken?

Local does not necessarily mean low latency. A nearby overloaded GPU can be
slower than a well-operated remote endpoint.

## Portability and dependence

Self-hosting reduces one kind of vendor dependence, but may create another:

- GPU availability;
- a particular serving engine;
- one model’s prompt format;
- custom parsers;
- cloud-specific machine images;
- specialist knowledge held by one engineer.

The safest design keeps the application above the model interface as portable
as practical. In Omniscope we want the analytical tools and resulting
workflows to remain useful whether the model is Qwen, GPT, Claude, Gemini or
something that does not exist yet.

Model neutrality is not about changing providers every week. It is about
making the choice reversible.

## Local, cloud or hybrid?

I would choose based on workload rather than ideology.

### Prefer local or private inference when

- source data must remain inside a controlled perimeter;
- disconnected operation is required;
- model configuration must be pinned;
- workload is steady enough to use the hardware;
- the organisation can operate the service;
- a suitable model meets the application-quality threshold.

### Prefer a cloud API when

- frontier capability materially improves the outcome;
- workloads are intermittent;
- fast deployment matters more than infrastructure control;
- the provider’s data terms and security controls are acceptable;
- the team does not want to operate GPUs.

### Use a hybrid approach when

- sensitive workloads stay local while general tasks use frontier models;
- a small local model handles routine work and a stronger remote model handles
  difficult plans;
- the cloud is a controlled fallback;
- different projects have different residency requirements.

Hybrid is often the most honest answer. Not every dataset has the same risk,
and not every question needs the same model.

## A deployment checklist

Before calling a local model “production ready”, I would want:

1. a documented threat and data-flow model;
2. authenticated, network-restricted endpoints;
3. explicit prompt and response retention;
4. a pinned model, runtime and template combination;
5. tool-call and structured-output tests using real analytical tasks;
6. capacity, latency and concurrency measurements;
7. auto-start, health checks and auto-shutdown where appropriate;
8. monitoring of errors and GPU utilisation;
9. upgrade and rollback procedures;
10. a cloud or manual fallback for important work.

Running the weights is the beginning, not the deployment.

## Choice is the advantage

I do not want every analytical workload forced into a public model. I also do
not want teams buying expensive GPUs to satisfy a slogan.

The real advantage is choice:

- choose where the data can travel;
- choose the model quality required;
- choose whether cost follows requests or capacity;
- choose how much infrastructure to operate;
- change that decision without rebuilding the analytical work.

Local AI is not a moral virtue and the cloud is not a moral failure.

They are engineering trade-offs. Make them visible, test them with the real
workload, and keep the exit door unlocked.
