---
title: "API Stack"
permalink: /stacks/api/
layout: single
author_profile: true
---

{% include stack-style.html %}

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">How services expose and consume each other — the transports, the identity layer, and the reliability concerns that decide whether an interface survives real traffic and years of change.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">Protocols and transports</p>

<details class="cx" id="rest">
<summary>REST</summary>
<div class="cx-body">
<p>REST models an API as resources addressed by URL and manipulated with standard HTTP verbs — <code>GET</code> to read, <code>POST</code> to create, <code>PUT</code>/<code>PATCH</code> to update, <code>DELETE</code> to remove — with status codes carrying the outcome.</p>
<p>Its durability comes from using the web's existing semantics rather than inventing new ones: caching, proxies, and status handling all work without special support. The common failure is <span class="k">treating REST as "JSON over HTTP"</span> and losing the properties that made it worth choosing.</p>
</div>
</details>

<details class="cx" id="graphql">
<summary>GraphQL</summary>
<div class="cx-body">
<p>GraphQL exposes a single endpoint backed by a typed schema, and lets the client specify exactly which fields it wants in one request. It solves over-fetching and the "three round trips to render one screen" problem that REST invites.</p>
<p>The costs land on the server. Caching is harder without per-URL granularity, an arbitrarily deep query can be expensive, and resolver design decides whether a page load is one database query or a hundred. <span class="k">Query depth limits and cost analysis are not optional</span> on a public GraphQL API.</p>
</div>
</details>

<details class="cx" id="grpc">
<summary>gRPC</summary>
<div class="cx-body">
<p>gRPC uses Protocol Buffers over HTTP/2 for binary, strongly-typed remote calls, with client and server code generated from a shared <code>.proto</code> definition. It supports streaming in both directions.</p>
<p>It is the usual choice for internal service-to-service traffic where both ends are yours: the payloads are compact, the contract is enforced at compile time, and the performance is materially better than JSON. It is a poor fit for public browser-facing APIs, where reach and debuggability matter more than efficiency.</p>
</div>
</details>

<details class="cx" id="websockets">
<summary>WebSockets</summary>
<div class="cx-body">
<p>A WebSocket upgrades an HTTP connection into a persistent, bidirectional channel, so the server can push data without the client polling for it. It is the natural transport for live updates, collaborative editing, and streaming model output token by token.</p>
<p>The trade is statefulness. A long-lived connection has to be tracked, reconnected, authenticated at open, and load-balanced with affinity — all things stateless HTTP gave you for free.</p>
</div>
</details>

<details class="cx" id="webhooks">
<summary>Webhooks</summary>
<div class="cx-body">
<p>A webhook inverts the direction of integration: instead of you polling a provider for changes, the provider POSTs to a URL you register when something happens. It removes the latency and waste of polling.</p>
<p>Receiving them correctly requires more care than sending. You must <span class="k">verify the signature</span> (or anyone can forge events), tolerate duplicates, and not assume ordering — most providers guarantee at-least-once delivery and nothing about sequence.</p>
</div>
</details>

<details class="cx" id="openapi">
<summary>OpenAPI &amp; Schemas</summary>
<div class="cx-body">
<p>OpenAPI is a machine-readable description of an HTTP API — endpoints, parameters, request and response shapes, error codes. From it you can generate documentation, client SDKs, mock servers, and contract tests.</p>
<p>The real value is that the schema becomes the <span class="k">single source of truth</span>. Hand-written docs drift from the implementation within weeks; a generated client cannot, because it is derived from the same definition the server validates against.</p>
</div>
</details>

<p class="cx-group">Identity and access</p>

<details class="cx" id="authentication">
<summary>Authentication</summary>
<div class="cx-body">
<p>Authentication answers <span class="k">who is calling</span> — verifying identity through credentials, tokens, or a federated provider before any decision about permissions is made.</p>
<p>Most real-world failures are not in the verification itself but around it: tokens with no expiry, secrets in logs or URLs, sessions that never invalidate on password change. Getting lifetime and storage right is most of the work.</p>
</div>
</details>

<details class="cx" id="authorization">
<summary>Authorization</summary>
<div class="cx-body">
<p>Authorization answers <span class="k">what this identity may do</span> — enforced per request, per resource, usually through role-based or attribute-based policy.</p>
<p>Two rules cover most breaches. Enforce it server-side at every entry point, because client-side checks are advisory. And check ownership, not just role: a valid user requesting <em>another</em> user's record is the classic broken-access-control bug, and it passes authentication cleanly.</p>
</div>
</details>

<details class="cx" id="oauth">
<summary>OAuth 2.0</summary>
<div class="cx-body">
<p>OAuth lets a user grant an application scoped, revocable access to their data on another service without handing over their password. The application receives a token limited to specific permissions, and the user can revoke it independently.</p>
<p>It is an <em>authorization</em> framework, not an authentication one — a distinction that has caused real vulnerabilities. OpenID Connect is the layer added on top when what you actually want is "prove who this user is", which is what single sign-on relies on.</p>
</div>
</details>

<details class="cx" id="api-keys">
<summary>API Keys</summary>
<div class="cx-body">
<p>An API key is a bearer credential identifying a calling application rather than a user. Whoever holds it can use it, which makes it simple to issue and simple to leak.</p>
<p>Because possession is authorisation, the operational requirements are scoping, rotation, and a fast revocation path. <span class="k">A leaked key is a standing grant until someone revokes it</span> — and keys committed to repositories are among the most reliably exploited credentials in existence.</p>
</div>
</details>

<p class="cx-group">Reliability at scale</p>

<details class="cx" id="rate-limiting">
<summary>Rate Limiting</summary>
<div class="cx-body">
<p>Rate limiting caps how many requests a client may make in a window, protecting the service from overload, abuse, and a single misbehaving integration consuming everyone's capacity.</p>
<p>Good implementations are informative rather than merely restrictive: return <code>429</code> with a <code>Retry-After</code> header and remaining-quota headers, so a well-behaved client can back off correctly instead of hammering and being throttled harder.</p>
</div>
</details>

<details class="cx" id="idempotency">
<summary>Idempotency</summary>
<div class="cx-body">
<p>An operation is idempotent when performing it twice has the same effect as performing it once. <code>GET</code> and <code>DELETE</code> are naturally idempotent; <code>POST</code> is not, which is where the trouble lives.</p>
<p>Networks make this unavoidable rather than theoretical: a timed-out request may have succeeded. Without an <span class="k">idempotency key</span> derived from the logical action, the retry that follows creates a second order or a second charge — a correctness bug, not a performance one.</p>
</div>
</details>

<details class="cx" id="retries">
<summary>Retries &amp; Backoff</summary>
<div class="cx-body">
<p>Retries handle transient failure — a dropped connection, a brief 503. Done naively they cause the outage they were meant to survive, as every client retries in unison against a struggling service.</p>
<p>The correct shape is exponential backoff with jitter, a bounded attempt count, and retrying <em>only</em> what is safe to repeat. Retrying a non-idempotent write is not resilience; it is duplication.</p>
</div>
</details>

<details class="cx" id="caching">
<summary>Caching &amp; ETags</summary>
<div class="cx-body">
<p>HTTP caching lets responses be reused rather than recomputed. <code>Cache-Control</code> states how long a response stays fresh; an <code>ETag</code> is a version identifier a client can send back to ask "has this changed?" and receive a cheap <code>304 Not Modified</code>.</p>
<p>The fastest request is the one never made, and the second fastest returns no body. Correct cache headers routinely deliver more improvement than optimising the handler behind them.</p>
</div>
</details>

<details class="cx" id="gateways">
<summary>Gateways &amp; Load Balancing</summary>
<div class="cx-body">
<p>An API gateway is the single front door: it terminates TLS, authenticates, applies rate limits, routes to the right service, and emits consistent logs and metrics. A load balancer distributes traffic across instances behind it.</p>
<p>Concentrating cross-cutting concerns here means individual services stop reimplementing authentication and throttling — at the cost of a component that must itself be highly available, since everything depends on it.</p>
</div>
</details>

<p class="cx-group">Contract and evolution</p>

<details class="cx" id="pagination">
<summary>Pagination</summary>
<div class="cx-body">
<p>Pagination returns large collections in bounded pages. Offset-based paging (<code>?page=3</code>) is simple but skips or repeats rows when the underlying data changes between requests. Cursor-based paging encodes a stable position and does not.</p>
<p>Any endpoint returning a collection needs it from day one. <span class="k">Adding pagination later is a breaking change</span>, and the endpoint that was fine at a thousand rows is an incident at a million.</p>
</div>
</details>

<details class="cx" id="versioning">
<summary>Versioning</summary>
<div class="cx-body">
<p>Versioning lets an API change without breaking existing consumers — through the path (<code>/v2/</code>), a header, or a dated version identifier. The point is that clients you cannot deploy for keep working.</p>
<p>The discipline is knowing what actually breaks. Adding an optional field is safe; removing one, renaming it, tightening validation, or changing a default is not. A deprecation policy with a real timeline matters more than the versioning scheme you pick.</p>
</div>
</details>

<details class="cx" id="errors">
<summary>Error Handling &amp; Status Codes</summary>
<div class="cx-body">
<p>Errors are part of the interface. The status code carries the category — <code>4xx</code> for "you sent something wrong", <code>5xx</code> for "we failed" — and the body should say precisely what went wrong and whether retrying could help.</p>
<p>Two failure modes are common and both are expensive. Returning <code>200</code> with an error inside the payload defeats every piece of tooling that reads status codes. Returning a bare <code>400</code> with no detail turns every integration bug into a support ticket.</p>
</div>
</details>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>
