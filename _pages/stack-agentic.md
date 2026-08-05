---
title: "Agentic Stack"
permalink: /stacks/agentic/
layout: single
author_profile: true
---

{% include stack-style.html %}

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">What an agent is actually made of, and what has to exist around it before one can run unattended against real systems. Roughly ordered from the core loop outward to the infrastructure it runs on.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">The core loop</p>

<details class="cx" id="agent">
<summary>Agent</summary>
<div class="cx-body">
<p>An agent is a model placed in a loop with the ability to act: it receives a goal, decides on an action, observes the result, and repeats until the goal is met or it gives up. The defining property is not intelligence but <span class="k">autonomy over control flow</span> — the model, rather than your code, decides what happens next.</p>
<p>That distinction is what separates an agent from a chatbot or a prompt chain. A chain runs a fixed sequence you authored; an agent chooses its sequence at runtime, which is why it can handle tasks you could not fully specify in advance — and also why it needs termination conditions, budgets, and guardrails that a chain does not.</p>
</div>
</details>

<details class="cx" id="loops">
<summary>Loops</summary>
<div class="cx-body">
<p>The agent loop is the cycle of <span class="k">reason → act → observe → repeat</span>. Everything else in the stack exists to make some part of that cycle work better: tools improve <em>act</em>, memory improves <em>reason</em>, observability lets you see it, and evals tell you whether it is getting anywhere.</p>
<p>The engineering questions are all about termination. When does the loop stop? What happens if it oscillates between two actions? What is the maximum number of iterations, or tokens, or dollars? An agent without an explicit answer to those does not fail loudly — it spins, and you find out from the bill.</p>
</div>
</details>

<details class="cx" id="workflows">
<summary>Workflows</summary>
<div class="cx-body">
<p>A workflow is the opposite end of the spectrum from an open agent loop: the control flow is fixed in code, and the model fills in specific steps. Retrieve, then summarise, then classify, then write — you decide the order, the model does the language work.</p>
<p>The practical rule is to <span class="k">use a workflow whenever you can specify the steps, and an agent only when you genuinely cannot</span>. Workflows are cheaper, faster, debuggable, and reproducible. Reaching for an agent when a workflow would do is the most common overengineering mistake in this space.</p>
</div>
</details>

<p class="cx-group">Capability and knowledge</p>

<details class="cx" id="tools">
<summary>Tools</summary>
<div class="cx-body">
<p>Tools are the functions an agent can call — search, query a database, send an email, run code. Each is declared with a name, a description, and a typed input schema, and the model emits a structured call that your code executes before returning the result into the loop.</p>
<p>Tool design is where most agent quality is won or lost. The description is not documentation for humans; it is <span class="k">the prompt that decides whether the tool gets called at the right moment</span>. Being prescriptive about <em>when</em> to call a tool matters more than describing what it does.</p>
</div>
</details>

<details class="cx" id="agentic-harness">
<summary>Agentic Harness</summary>
<div class="cx-body">
<p>The harness is everything around the model that turns it into an agent: the loop itself, message and context management, tool dispatch, permission checks, error handling, retries, and state between turns. When people compare agent frameworks, the harness is usually what they are actually comparing.</p>
<p>Harness quality determines behaviour far more than model choice on long tasks. A strong model in a weak harness loses context, repeats work, and fails to recover from a tool error; a well-built harness keeps the model oriented over hours of work.</p>
</div>
</details>

<details class="cx" id="skills">
<summary>Skills</summary>
<div class="cx-body">
<p>A skill is a packaged set of instructions and resources for a particular kind of task, loaded only when relevant. Rather than putting every procedure in the system prompt, each skill carries a short description that sits in context and a full body the agent reads when the task calls for it.</p>
<p>The mechanism is <span class="k">progressive disclosure</span>: keep the always-loaded context small, and pull in depth on demand. This is what lets one agent hold dozens of specialised procedures without paying for all of them on every request.</p>
</div>
</details>

<details class="cx" id="plugins">
<summary>Plugins</summary>
<div class="cx-body">
<p>Plugins package capability as an installable unit — bundling tools, prompts, and configuration so a user can add functionality to an agent without touching its code. Where a tool is one function, a plugin is a distributable bundle of them.</p>
<p>The value is ecosystem rather than technical: plugins let capability be authored, versioned, and shared by people who did not build the agent. The corresponding risk is supply chain — an installed plugin runs with the agent's permissions.</p>
</div>
</details>

<details class="cx" id="memory">
<summary>Memory</summary>
<div class="cx-body">
<p>Memory is state that survives beyond the current context window — facts about the user, decisions made earlier, lessons from past runs. Context is what the model can see right now; memory is what it can retrieve later, typically as files or records the agent reads and writes deliberately.</p>
<p>The hard problems are not storage but <span class="k">what to write down and when to read it back</span>. Too eager and memory fills with noise that pollutes future runs; too conservative and the agent relearns the same thing every session. Deciding what deserves to persist is a design decision, not a technical one.</p>
</div>
</details>

<details class="cx" id="agentic-search">
<summary>Agentic Search</summary>
<div class="cx-body">
<p>Agentic search replaces one-shot retrieval with an iterative process: the agent issues a query, reads the results, decides they are insufficient, reformulates, and searches again — possibly across different sources or modalities — until it has what it needs.</p>
<p>This matters because the first query is usually the worst one. In classic RAG the retriever gets a single attempt at an underspecified question; an agent can notice the results are off-topic and try a different angle, which is closer to how a person actually researches something.</p>
</div>
</details>

<details class="cx" id="mcp">
<summary>MCP — Model Context Protocol</summary>
<div class="cx-body">
<p>MCP is an open protocol standardising how agents connect to external tools, data, and prompts. A server exposes capabilities over a common interface; any compliant host can consume them, so one integration works across different agent products.</p>
<p>Before a standard existed, every agent–tool pair needed bespoke glue, and integrations multiplied as the product of both sets. MCP turns that into <span class="k">one server per capability, usable everywhere</span> — the same argument that made LSP worth adopting for editors and language tooling.</p>
</div>
</details>

<details class="cx" id="agent2agent">
<summary>Agent2Agent (A2A)</summary>
<div class="cx-body">
<p>A2A is an open protocol for agents built by different parties to discover each other's capabilities and delegate tasks across organisational boundaries. Agents advertise what they can do through signed capability descriptions, and exchange tasks and results over a common wire format.</p>
<p>The split with MCP is clean and worth holding onto: <span class="k">MCP governs an agent's access to tools; A2A governs agent-to-agent communication.</span> One is about reaching capability, the other about reaching peers.</p>
</div>
</details>

<p class="cx-group">Quality and operations</p>

<details class="cx" id="observability">
<summary>Observability</summary>
<div class="cx-body">
<p>Observability is the ability to answer questions about what an agent did and why, after the fact, without reproducing the run. For agents this means capturing every step — prompts, tool calls, results, token counts, latencies, costs — not just the final output.</p>
<p>It matters more here than in conventional software because behaviour is <span class="k">non-deterministic</span>. The same input can produce a different trajectory tomorrow, so you cannot rely on rerunning to investigate. If it was not recorded, the evidence is gone.</p>
</div>
</details>

<details class="cx" id="tracing">
<summary>Tracing</summary>
<div class="cx-body">
<p>A trace is the structured record of a single run, represented as nested spans: the top-level task, each model call within it, each tool invocation within those, with timings and payloads attached. It is the unit of debugging for agent systems.</p>
<p>Tracing is what makes a vague complaint actionable. "The agent gave a bad answer" becomes visible as a retrieval that returned nothing, a tool that errored and was silently retried, or a context that was truncated three steps before the answer was written.</p>
</div>
</details>

<details class="cx" id="evals">
<summary>Evals</summary>
<div class="cx-body">
<p>Evals are automated tests for probabilistic systems: a fixed set of inputs with expected properties, scored on every change, so you can tell whether a prompt edit, model swap, or retrieval tweak actually helped.</p>
<p>They are the single practice that most separates teams shipping confidently from teams shipping and hoping. Without evals, <span class="k">every change is a guess and every regression is discovered by users</span>. Vibes do not scale past a handful of examples, and a hand-check of five cases has no statistical power at all.</p>
</div>
</details>

<details class="cx" id="self-learning-loops">
<summary>Self-Learning Loops</summary>
<div class="cx-body">
<p>A self-learning loop closes the circuit between what an agent does and how it behaves next time: outcomes and corrections are captured, then fed back as updated memory, refined instructions, improved retrieval, or training data.</p>
<p>The signal usually already exists — users edit the agent's output, reject a suggestion, or escalate to a human — and is thrown away. Capturing it is the cheapest improvement available. The discipline is that <span class="k">a feedback loop without evaluation is a drift loop</span>: without a fixed benchmark, you cannot tell adaptation from degradation.</p>
</div>
</details>

<p class="cx-group">Runtime and isolation</p>

<details class="cx" id="agentic-runtime">
<summary>Agentic Runtime</summary>
<div class="cx-body">
<p>The runtime is the managed environment an agent executes in — provisioning compute, holding session state, enforcing permissions, brokering tool access, and surviving restarts. It is the difference between an agent script on your laptop and a service other people depend on.</p>
<p>The concerns are ordinary distributed-systems concerns wearing new clothes: where does state live, what happens on a crash mid-task, how are concurrent sessions isolated, and who is allowed to invoke what. Managed agent platforms exist mostly to take these off your plate.</p>
</div>
</details>

<details class="cx" id="agent-sandboxing">
<summary>Agent Sandboxing</summary>
<div class="cx-body">
<p>Sandboxing confines an agent's execution — filesystem, network, and process access — so that a mistake or a compromise has bounded consequences. Typically a container or VM per session, with an explicit allowlist for egress.</p>
<p>It is load-bearing rather than optional because an agent's instructions can come from data it reads. <span class="k">Prompt injection turns any untrusted document into potential instructions</span>, so the only durable defence is limiting what the agent is <em>able</em> to do, not just what it is told to do.</p>
</div>
</details>

<details class="cx" id="virtual-private-cloud">
<summary>Virtual Private Cloud (VPC)</summary>
<div class="cx-body">
<p>A VPC is a logically isolated network within a cloud provider, with private addressing and explicit control over what may enter or leave. Deploying an agent inside one means its traffic and data stay within a network boundary you define.</p>
<p>For agent systems this is usually a compliance requirement rather than a preference. If an agent touches regulated or customer data, "where does this data travel and who could observe it" has to have a concrete answer — and <span class="k">a VPC is how that answer gets enforced rather than promised</span>.</p>
</div>
</details>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>
