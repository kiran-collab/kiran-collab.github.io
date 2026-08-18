---
title: "DevOps Stack"
permalink: /stacks/devops/
layout: single
author_profile: true
---

{% include stack-style.html %}

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">Everything between "the code works on my machine" and "it is running reliably for other people, and we know when it stops." Grouped by the job each piece does rather than by tool, because the tools change and the problems do not.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">Foundations</p>

<details class="cx" id="version-control">
<summary>Version Control &amp; Branching</summary>
<div class="cx-body">
<p>Git tracks history as a graph of commits, and a branch is just a movable pointer into it. The mechanics are simple; the disagreements are all about workflow — trunk-based development with short-lived branches, or long-lived release branches merged periodically.</p>
<p>The choice matters more than it looks. <span class="k">Long-lived branches accumulate merge risk</span> in proportion to how long they live, so teams that integrate daily spend less time resolving conflicts than teams that integrate monthly, even though each individual merge feels smaller. Trunk-based development is the modern default for exactly this reason, and it is what makes continuous integration possible at all.</p>
</div>
</details>

<details class="cx" id="ci">
<summary>Continuous Integration</summary>
<div class="cx-body">
<p>Every change is merged into the mainline frequently, and each merge triggers an automated build and test run. The point is not the automation — it is the frequency. CI without frequent merging is just a build server.</p>
<p>What it buys is a short distance between introducing a defect and discovering it. A test that fails within ten minutes of your commit is a small problem; the same failure found three weeks later, in someone else's branch, is an investigation. The discipline that makes it work is <span class="k">keeping the build green</span> — a pipeline that is habitually red teaches everyone to ignore it.</p>
</div>
</details>

<details class="cx" id="cd">
<summary>Continuous Delivery vs Deployment</summary>
<div class="cx-body">
<p>Continuous <span class="k">delivery</span> means every change that passes the pipeline is releasable, and a human decides when to release. Continuous <span class="k">deployment</span> removes that human — anything that passes goes to production automatically. The distinction is one approval gate, and people use the terms interchangeably to their cost.</p>
<p>Deployment frequency turns out to correlate with stability rather than against it, which is counterintuitive until you notice that small frequent changes are easier to diagnose and reverse than large infrequent ones. The prerequisite for either is <span class="k">confidence in the test suite</span>, since the pipeline is only as trustworthy as what it checks.</p>
</div>
</details>

<details class="cx" id="artifacts">
<summary>Build Artefacts &amp; Versioning</summary>
<div class="cx-body">
<p>An artefact is the immutable output of a build — a container image, a wheel, a jar — stored in a registry and identified by a version or content hash. The rule that makes deployment predictable is <span class="k">build once, deploy everywhere</span>: the exact bytes tested in staging are the bytes that reach production.</p>
<p>Rebuilding per environment breaks that guarantee silently, because a dependency resolved at build time may resolve differently an hour later. Pinning versions and recording the commit that produced each artefact is what makes "which code is running in production" an answerable question.</p>
</div>
</details>

<details class="cx" id="environments">
<summary>Environments &amp; Promotion</summary>
<div class="cx-body">
<p>Development, staging, production — the same artefact promoted through progressively more realistic environments, with configuration injected rather than baked in. Config comes from environment variables or a config service; secrets come from a secrets manager.</p>
<p>The recurring failure is <span class="k">environment drift</span>: staging diverges from production in data volume, hardware, network topology, or third-party integrations, and stops predicting anything. Staging that differs materially from production gives false confidence, which is worse than having no staging at all because it is trusted.</p>
</div>
</details>

<p class="cx-group">Containers and orchestration</p>

<details class="cx" id="containers">
<summary>Containers &amp; Images</summary>
<div class="cx-body">
<p>A container packages an application with its dependencies and runs as an isolated process on a shared kernel — much lighter than a virtual machine, which carries a whole operating system. An image is the immutable filesystem it starts from, built in layers that are cached and shared between images.</p>
<p>Layer ordering is the practical skill: put the things that change rarely — base image, system packages, dependencies — early, and your own code last, so a code change rebuilds one small layer instead of everything. <span class="k">Multi-stage builds</span> let you compile in a fat image and ship a thin one, which cuts both image size and attack surface.</p>
</div>
</details>

<details class="cx" id="registries">
<summary>Container Registries</summary>
<div class="cx-body">
<p>Where images live: Docker Hub, ECR, GCR, GHCR, or a self-hosted one. Images are addressed by tag or by digest, and the difference matters — a tag is a mutable pointer, so <code>:latest</code> can change underneath you between two deployments that look identical.</p>
<p>Referencing by <span class="k">digest</span> rather than tag is what makes a deployment reproducible. Registries are also where scanning and signing happen, so they are a natural enforcement point for supply chain policy.</p>
</div>
</details>

<details class="cx" id="kubernetes">
<summary>Kubernetes</summary>
<div class="cx-body">
<p>A declarative orchestrator: you describe the desired state — this many replicas of this image with these resources — and controllers continuously reconcile reality toward it. Pods are the unit of scheduling, Deployments manage replica sets, Services provide stable networking, and Ingress handles external traffic.</p>
<p>The mental shift is from imperative to declarative. You do not start containers; you declare what should exist and the control loop makes it so, including after a node dies. The cost is real operational complexity, and <span class="k">the honest question is whether you need it</span> — a managed container service is sufficient for a great many workloads that reach for Kubernetes because it is the default answer.</p>
</div>
</details>

<details class="cx" id="helm">
<summary>Helm &amp; Manifests</summary>
<div class="cx-body">
<p>Kubernetes manifests are YAML, and YAML does not template itself. Helm packages a set of manifests as a chart with parameterised values, so the same application can be deployed to different environments by changing a values file rather than by copying and editing manifests.</p>
<p>Alternatives worth knowing: Kustomize does overlays without templating, which some teams prefer because the output stays readable YAML. The failure mode of both is the same — <span class="k">configuration sprawl</span>, where the values files become the real complexity and nobody can say what a given environment is actually running.</p>
</div>
</details>

<details class="cx" id="service-mesh">
<summary>Service Mesh</summary>
<div class="cx-body">
<p>A layer that moves cross-cutting network concerns — mutual TLS, retries, timeouts, traffic splitting, per-request telemetry — out of application code and into sidecar proxies alongside each service. Istio and Linkerd are the common implementations.</p>
<p>It is genuinely useful at a certain scale and considerable overhead below it. The trade is a uniform policy and observability layer against another distributed system to operate and debug, so the sensible sequence is to <span class="k">reach for it when the problems it solves are actually hurting</span>, not in anticipation.</p>
</div>
</details>

<p class="cx-group">Infrastructure as code</p>

<details class="cx" id="iac">
<summary>Infrastructure as Code</summary>
<div class="cx-body">
<p>Infrastructure defined in files, version-controlled and applied by a tool rather than clicked together in a console. Terraform is the common choice because it is declarative and cloud-agnostic; CloudFormation, Pulumi, and CDK occupy the same space with different trade-offs.</p>
<p>What it actually buys is reviewability and repeatability — infrastructure changes go through pull request like code, and an environment can be recreated from scratch. The discipline required is that <span class="k">nobody changes anything by hand</span>, because a single console edit puts reality out of step with the code and the next apply will either revert it or fail.</p>
</div>
</details>

<details class="cx" id="state-drift">
<summary>State &amp; Drift</summary>
<div class="cx-body">
<p>Terraform records what it believes exists in a state file, and compares that to your configuration to compute a plan. The state file is therefore critical infrastructure: it must be stored remotely, locked during writes so two people cannot apply simultaneously, and never edited casually.</p>
<p><span class="k">Drift</span> is reality diverging from state — a resource changed manually, or deleted, or created by another process. Detecting it early is the point of running plan regularly rather than only before an apply, because drift discovered during an incident is drift discovered at the worst possible time.</p>
</div>
</details>

<details class="cx" id="config-mgmt">
<summary>Configuration Management</summary>
<div class="cx-body">
<p>Ansible, Chef, and Puppet configure the inside of machines — packages, files, services — as opposed to provisioning the machines themselves. Ansible is agentless and runs over SSH, which is why it survived into a container-dominated world where the others largely did not.</p>
<p>Containers absorbed most of this job: if the image is immutable and complete, there is nothing left to configure at runtime. Configuration management remains relevant for <span class="k">the machines underneath</span> — bare metal, VMs, network appliances, and anything that cannot be thrown away and rebuilt.</p>
</div>
</details>

<details class="cx" id="gitops">
<summary>GitOps</summary>
<div class="cx-body">
<p>The git repository is the single source of truth for what should be running, and an in-cluster agent — Argo CD or Flux — continuously pulls and reconciles the cluster toward it. Deployment becomes a merge rather than a pipeline step that pushes.</p>
<p>Two properties follow. The cluster <span class="k">self-heals toward the declared state</span>, so a manual change is reverted automatically. And the audit trail is the git history, which answers "who changed what and when" without a separate system — valuable enough that regulated environments often adopt it for that alone.</p>
</div>
</details>

<p class="cx-group">Release strategies</p>

<details class="cx" id="rolling">
<summary>Rolling Updates</summary>
<div class="cx-body">
<p>Replace instances a few at a time, waiting for each batch to become healthy before continuing. The default in Kubernetes, and the cheapest safe option because it needs no extra capacity beyond the surge allowance.</p>
<p>Its weakness is that both versions serve traffic during the roll, so the new version must be <span class="k">backward compatible</span> with the old one's data and API contract. Rollback is another roll in the opposite direction, which is not instant — that is the argument for blue-green when speed of reversal matters.</p>
</div>
</details>

<details class="cx" id="blue-green">
<summary>Blue-Green Deployment</summary>
<div class="cx-body">
<p>Run two complete environments. Blue serves production; green receives the new version and is tested; then traffic switches at the load balancer. Rollback is switching back, which takes seconds.</p>
<p>The cost is double the infrastructure during the cutover, and the complication is <span class="k">anything with state</span> — databases, caches, in-flight sessions do not switch cleanly with the traffic. Which is why schema changes are usually decoupled from deployments entirely and rolled out as separately compatible steps.</p>
</div>
</details>

<details class="cx" id="canary">
<summary>Canary Releases</summary>
<div class="cx-body">
<p>Send a small fraction of traffic — 1%, then 5%, then more — to the new version while watching error rates and latency, and abort if they degrade. It limits the blast radius of a bad release to the fraction exposed.</p>
<p>What makes a canary work is not the traffic split but <span class="k">the automated decision to abort</span>. A canary nobody is monitoring is just a slow deployment. The subtlety is that low-frequency failures need a large enough sample or a long enough soak to show up at all.</p>
</div>
</details>

<details class="cx" id="feature-flags">
<summary>Feature Flags</summary>
<div class="cx-body">
<p>A runtime switch that decouples deploying code from releasing behaviour. Code ships dark, is enabled for internal users, then a percentage, then everyone — and is turned off instantly if something is wrong, without a deployment.</p>
<p>They are the fastest rollback mechanism available and they accumulate debt relentlessly. <span class="k">Every flag is a branch in the runtime</span>, and the number of possible states doubles with each one, so flags need removal dates and someone accountable for deleting them once a rollout is complete.</p>
</div>
</details>

<p class="cx-group">Observability</p>

<details class="cx" id="three-pillars">
<summary>Logs, Metrics and Traces</summary>
<div class="cx-body">
<p>Three signals answering different questions. <span class="k">Metrics</span> are cheap numeric aggregates over time — is something wrong. <span class="k">Logs</span> are discrete events with detail — what exactly happened. <span class="k">Traces</span> follow one request across services — where the time went.</p>
<p>Cost profiles differ sharply: metrics are cheap and bounded, logs are expensive at volume, traces are usually sampled. The distinction that matters is <span class="k">monitoring versus observability</span> — monitoring answers questions you knew to ask in advance, observability lets you ask new ones about a failure nobody anticipated.</p>
</div>
</details>

<details class="cx" id="golden-signals">
<summary>Golden Signals &amp; Dashboards</summary>
<div class="cx-body">
<p>Four signals cover most of what a service needs: latency, traffic, errors, and saturation. Start there rather than instrumenting everything, because a dashboard with sixty panels is one nobody reads during an incident.</p>
<p>Report latency as <span class="k">percentiles, not averages</span> — a mean hides the tail that users actually experience, and averaging percentiles across instances is mathematically meaningless. Dashboards earn their place by being useful at 3am, which is a much higher bar than being comprehensive.</p>
</div>
</details>

<details class="cx" id="slo">
<summary>SLI, SLO and Error Budgets</summary>
<div class="cx-body">
<p>An <span class="k">SLI</span> is a measured indicator, such as the proportion of requests served under 300 ms. An <span class="k">SLO</span> is the target for it — 99.9% over 30 days. The gap between the target and 100% is the <span class="k">error budget</span>: the amount of failure you have agreed is acceptable.</p>
<p>The budget is what makes the framework useful, because it converts reliability from an argument into arithmetic. Budget remaining means you can ship aggressively; budget exhausted means reliability work takes priority. It also makes explicit that <span class="k">100% is the wrong target</span> — the cost curve goes vertical, and users cannot tell the difference through their own network.</p>
</div>
</details>

<details class="cx" id="alerting">
<summary>Alerting &amp; On-Call</summary>
<div class="cx-body">
<p>An alert should mean a human needs to act now. Anything else belongs on a dashboard or in a ticket. The standard that works is <span class="k">alert on symptoms, not causes</span> — page when users are affected, not when CPU is high, because high CPU is often fine and users being affected never is.</p>
<p><span class="k">Alert fatigue</span> is the dominant failure mode and it is a design problem, not a discipline problem: an on-call rotation that fires forty times a night trains people to acknowledge without reading. Every page should be reviewed afterwards for whether it was actionable, and the unactionable ones deleted.</p>
</div>
</details>

<details class="cx" id="incidents">
<summary>Incident Response &amp; Postmortems</summary>
<div class="cx-body">
<p>During an incident, roles beat heroics: someone commands, someone communicates, someone investigates. <span class="k">Mitigate before diagnosing</span> — roll back, fail over, shed load — because understanding the cause is a slower path to restoring service than reversing the change.</p>
<p>Afterwards, a <span class="k">blameless postmortem</span> asks how the system allowed the failure rather than who caused it. This is not politeness; it is the only way to get accurate information, since people who expect blame report less. The output is a small number of tracked actions — a postmortem with twenty action items and no owners produces nothing.</p>
</div>
</details>

<p class="cx-group">Reliability and scale</p>

<details class="cx" id="load-balancing">
<summary>Load Balancing &amp; Health Checks</summary>
<div class="cx-body">
<p>Distributing traffic across instances, at layer 4 on connections or layer 7 on requests. Layer 7 costs more and buys routing on path, header, or weight, which is what canary deployments and A/B routing depend on.</p>
<p>Health checks decide who receives traffic, and the distinction worth getting right is <span class="k">liveness versus readiness</span>: liveness failing means restart me, readiness failing means stop sending traffic but leave me alone. Conflating them produces restart loops during a slow dependency outage, turning a degradation into an outage.</p>
</div>
</details>

<details class="cx" id="autoscaling">
<summary>Autoscaling</summary>
<div class="cx-body">
<p>Adding and removing capacity against a signal — CPU, request rate, or queue depth. Horizontal scaling adds instances; vertical scaling makes them bigger and eventually hits a ceiling.</p>
<p>The practical problems are timing. Scaling reacts <span class="k">after</span> load arrives, so a slow start-up means you are always behind a spike — which is why pre-warming and predictive scaling exist for known traffic patterns. Scale-in needs to be more conservative than scale-out, or you get flapping, and queue depth is usually a better signal than CPU because it measures the backlog directly.</p>
</div>
</details>

<details class="cx" id="resilience">
<summary>Timeouts, Retries and Circuit Breakers</summary>
<div class="cx-body">
<p>Every network call needs a timeout, because the default is to wait forever and one slow dependency will then exhaust your connection pool. Retries need <span class="k">exponential backoff with jitter</span> — synchronised retries from many clients turn a brief blip into a stampede that keeps the dependency down.</p>
<p>A <span class="k">circuit breaker</span> stops calling a failing dependency entirely for a period, failing fast instead of queuing, then probes to see if it has recovered. Together with bulkheads — isolating resource pools per dependency — this is what stops one failure cascading into the whole system.</p>
</div>
</details>

<details class="cx" id="chaos">
<summary>Chaos Engineering</summary>
<div class="cx-body">
<p>Deliberately injecting failure — killing instances, adding latency, partitioning networks — to verify that the resilience you designed actually works. The premise is that untested failover is not failover, it is an assumption.</p>
<p>It only makes sense once you have observability good enough to see what happens and a blast radius you can contain. Start in staging with a hypothesis, do it during working hours with everyone watching, and <span class="k">have the abort ready first</span>.</p>
</div>
</details>

<p class="cx-group">Security in the pipeline</p>

<details class="cx" id="secrets">
<summary>Secrets Management</summary>
<div class="cx-body">
<p>Credentials belong in a dedicated store — Vault, AWS Secrets Manager, or the cloud equivalent — injected at runtime, never in the repository or the image. Committed secrets are permanent: git history keeps them after deletion, so the only real remedy is rotation.</p>
<p>The more durable answer is to <span class="k">avoid long-lived credentials entirely</span> using workload identity, where a service assumes a role and receives short-lived tokens automatically. A secret that expires in an hour is a much smaller problem than one that never does.</p>
</div>
</details>

<details class="cx" id="least-privilege">
<summary>Least Privilege</summary>
<div class="cx-body">
<p>Every identity — human, service, pipeline — gets the narrowest set of permissions that lets it do its job, and no more. It is the control that limits how far a compromise or a mistake can travel.</p>
<p>It erodes by default, because broad permissions are the fast way to unblock someone at 5pm and nobody narrows them afterwards. The counters are <span class="k">time-bound elevation</span> rather than standing access, and periodic review of what permissions are actually being exercised versus merely granted.</p>
</div>
</details>

<details class="cx" id="supply-chain">
<summary>Supply Chain Security</summary>
<div class="cx-body">
<p>Most of what you ship is somebody else's code. That makes dependencies an attack surface: typosquatted packages, compromised maintainer accounts, and malicious updates to legitimate libraries are all real and all observed in the wild.</p>
<p>The controls are lockfiles so builds are reproducible, an <span class="k">SBOM</span> recording what is actually in an artefact, automated scanning of dependencies and images, and signing so you can verify an artefact came from your pipeline. The SBOM matters most on the day a CVE lands, when the first question is simply which of your systems contain the affected version.</p>
</div>
</details>

<details class="cx" id="devsecops">
<summary>Shift Left &amp; DevSecOps</summary>
<div class="cx-body">
<p>Moving checks earlier in the cycle — static analysis, dependency scanning, IaC policy checks, and tests running on every commit rather than in a review before release. A defect caught in the editor costs a fraction of the same defect caught in production.</p>
<p>The failure mode is <span class="k">gates that everyone learns to bypass</span>: a scanner producing hundreds of findings, mostly noise, gets waived as a matter of routine. Fewer checks that block reliably beat comprehensive checks that are habitually overridden, which makes tuning the signal the actual work.</p>
</div>
</details>
