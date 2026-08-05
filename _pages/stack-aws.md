---
title: "AWS Stack"
permalink: /stacks/aws/
layout: single
author_profile: true
---

{% include stack-style.html %}

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">The services you actually reach for, grouped by the job they do rather than by AWS's own catalogue. Weighted toward what matters for data and ML work — there are hundreds of services, and you need perhaps twenty of them.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">Foundations</p>

<details class="cx" id="regions-az">
<summary>Regions &amp; Availability Zones</summary>
<div class="cx-body">
<p>A <span class="k">region</span> is a geographic location (<code>us-east-1</code>, <code>eu-west-2</code>); an <span class="k">availability zone</span> is one or more discrete data centres within it, isolated in power and networking but connected by low-latency links.</p>
<p>This is the first architectural decision and it is hard to reverse. Region choice drives latency, price, data residency, and which services are even available. Spreading across AZs is how you survive a data-centre failure; spreading across regions is how you survive a regional one, and costs considerably more to do properly.</p>
</div>
</details>

<details class="cx" id="iam">
<summary>IAM</summary>
<div class="cx-body">
<p>IAM governs who can do what to which resource. Policies are JSON documents attached to users, groups, or roles, and a <span class="k">role</span> — an identity a service or user temporarily assumes — is the mechanism that lets workloads authenticate without stored credentials.</p>
<p>Two habits prevent most incidents. Grant least privilege and widen only when something breaks, rather than starting with <code>*</code> and intending to tighten later. And use roles instead of long-lived access keys wherever possible — <span class="k">the credential that cannot leak is the one that was never issued</span>.</p>
</div>
</details>

<details class="cx" id="vpc-aws">
<summary>VPC &amp; Networking</summary>
<div class="cx-body">
<p>A VPC is your private network inside AWS: subnets split by availability zone, route tables directing traffic, security groups acting as stateful per-resource firewalls, and NACLs as stateless subnet-level rules.</p>
<p>The pattern worth internalising is public and private subnets. Load balancers sit in public subnets with internet routes; databases and application servers sit in private ones and reach out through a NAT gateway. <span class="k">Nothing that holds data should be directly reachable from the internet</span>, and the VPC is where that is enforced structurally rather than by configuration on each host.</p>
</div>
</details>

<details class="cx" id="well-architected">
<summary>Well-Architected Framework</summary>
<div class="cx-body">
<p>AWS's own design framework, organised around six pillars: operational excellence, security, reliability, performance efficiency, cost optimisation, and sustainability. It comes with a structured review process for auditing a workload against each.</p>
<p>Treat it as a checklist rather than doctrine. Its practical value is surfacing the questions teams skip — what happens when this AZ fails, who is paged, what does this cost per request — early enough that the answers are still cheap to act on.</p>
</div>
</details>

<p class="cx-group">Containers and compute</p>

<details class="cx" id="containerization">
<summary>Containerization</summary>
<div class="cx-body">
<p>A container packages an application together with its dependencies, libraries, and runtime into an image that behaves the same wherever it runs. Unlike a virtual machine it <span class="k">shares the host kernel</span> rather than booting its own, which is why it starts in seconds and measures in megabytes rather than gigabytes.</p>
<p>On AWS this is the common currency of deployment: ECS, Fargate, EKS, Batch, SageMaker, and even Lambda all accept container images, so the same artefact moves between them. For ML work specifically it is the only reliable answer to CUDA, driver, and dependency drift — <span class="k">"works on my laptop" stops being a category of bug</span> once the laptop and the GPU cluster run the same image.</p>
<p>The caveat worth holding: kernel sharing means isolation is weaker than a VM's. For multi-tenant or untrusted code, a container boundary alone is not a security boundary.</p>
</div>
</details>

<details class="cx" id="docker-ecr">
<summary>Docker &amp; ECR</summary>
<div class="cx-body">
<p>Docker is the tooling that builds and runs containers. A <code>Dockerfile</code> declares the build step by step, each instruction producing a cached layer, and the resulting image is what you ship. <span class="k">ECR</span> is AWS's private registry — where those images live, with IAM controlling who can pull them, vulnerability scanning on push, and lifecycle policies to expire old ones.</p>
<p>Three habits separate a workable image from a painful one. Use <span class="k">multi-stage builds</span> so compilers and build dependencies stay out of the final image — the difference is routinely gigabytes. Order instructions so the slowest-changing layers come first, since a change invalidates every layer after it and turns a ten-second rebuild into ten minutes. And <span class="k">pin base images by digest or explicit version</span>, because <code>:latest</code> means your build is not reproducible and today's working image may not be tomorrow's.</p>
<p>On the AWS side, set an ECR lifecycle policy early. Untagged images accumulate silently from every CI run, and nobody notices until the storage line on the bill does something surprising.</p>
</div>
</details>

<details class="cx" id="ec2">
<summary>EC2</summary>
<div class="cx-body">
<p>Virtual machines you rent by the second, in instance families tuned for different profiles — compute-optimised, memory-optimised, GPU-accelerated, storage-optimised. It is the most general and most manual compute option.</p>
<p>Pricing model matters more than instance choice for cost. On-demand is flexible and expensive; reserved instances and savings plans cut it substantially for predictable load; <span class="k">spot instances run at a large discount but can be reclaimed with two minutes' notice</span> — which is fine for fault-tolerant training jobs and unacceptable for a database.</p>
</div>
</details>

<details class="cx" id="lambda">
<summary>Lambda</summary>
<div class="cx-body">
<p>Run a function in response to an event with no server to provision. It scales from zero to thousands of concurrent executions automatically and bills only for execution time.</p>
<p>The constraints define where it fits: a maximum execution duration, limited memory and ephemeral storage, and cold starts when a new environment initialises. Excellent for event handlers, glue between services, and bursty low-latency work — a poor fit for long-running training or anything needing a GPU.</p>
</div>
</details>

<details class="cx" id="ecs-fargate">
<summary>ECS &amp; Fargate</summary>
<div class="cx-body">
<p>ECS is AWS's container orchestrator. With the EC2 launch type you manage the underlying instances; with <span class="k">Fargate</span> you do not — you declare CPU and memory per task and AWS provisions the capacity.</p>
<p>Fargate is usually the right default for containerised services: no cluster to patch or scale, at a premium per unit of compute. Choose EC2-backed ECS when you need GPUs, specific instance types, or high enough steady utilisation that managing capacity pays for itself.</p>
</div>
</details>

<details class="cx" id="eks">
<summary>EKS</summary>
<div class="cx-body">
<p>Managed Kubernetes. AWS runs the control plane; you run workloads with standard Kubernetes manifests, tooling, and ecosystem.</p>
<p>The honest trade is portability and ecosystem against operational weight. Choose EKS when you already have Kubernetes expertise, need its ecosystem (Kubeflow, Argo, service meshes), or want workloads that could move to another cloud. If you have neither the expertise nor the requirement, ECS with Fargate does the same job with far less to learn.</p>
</div>
</details>

<p class="cx-group">Storage and databases</p>

<details class="cx" id="s3">
<summary>S3</summary>
<div class="cx-body">
<p>Object storage addressed by key within buckets — effectively unlimited capacity, very high durability, and the substrate under most data lakes. It stores objects, not a filesystem: there are no real directories, and you cannot append to an object in place.</p>
<p>Storage classes and lifecycle rules are where the cost control lives, moving cold data to cheaper tiers automatically. The other thing to get right is access: <span class="k">public buckets remain among the most common causes of data exposure</span>, and Block Public Access should stay on unless you have a deliberate reason.</p>
</div>
</details>

<details class="cx" id="ebs-efs">
<summary>EBS &amp; EFS</summary>
<div class="cx-body">
<p><span class="k">EBS</span> is a block volume attached to a single EC2 instance — effectively its disk, with configurable IOPS and throughput. <span class="k">EFS</span> is a managed NFS filesystem that many instances can mount simultaneously.</p>
<p>The choice is about sharing. One instance needing a fast local disk wants EBS; a fleet needing the same files — a shared dataset across training nodes, for example — wants EFS, at higher cost per gigabyte and higher latency.</p>
</div>
</details>

<details class="cx" id="rds">
<summary>RDS &amp; Aurora</summary>
<div class="cx-body">
<p>Managed relational databases — PostgreSQL, MySQL, and others — with backups, patching, replicas, and failover handled for you. Aurora is AWS's own engine, wire-compatible with PostgreSQL and MySQL, with storage that scales automatically.</p>
<p>Managed does not mean unmanaged: you still own schema design, indexing, connection pooling, and query performance. The failure mode people hit first is connection exhaustion — a serverless function scaling to hundreds of concurrent executions will open hundreds of database connections unless something like RDS Proxy sits in between.</p>
</div>
</details>

<details class="cx" id="dynamodb">
<summary>DynamoDB</summary>
<div class="cx-body">
<p>A managed key-value and document store offering single-digit millisecond reads at effectively unbounded scale, with no servers to size and no query planner to fight.</p>
<p>The catch is that <span class="k">access patterns must be designed in from the start</span>, through the partition and sort key. Unlike SQL, you cannot bolt on a new query shape later without a secondary index or a migration — DynamoDB rewards knowing your queries in advance and punishes exploratory workloads.</p>
</div>
</details>

<details class="cx" id="redshift">
<summary>Redshift</summary>
<div class="cx-body">
<p>A columnar data warehouse for analytical queries over large volumes — aggregations across billions of rows rather than single-row lookups. Column storage means a query touching three columns reads only those three.</p>
<p>Distribution and sort keys determine whether it performs. A poorly distributed table forces data across nodes on every join, and the same query can run orders of magnitude slower than a well-modelled equivalent.</p>
</div>
</details>

<p class="cx-group">Data and analytics</p>

<details class="cx" id="glue">
<summary>Glue</summary>
<div class="cx-body">
<p>Managed ETL built on Spark, plus a <span class="k">Data Catalog</span> that acts as a central metadata store — table definitions and schemas that Athena, Redshift Spectrum, and EMR all read from.</p>
<p>The catalog is frequently the more valuable half. It is what lets several engines query the same S3 data as tables without each maintaining its own view of what those tables are.</p>
</div>
</details>

<details class="cx" id="emr">
<summary>EMR</summary>
<div class="cx-body">
<p>Managed clusters for Spark, Hadoop, Presto, and friends. AWS handles provisioning and configuration; you submit jobs against data in S3.</p>
<p>It suits heavy distributed processing that outgrows a single machine — large joins, feature pipelines over terabytes, model training on Spark. Transient clusters that spin up for a job and terminate afterwards, especially on spot capacity, are usually the economical pattern.</p>
</div>
</details>

<details class="cx" id="athena">
<summary>Athena</summary>
<div class="cx-body">
<p>Serverless SQL directly over data in S3, using the Glue catalog for schema. No cluster, no loading step — point it at a prefix and query.</p>
<p>Billing is per byte scanned, which makes storage layout a cost decision rather than only a performance one. <span class="k">Partitioning and columnar formats like Parquet routinely cut both time and cost by an order of magnitude</span> versus raw CSV, because the engine can skip everything irrelevant.</p>
</div>
</details>

<p class="cx-group">Messaging and orchestration</p>

<details class="cx" id="sqs">
<summary>SQS</summary>
<div class="cx-body">
<p>A managed queue that decouples producers from consumers. Standard queues offer high throughput with at-least-once delivery and no ordering guarantee; FIFO queues preserve order within a message group and deduplicate.</p>
<p>Because standard delivery is at-least-once, <span class="k">consumers must be idempotent</span> — the same message will eventually arrive twice. Pair every queue with a dead-letter queue so poison messages stop blocking the pipeline and become visible instead.</p>
</div>
</details>

<details class="cx" id="sns">
<summary>SNS</summary>
<div class="cx-body">
<p>Publish/subscribe messaging: publish once to a topic and every subscriber receives a copy — queues, Lambda functions, HTTP endpoints, email.</p>
<p>The distinction from SQS is fan-out versus work distribution. SNS delivers the same message to <em>all</em> subscribers; SQS delivers each message to <em>one</em> consumer. The common pattern combines them — SNS topic fanning out into several SQS queues, so each downstream system gets its own durable buffer.</p>
</div>
</details>

<details class="cx" id="eventbridge">
<summary>EventBridge</summary>
<div class="cx-body">
<p>An event bus that routes events to targets based on content-matching rules, with built-in sources from AWS services and SaaS providers, plus a schema registry.</p>
<p>Where SNS routes by topic, EventBridge routes by <span class="k">what is inside the event</span> — allowing a single bus with rules like "orders over $1000 from EU customers go here". It is the natural backbone for event-driven architectures, and its scheduler also replaces cron for triggering periodic work.</p>
</div>
</details>

<details class="cx" id="step-functions">
<summary>Step Functions</summary>
<div class="cx-body">
<p>A managed state machine for coordinating multi-step workflows. You declare states, transitions, retries, error handling, and parallelism; AWS executes and tracks each run.</p>
<p>Its value is that <span class="k">orchestration logic stops living in a Lambda function that calls other Lambda functions</span>. Retries and failure paths become declarative and visible, and a failed run shows exactly which step broke and with what input — which is the difference between debugging a distributed workflow in minutes and in hours.</p>
</div>
</details>

<p class="cx-group">AI and ML</p>

<details class="cx" id="sagemaker">
<summary>SageMaker</summary>
<div class="cx-body">
<p>The end-to-end ML platform: managed notebooks, training jobs on ephemeral instances, hyperparameter tuning, a model registry, pipelines, and autoscaling inference endpoints.</p>
<p>The strongest argument for it is training economics — a training job provisions instances, runs, and tears them down, so you pay only for the run rather than for an idle GPU box. The cost is platform coupling: SageMaker-specific pipelines and endpoints do not port elsewhere without rework.</p>
</div>
</details>

<details class="cx" id="bedrock">
<summary>Bedrock</summary>
<div class="cx-body">
<p>Managed access to foundation models from several providers behind one API, with no infrastructure to run, plus supporting pieces for retrieval, agents, and guardrails.</p>
<p>The practical benefit is that the interface is shared: <span class="k">switching or A/B-testing models becomes a configuration change rather than an integration project</span>. It also keeps inference traffic inside your AWS account and IAM boundary, which is often what makes it viable where a third-party API is not.</p>
</div>
</details>

<p class="cx-group">Security and operations</p>

<details class="cx" id="kms-secrets">
<summary>KMS &amp; Secrets Manager</summary>
<div class="cx-body">
<p><span class="k">KMS</span> manages encryption keys and performs cryptographic operations, integrating with most services so encryption at rest is a configuration flag. <span class="k">Secrets Manager</span> stores credentials and can rotate them automatically.</p>
<p>Together they remove the two habits that cause credential incidents: keys handled by application code, and passwords living in environment variables or committed files. Retrieving a secret at runtime through an IAM role means <span class="k">there is no secret in the repository to leak</span>.</p>
</div>
</details>

<details class="cx" id="cloudwatch">
<summary>CloudWatch</summary>
<div class="cx-body">
<p>Metrics, logs, traces, dashboards, and alarms across AWS services and your own applications. Alarms trigger notifications or automated actions such as scaling.</p>
<p>Default metrics tell you about infrastructure; <span class="k">custom metrics tell you about your product</span>, and those are the ones worth alerting on. CPU utilisation rarely explains a bad user experience — p99 latency, error rate, and queue depth do. Log retention is also worth setting deliberately, since the default of "forever" becomes a meaningful line on the bill.</p>
</div>
</details>

<details class="cx" id="cloudformation-cdk">
<summary>CloudFormation &amp; CDK</summary>
<div class="cx-body">
<p>Infrastructure as code. CloudFormation declares resources in YAML or JSON templates; the <span class="k">CDK</span> lets you define the same infrastructure in a real programming language and synthesises the template for you.</p>
<p>The reason to bother is reproducibility and review. Infrastructure created by clicking through the console exists only in that account and in someone's memory; infrastructure in code can be diffed, reviewed, versioned, and recreated in a second region. Terraform solves the same problem across clouds and is often the better choice in a multi-cloud estate.</p>
</div>
</details>

<details class="cx" id="autoscaling-elb">
<summary>Auto Scaling &amp; Load Balancing</summary>
<div class="cx-body">
<p>An Application Load Balancer distributes traffic across healthy targets and removes failing ones; Auto Scaling adjusts capacity in response to demand or a schedule.</p>
<p>Together they deliver both elasticity and fault tolerance, but only if <span class="k">health checks are meaningful</span>. A check that confirms the process is listening will happily keep routing traffic to an instance whose database connection died. Health checks should exercise the path that actually matters, or they provide false confidence rather than protection.</p>
</div>
</details>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>
