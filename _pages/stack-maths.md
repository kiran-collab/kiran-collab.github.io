---
title: "Maths for AI Stack"
permalink: /stacks/maths/
layout: single
author_profile: true
---

{% include stack-style.html %}

<style>
.m {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .86rem;
  color: #5d3f7a; background: #f7f4fa; border-left: 3px solid #cbbcd9;
  padding: .45em .75em; border-radius: 0 3px 3px 0; margin: .1em 0 .7em;
  overflow-x: auto; white-space: nowrap;
}
.cx-body .use {
  font-size: .88rem; color: #3f5a37; background: #f1f7ee;
  border-left: 3px solid #4a6741; padding: .45em .75em; border-radius: 0 3px 3px 0; margin: .1em 0 0;
}
.skipbox {
  border: 1px solid #e0e6ea; border-left: 3px solid #b0b6bd; background: #fafbfb;
  padding: .7em 1em; border-radius: 0 4px 4px 0; margin: .8em 0 1.6em; font-size: .89rem; color: #6b7480;
}
.planbox {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .9em 1.15em; border-radius: 0 4px 4px 0; margin: 1.4em 0; font-size: .92rem; color: #55504a;
}
.planbox ul { margin: .5em 0 0 1.1em; padding: 0; }
.planbox li { margin-bottom: .35em; }
</style>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">The mathematics that actually appears in AI work, with the AI use attached to every concept. Written for someone who already has the maths and needs the map — if you cannot name where a concept shows up, it does not belong in a compressed study plan.</p>

<p class="stack-hint">Click any concept to expand it. The final group is the set of derivations worth being able to do on a whiteboard, which is a better test of readiness than any reading.</p>

<div class="planbox">
<b>A one-day pass.</b> Enough to build a working map and answer most interview questions — not enough for fluency, and the gap shows under follow-ups.
<ul>
<li><b>Morning, ~4h</b> — linear algebra, then calculus. Backpropagation needs both.</li>
<li><b>Afternoon, ~3.5h</b> — probability, then statistics, which is applied probability.</li>
<li><b>Evening, ~1.5h</b> — the eight derivations, written by hand. This is where you find out what you actually know.</li>
<li><b>Only two hours?</b> Chain rule, SVD, Bayes with base rates, MLE → cross-entropy, and derivations 2 and 5.</li>
</ul>
</div>

<p class="cx-group">Linear algebra</p>

<details class="cx" id="dot-product">
<summary>Vectors &amp; the Dot Product</summary>
<div class="cx-body">
<p>The dot product multiplies two vectors elementwise and sums the result, giving a single number that measures alignment. Divide by the two magnitudes and you get cosine similarity, which measures direction alone and ignores length.</p>
<p class="m">a · b = Σ aᵢbᵢ = ‖a‖‖b‖cos θ &nbsp;&nbsp;|&nbsp;&nbsp; cos(a,b) = (a·b)/(‖a‖‖b‖)</p>
<p class="use"><b>In AI:</b> every embedding comparison, retrieval ranking, and attention score is a dot product. Normalise the vectors and cosine similarity <em>is</em> the dot product, which is why embeddings are stored normalised.</p>
</div>
</details>

<details class="cx" id="matmul">
<summary>Matrix Multiplication as Composition</summary>
<div class="cx-body">
<p>A matrix is a linear map. Multiplying matrices composes those maps, which is why the operation is associative but not commutative — applying a rotation then a scaling is not the same as the reverse.</p>
<p class="m">y = Wx + b &nbsp;&nbsp;|&nbsp;&nbsp; (AB)x = A(Bx)</p>
<p class="use"><b>In AI:</b> every dense layer is exactly this. It also explains why stacked linear layers without a non-linearity collapse into a single linear layer — composing linear maps gives a linear map, so depth buys nothing.</p>
</div>
</details>

<details class="cx" id="shapes">
<summary>Shapes &amp; Broadcasting</summary>
<div class="cx-body">
<p>Batched computation means everything carries a leading batch dimension, and broadcasting silently expands mismatched dimensions of size 1 to fit. Convenient, and the source of bugs that run without error while computing the wrong thing.</p>
<p class="m">[B, d] @ [d, k] → [B, k] &nbsp;&nbsp;|&nbsp;&nbsp; [B, 1] + [1, k] → [B, k]</p>
<p class="use"><b>In AI:</b> most practical debugging is shape debugging. Writing the expected shape beside each line, and using <code>einsum</code> where indices get confusing, prevents more errors than any amount of theory.</p>
</div>
</details>

<details class="cx" id="norms">
<summary>Norms</summary>
<div class="cx-body">
<p>A norm measures the size of a vector. L2 is Euclidean length and is smooth everywhere; L1 is the sum of absolute values and has a corner at zero, which is precisely why it produces sparsity.</p>
<p class="m">‖x‖₁ = Σ|xᵢ| &nbsp;&nbsp; ‖x‖₂ = √(Σxᵢ²) &nbsp;&nbsp; ‖x‖∞ = max|xᵢ|</p>
<p class="use"><b>In AI:</b> L2 penalty is weight decay, L1 is Lasso and drives coefficients to exactly zero, and gradient clipping rescales when the gradient norm exceeds a threshold. The sparsity difference between L1 and L2 is a standard question, and the geometric answer — the corner of the L1 ball meets the loss contour on an axis — is the one to give.</p>
</div>
</details>

<details class="cx" id="rank">
<summary>Rank &amp; Linear Independence</summary>
<div class="cx-body">
<p>Rank is the number of genuinely independent directions a matrix spans. A rank-deficient matrix has columns that are combinations of others, so it carries less information than its shape suggests.</p>
<p class="m">rank(AB) ≤ min(rank A, rank B)</p>
<p class="use"><b>In AI:</b> collinear features make a regression's coefficients unstable and uninterpretable. More importantly, rank is why <span class="k">LoRA</span> works: a weight update turns out to be well-approximated by a low-rank product BA, so you train a fraction of the parameters and lose almost nothing.</p>
</div>
</details>

<details class="cx" id="eigen">
<summary>Eigenvalues &amp; Eigenvectors</summary>
<div class="cx-body">
<p>An eigenvector is a direction the matrix only stretches, never rotates; the eigenvalue is the stretch factor. They expose the intrinsic axes of a transformation.</p>
<p class="m">Av = λv</p>
<p class="use"><b>In AI:</b> PCA is the eigendecomposition of the covariance matrix, with eigenvalues giving variance explained per component. Eigenvalue magnitude also governs stability — repeated multiplication by a matrix with eigenvalues above 1 explodes and below 1 vanishes, which is the exploding and vanishing gradient problem in recurrent networks.</p>
</div>
</details>

<details class="cx" id="svd">
<summary>Singular Value Decomposition</summary>
<div class="cx-body">
<p>Every matrix, square or not, factors into a rotation, a scaling, and another rotation. The singular values in Σ are ordered by importance, so truncating after k of them gives the best possible rank-k approximation.</p>
<p class="m">A = UΣVᵀ &nbsp;&nbsp;|&nbsp;&nbsp; Aₖ = UₖΣₖVₖᵀ is the optimal rank-k approximation</p>
<p class="use"><b>In AI:</b> the most useful single result in applied linear algebra. It gives PCA without forming the covariance matrix, low-rank compression of weight matrices, the pseudo-inverse for least squares, latent semantic analysis, and the condition number σ_max/σ_min that tells you how numerically fragile a problem is.</p>
</div>
</details>

<details class="cx" id="psd">
<summary>Positive Semi-Definiteness</summary>
<div class="cx-body">
<p>A symmetric matrix is positive semi-definite when xᵀAx ≥ 0 for every x — equivalently, when all its eigenvalues are non-negative. It is the matrix analogue of "non-negative".</p>
<p class="m">xᵀAx ≥ 0 ∀x &nbsp;⟺&nbsp; all λᵢ ≥ 0</p>
<p class="use"><b>In AI:</b> covariance matrices are PSD by construction, valid kernels must be PSD (Mercer's condition), and a function is convex exactly when its Hessian is PSD everywhere — which is the link between this concept and knowing whether an optimisation problem is easy.</p>
</div>
</details>

<details class="cx" id="orthogonality">
<summary>Orthogonality</summary>
<div class="cx-body">
<p>Orthogonal vectors have zero dot product; an orthogonal matrix has orthonormal columns, so it rotates or reflects without changing lengths. Its inverse is its transpose, which makes it cheap and numerically stable.</p>
<p class="m">QᵀQ = I &nbsp;⟹&nbsp; Q⁻¹ = Qᵀ, ‖Qx‖ = ‖x‖</p>
<p class="use"><b>In AI:</b> PCA components are orthogonal, which is what makes them independently interpretable. Orthogonal weight initialisation preserves gradient norm through depth, and the length-preserving property is why orthogonal transforms do not amplify numerical error.</p>
</div>
</details>

<details class="cx" id="trace-det">
<summary>Trace &amp; Determinant</summary>
<div class="cx-body">
<p>The trace is the sum of the diagonal, and equals the sum of eigenvalues. The determinant is the product of eigenvalues and measures how a transformation scales volume — zero determinant means the map collapses a dimension and cannot be inverted.</p>
<p class="m">tr(A) = Σλᵢ &nbsp;&nbsp; det(A) = Πλᵢ &nbsp;&nbsp; tr(AB) = tr(BA)</p>
<p class="use"><b>In AI:</b> the log-determinant of the Jacobian is the correction term in normalising flows, which is why those architectures are designed to make it cheap to compute. The cyclic property of trace is a workhorse in matrix-calculus derivations.</p>
</div>
</details>

<div class="skipbox"><b>Safe to skip:</b> computing inverses and determinants by hand, Gaussian elimination as a manual procedure, Jordan normal form, and the axiomatic definition of a vector space. None of it appears in practice or in interviews.</div>

<p class="cx-group">Calculus and optimisation</p>

<details class="cx" id="gradient">
<summary>The Gradient</summary>
<div class="cx-body">
<p>The vector of partial derivatives, pointing in the direction of steepest increase, with magnitude equal to the rate of change in that direction. Training moves against it.</p>
<p class="m">∇f = [∂f/∂x₁, …, ∂f/∂xₙ]ᵀ</p>
<p class="use"><b>In AI:</b> the entire optimisation story. A gradient of zero means a stationary point — which may be a minimum, a maximum, or a saddle, and in high dimensions is overwhelmingly likely to be a saddle.</p>
</div>
</details>

<details class="cx" id="chain-rule">
<summary>The Chain Rule</summary>
<div class="cx-body">
<p>The derivative of a composition is the product of the derivatives along the chain. For a deep network, that product runs backwards from the loss through every layer.</p>
<p class="m">∂L/∂w = (∂L/∂y)(∂y/∂z)(∂z/∂w)</p>
<p class="use"><b>In AI:</b> <span class="k">backpropagation is the chain rule and nothing more</span> — applied efficiently by caching each layer's intermediate result instead of recomputing it. It also explains vanishing gradients directly: multiply many factors below 1 and the product goes to zero.</p>
</div>
</details>

<details class="cx" id="jacobian-hessian">
<summary>Jacobian &amp; Hessian</summary>
<div class="cx-body">
<p>The Jacobian is the matrix of first partials for a vector-valued function; the Hessian is the matrix of second partials for a scalar one, describing curvature.</p>
<p class="m">J_ij = ∂fᵢ/∂xⱼ &nbsp;&nbsp; H_ij = ∂²f/∂xᵢ∂xⱼ</p>
<p class="use"><b>In AI:</b> the Jacobian appears in normalising flows and in adversarial-robustness analysis. The Hessian is why second-order methods converge faster — and why they are rarely used, since it is n×n in the number of parameters. Adam is best understood as a cheap diagonal approximation to curvature.</p>
</div>
</details>

<details class="cx" id="gradient-descent">
<summary>Gradient Descent</summary>
<div class="cx-body">
<p>Step against the gradient, repeatedly. The learning rate sets the step size: too large and it diverges, too small and it crawls or stalls in a flat region.</p>
<p class="m">w ← w − α∇L(w)</p>
<p class="use"><b>In AI:</b> stochastic gradient descent estimates the gradient from a mini-batch, which is noisier and vastly cheaper — and the noise itself helps escape saddle points. Momentum accumulates a moving average of past gradients to damp oscillation across steep, narrow valleys.</p>
</div>
</details>

<details class="cx" id="convexity">
<summary>Convexity &amp; Saddle Points</summary>
<div class="cx-body">
<p>A convex function has one minimum and any local optimum is global. Neural network losses are not convex, so in principle optimisation could stall anywhere.</p>
<p class="m">convex ⟺ Hessian PSD everywhere</p>
<p class="use"><b>In AI:</b> the useful modern result is that <span class="k">in high dimensions saddle points, not local minima, are the obstacle</span> — for a point to be a local minimum every one of thousands of eigenvalues must be positive, which is vanishingly unlikely. Saying this correctly is a good interview signal, because the folk explanation of "getting stuck in local minima" is wrong.</p>
</div>
</details>

<details class="cx" id="taylor">
<summary>Taylor Expansion</summary>
<div class="cx-body">
<p>Approximating a function near a point by its derivatives — first order gives the tangent line, second order adds curvature.</p>
<p class="m">f(x+Δ) ≈ f(x) + ∇f·Δ + ½ΔᵀHΔ</p>
<p class="use"><b>In AI:</b> gradient descent is optimisation of the first-order approximation; Newton's method uses the second-order one, which is why it takes better steps at much greater cost. It also underlies most convergence analysis and quadratic-penalty arguments.</p>
</div>
</details>

<details class="cx" id="lagrange">
<summary>Lagrange Multipliers &amp; KKT</summary>
<div class="cx-body">
<p>To optimise subject to constraints, add a multiplier per constraint and optimise the combined Lagrangian. The multiplier is the shadow price — how much the objective improves per unit of relaxed constraint. KKT conditions extend this to inequalities.</p>
<p class="m">L(x, λ) = f(x) + λg(x)</p>
<p class="use"><b>In AI:</b> the SVM dual comes from here, and so does the equivalence between a penalty and a constraint — ridge regression as an L2 penalty and as an explicit norm constraint are the same problem. It is also the bridge into linear and convex programming.</p>
</div>
</details>

<details class="cx" id="autodiff">
<summary>Automatic Differentiation</summary>
<div class="cx-body">
<p>Not symbolic differentiation and not finite differences — autodiff applies the chain rule to the actual sequence of primitive operations, giving exact derivatives at machine precision.</p>
<p class="m">reverse mode: one backward pass for all n parameter gradients</p>
<p class="use"><b>In AI:</b> reverse mode is used because the loss is a single scalar and the parameters are many — cost is proportional to outputs, not inputs. Forward mode is the opposite and suits few inputs, many outputs. This asymmetry is why every deep learning framework is built around a backward pass.</p>
</div>
</details>

<details class="cx" id="logexp">
<summary>Log, Exp &amp; Numerical Stability</summary>
<div class="cx-body">
<p>Logs turn products into sums and exponentials overflow quickly — <code>exp(1000)</code> is infinity in floating point. The log-sum-exp trick subtracts the maximum before exponentiating, which leaves the result unchanged and keeps every intermediate finite.</p>
<p class="m">log Σ exp(xᵢ) = m + log Σ exp(xᵢ − m), &nbsp; m = max xᵢ</p>
<p class="use"><b>In AI:</b> this is why softmax and cross-entropy are fused into one operation in every framework, and why you pass logits rather than probabilities to the loss function. Log-likelihoods are summed rather than multiplied for the same reason.</p>
</div>
</details>

<div class="skipbox"><b>Safe to skip:</b> integration techniques, series convergence tests, ε-δ proofs, and most multivariable integration. You need the concept of an expectation as an integral, not the machinery for evaluating one.</div>

<p class="cx-group">Probability</p>

<details class="cx" id="random-variables">
<summary>Random Variables &amp; Distributions</summary>
<div class="cx-body">
<p>A random variable maps outcomes to numbers. Discrete ones have a probability mass function, continuous ones a density — where the density at a point is not a probability, only its integral over an interval is.</p>
<p class="m">Σ P(x) = 1 &nbsp;&nbsp;|&nbsp;&nbsp; ∫ p(x)dx = 1</p>
<p class="use"><b>In AI:</b> a model output is a distribution, not a number — a classifier emits a categorical distribution, a regressor implicitly a Gaussian. Recognising that reframes training as fitting distributions.</p>
</div>
</details>

<details class="cx" id="expectation">
<summary>Expectation, Variance, Covariance</summary>
<div class="cx-body">
<p>Expectation is the probability-weighted average; variance is the expected squared deviation from it; covariance is the joint version for two variables. Expectation is linear whether or not the variables are independent, which is used constantly.</p>
<p class="m">E[X] = Σ xP(x) &nbsp; Var(X) = E[X²] − E[X]² &nbsp; E[aX+bY] = aE[X]+bE[Y]</p>
<p class="use"><b>In AI:</b> every loss function is an expectation estimated by a sample average over the batch. Covariance matrices are the object PCA decomposes, and the linearity of expectation is what makes mini-batch gradients unbiased estimates of the full gradient.</p>
</div>
</details>

<details class="cx" id="bayes">
<summary>Bayes' Rule &amp; Base Rates</summary>
<div class="cx-body">
<p>Bayes inverts a conditional probability, combining a prior with the likelihood of the evidence. The denominator normalises over all hypotheses.</p>
<p class="m">P(A|B) = P(B|A)P(A) / P(B)</p>
<p class="use"><b>In AI:</b> the standard interview question is a 99% accurate test for a condition affecting 1 in 10,000 — the answer is under 1%, because the enormous healthy population produces far more false positives than the rare true ones. The general lesson carries directly into rare-event detection: a strong classifier can still generate mostly false alarms.</p>
</div>
</details>

<details class="cx" id="independence">
<summary>Independence vs Conditional Independence</summary>
<div class="cx-body">
<p>Independence means knowing one tells you nothing about the other. Conditional independence means that holds once a third variable is fixed — a weaker and far more useful assumption.</p>
<p class="m">P(A,B) = P(A)P(B) &nbsp;&nbsp;|&nbsp;&nbsp; P(A,B|C) = P(A|C)P(B|C)</p>
<p class="use"><b>In AI:</b> naive Bayes assumes features are conditionally independent given the class, which is usually false and works anyway because the decision only needs the ranking to be right. Graphical models are entirely built out of conditional independence statements.</p>
</div>
</details>

<details class="cx" id="distributions">
<summary>The Distributions Worth Knowing</summary>
<div class="cx-body">
<p>Six cover most of what you meet. <span class="k">Bernoulli</span> for one binary trial and <span class="k">Binomial</span> for n of them; <span class="k">Categorical</span> for one-of-k; <span class="k">Gaussian</span> wherever many small effects add; <span class="k">Poisson</span> for counts in a fixed interval; <span class="k">Exponential</span> for waiting times; <span class="k">Beta</span> and <span class="k">Dirichlet</span> as priors over probabilities.</p>
<p class="m">Beta is conjugate to Bernoulli · Dirichlet to Categorical</p>
<p class="use"><b>In AI:</b> the output layer's distribution determines the loss — sigmoid with Bernoulli gives binary cross-entropy, softmax with Categorical gives cross-entropy, and a Gaussian assumption gives MSE. Conjugacy is what makes Bayesian updates closed-form, as in Thompson sampling for bandits.</p>
</div>
</details>

<details class="cx" id="joint-marginal">
<summary>Joint, Marginal, Conditional</summary>
<div class="cx-body">
<p>The joint distribution covers all variables at once; marginalising sums or integrates a variable out; conditioning fixes one and renormalises.</p>
<p class="m">P(x) = Σ_z P(x,z) &nbsp;&nbsp; P(x|z) = P(x,z)/P(z)</p>
<p class="use"><b>In AI:</b> latent variable models are defined by a joint over observed and hidden variables, and the quantity you want — the marginal likelihood of the data — requires integrating the latent out. That integral is usually intractable, which is the entire reason variational inference and the ELBO exist.</p>
</div>
</details>

<details class="cx" id="mle">
<summary>Likelihood, MLE and MAP</summary>
<div class="cx-body">
<p>Likelihood is the probability of the observed data as a function of the parameters — the same expression as a probability, read in the other direction. MLE picks the parameters maximising it; MAP adds a prior.</p>
<p class="m">θ_MLE = argmax Σ log p(xᵢ|θ) &nbsp;&nbsp; θ_MAP = argmax [log p(x|θ) + log p(θ)]</p>
<p class="use"><b>In AI:</b> the unifying idea behind most loss functions. Minimising cross-entropy <em>is</em> maximum likelihood for a categorical model; minimising MSE <em>is</em> maximum likelihood under Gaussian noise; and a Gaussian prior in MAP <em>is</em> L2 regularisation. Being able to state those three equivalences is worth more than memorising the losses.</p>
</div>
</details>

<details class="cx" id="entropy">
<summary>Entropy &amp; Cross-Entropy</summary>
<div class="cx-body">
<p>Entropy measures the average surprise in a distribution — maximal when uniform, zero when certain. Cross-entropy measures the cost of encoding samples from p using a code built for q.</p>
<p class="m">H(p) = −Σ p log p &nbsp;&nbsp; H(p,q) = −Σ p log q</p>
<p class="use"><b>In AI:</b> the classification loss. Because the true distribution is one-hot, cross-entropy collapses to −log of the probability assigned to the correct class, so confident and wrong is punished sharply. Entropy also appears as an exploration bonus in reinforcement learning and as a measure of prediction uncertainty.</p>
</div>
</details>

<details class="cx" id="kl">
<summary>KL Divergence</summary>
<div class="cx-body">
<p>The extra cost of using q when the truth is p — cross-entropy minus entropy. It is always non-negative, zero only when the distributions match, and <span class="k">not symmetric</span>, so it is not a distance.</p>
<p class="m">KL(p‖q) = Σ p log(p/q) = H(p,q) − H(p)</p>
<p class="use"><b>In AI:</b> the regulariser in a VAE pulling the posterior toward the prior, the constraint keeping a fine-tuned policy near its reference model in RLHF and DPO, the objective in distillation, and a drift-detection statistic. The asymmetry matters in practice: forward KL spreads mass to cover everything, reverse KL concentrates on one mode.</p>
</div>
</details>

<details class="cx" id="jensen">
<summary>Jensen's Inequality &amp; the ELBO</summary>
<div class="cx-body">
<p>For a concave function, the function of an average is at least the average of the function. Applying it to a log of an expectation produces a lower bound.</p>
<p class="m">log E[X] ≥ E[log X] &nbsp;⟹&nbsp; log p(x) ≥ E_q[log p(x,z) − log q(z)]</p>
<p class="use"><b>In AI:</b> this single step is where the evidence lower bound comes from. The intractable marginal likelihood is replaced by a bound you can optimise, and the gap between them is exactly the KL between the approximate and true posterior — which is why tightening the bound improves the approximation.</p>
</div>
</details>

<details class="cx" id="monte-carlo">
<summary>Monte Carlo &amp; the Reparameterisation Trick</summary>
<div class="cx-body">
<p>Estimate an expectation by averaging samples; error falls as 1/√n regardless of dimension, which is why sampling beats numerical integration in high dimensions. But sampling is not differentiable, so gradients cannot flow through it.</p>
<p class="m">z = μ + σ⊙ε, &nbsp; ε ~ N(0, I)</p>
<p class="use"><b>In AI:</b> the reparameterisation trick moves the randomness into a fixed noise source, leaving μ and σ as ordinary differentiable inputs. It is what makes VAEs trainable by backpropagation, and the same idea appears in dropout and in stochastic policies.</p>
</div>
</details>

<details class="cx" id="bias-variance">
<summary>Bias-Variance Decomposition</summary>
<div class="cx-body">
<p>Expected squared error splits into three parts: bias from the model being too simple, variance from sensitivity to the particular training sample, and irreducible noise you cannot remove.</p>
<p class="m">E[(y − ŷ)²] = Bias² + Variance + σ²</p>
<p class="use"><b>In AI:</b> the diagnostic that tells you which lever to pull. High training error means bias, so add capacity or features; low training and high validation error means variance, so add data or regularisation. It also explains ensembles — bagging reduces variance, boosting reduces bias.</p>
</div>
</details>

<details class="cx" id="lln-clt">
<summary>Law of Large Numbers &amp; CLT</summary>
<div class="cx-body">
<p>The sample mean converges to the true mean as n grows, and its distribution approaches a Gaussian regardless of the underlying distribution's shape — provided variance is finite.</p>
<p class="m">SE = σ/√n</p>
<p class="use"><b>In AI:</b> the justification for estimating anything from a sample, including mini-batch gradients and evaluation metrics. The √n also sets expectations: quadrupling your evaluation set halves the uncertainty, which is why small test sets produce numbers that move for no reason.</p>
</div>
</details>

<div class="skipbox"><b>Safe to skip:</b> measure theory and σ-algebras, moment generating functions, and formal convergence proofs. Know what the results say and when they fail, not how they are proved.</div>

<p class="cx-group">Statistics</p>

<details class="cx" id="estimators">
<summary>Estimators — Bias, Variance, Consistency</summary>
<div class="cx-body">
<p>An estimator is a recipe for computing a parameter from data. It is unbiased if it is right on average, low-variance if it is stable across samples, and consistent if it converges to the truth as n grows.</p>
<p class="m">Bias(θ̂) = E[θ̂] − θ</p>
<p class="use"><b>In AI:</b> the frame for evaluating any measurement you report. Note that unbiased is not automatically better — a slightly biased estimator with much lower variance often gives smaller total error, which is exactly the argument for regularisation.</p>
</div>
</details>

<details class="cx" id="standard-error">
<summary>Standard Error vs Standard Deviation</summary>
<div class="cx-body">
<p>Standard deviation describes the spread of the data and does not shrink with more data. Standard error describes the uncertainty in an estimate and shrinks as 1/√n. They are different quantities and are constantly confused.</p>
<p class="m">SD: spread of x &nbsp;&nbsp;|&nbsp;&nbsp; SE = SD/√n: uncertainty in x̄</p>
<p class="use"><b>In AI:</b> error bars on a metric should be standard errors. Quoting a standard deviation as if it were uncertainty in the mean overstates it dramatically, and this comes up whenever someone asks whether two model results actually differ.</p>
</div>
</details>

<details class="cx" id="confidence-intervals-m">
<summary>Confidence Intervals</summary>
<div class="cx-body">
<p>A 95% confidence interval is constructed so that, over repeated sampling, 95% of such intervals contain the true value. The randomness is in the interval, not in the parameter.</p>
<p class="m">x̄ ± 1.96 · SE &nbsp;(large-sample, approximately)</p>
<p class="use"><b>In AI:</b> report intervals rather than point estimates for any metric that will inform a decision. The width tells you what the experiment could have detected — an interval spanning everything the team cares about means the result is uninformative, not negative.</p>
</div>
</details>

<details class="cx" id="hypothesis-testing-m">
<summary>Hypothesis Testing &amp; p-values</summary>
<div class="cx-body">
<p>A p-value is the probability of seeing data at least this extreme <em>if the null hypothesis were true</em>. It is not the probability the null is true, and not the probability your result is a fluke.</p>
<p class="m">p = P(data this extreme | H₀ true)</p>
<p class="use"><b>In AI:</b> the standard for judging an A/B test. The mis-statement is so common that stating it correctly is itself a signal. Type I error is a false positive at rate α; Type II is a missed real effect.</p>
</div>
</details>

<details class="cx" id="power">
<summary>Statistical Power</summary>
<div class="cx-body">
<p>The probability of detecting an effect of a given size if it is genuinely there. It depends on the effect size, the variance, and the sample size — and required sample scales with the inverse square of the effect you want to detect.</p>
<p class="m">Power = 1 − β &nbsp;&nbsp;|&nbsp;&nbsp; n ∝ σ²/δ²</p>
<p class="use"><b>In AI:</b> compute this <em>before</em> running the experiment. Halving the detectable effect quadruples the sample needed, and if the traffic does not exist the honest conclusion is that the test cannot be run at that sensitivity — not that you run it and report a null.</p>
</div>
</details>

<details class="cx" id="effect-size">
<summary>Effect Size vs Significance</summary>
<div class="cx-body">
<p>Significance says an effect is probably not zero. Effect size says whether it is large enough to matter. With enough data, trivially small differences become significant.</p>
<p class="m">Cohen's d = (x̄₁ − x̄₂)/s_pooled</p>
<p class="use"><b>In AI:</b> report the size of the improvement and its interval, not just that p &lt; 0.05. A statistically significant 0.1% lift that costs a rewrite is a decision to decline, and conflating the two is how teams ship work that does not pay for itself.</p>
</div>
</details>

<details class="cx" id="multiple-comparisons">
<summary>Multiple Comparisons</summary>
<div class="cx-body">
<p>Test twenty independent hypotheses at α = 0.05 and you expect one false positive by chance alone. Checking many metrics, segments, or model variants is exactly this situation.</p>
<p class="m">P(at least one false positive) = 1 − (1−α)ᵐ</p>
<p class="use"><b>In AI:</b> the reason a dashboard of thirty metrics always shows a "win" somewhere. Bonferroni is the blunt correction, false discovery rate the more practical one — and pre-registering the primary metric before looking is better than any correction afterwards.</p>
</div>
</details>

<details class="cx" id="ab-design">
<summary>A/B Test Design</summary>
<div class="cx-body">
<p>Randomise at the right unit — usually the user, not the request, or a single user sees both variants and the arms contaminate. Fix the sample size and duration in advance, and cover full weekly cycles.</p>
<p class="m">randomisation unit ≥ unit of the decision</p>
<p class="use"><b>In AI:</b> the failure modes are peeking, which inflates false positives because you stop when it looks good; novelty effects that fade; and network interference where treated users affect control users. Guardrail metrics catch the harm the primary metric hides.</p>
</div>
</details>

<details class="cx" id="bootstrap">
<summary>Bootstrap &amp; Permutation Tests</summary>
<div class="cx-body">
<p>Resample the data with replacement, recompute the statistic thousands of times, and read the uncertainty off the resulting spread. Permutation tests shuffle labels to build a null distribution directly.</p>
<p class="m">CI = 2.5th to 97.5th percentile of the bootstrap statistic</p>
<p class="use"><b>In AI:</b> the practical answer for any metric with no closed-form standard error — AUC, median latency, ranking metrics. It assumes almost nothing, costs only compute, and is badly underused relative to how often people give a metric with no uncertainty at all.</p>
</div>
</details>

<details class="cx" id="ols">
<summary>OLS &amp; Coefficient Interpretation</summary>
<div class="cx-body">
<p>Least squares fits by minimising squared residuals, with a closed-form solution. A coefficient means the expected change in y per unit of that x <em>holding the other included variables constant</em> — a phrase that carries the entire caveat.</p>
<p class="m">β̂ = (XᵀX)⁻¹Xᵀy</p>
<p class="use"><b>In AI:</b> the interpretable baseline, and the place where multicollinearity bites — correlated predictors make coefficients unstable and sign-flipping even when predictions are fine. Note that XᵀX is singular exactly when the features are linearly dependent, which links straight back to rank.</p>
</div>
</details>

<details class="cx" id="calibration-m">
<summary>Calibration</summary>
<div class="cx-body">
<p>A model is calibrated when its predicted probabilities match observed frequencies — of everything it scores 0.7, about 70% are positive. Discrimination and calibration are independent: a model can rank perfectly and still be badly calibrated.</p>
<p class="m">P(y=1 | p̂=q) = q for all q</p>
<p class="use"><b>In AI:</b> required whenever the number is consumed as a probability rather than a ranking — expected-value decisions, cost-based thresholds, or a human reading the score. Check with a reliability diagram; fix with Platt scaling or isotonic regression on held-out data.</p>
</div>
</details>

<details class="cx" id="confounding">
<summary>Confounding &amp; Simpson's Paradox</summary>
<div class="cx-body">
<p>A confounder influences both treatment and outcome, creating an association with no causal path behind it. Simpson's paradox is the extreme case: a trend present in every subgroup reverses when the groups are pooled.</p>
<p class="m">observed association = causal effect + confounding</p>
<p class="use"><b>In AI:</b> the reason "users of this feature retain better" almost never means the feature caused it — engaged users both adopt features and retain. Randomisation removes confounding by construction, which is why an A/B test answers a question that no amount of observational analysis can.</p>
</div>
</details>

<div class="skipbox"><b>Safe to skip:</b> t-table lookups, ANOVA minutiae, and the catalogue of named non-parametric tests. Bootstrap covers most of what they were invented for, with fewer assumptions.</div>

<p class="cx-group">The eight derivations</p>

<details class="cx" id="d1">
<summary>1 · Gradient of MSE</summary>
<div class="cx-body">
<p>Start from the loss for a linear model, differentiate with respect to the weights, and keep the chain rule visible.</p>
<p class="m">L = ½(ŷ−y)², ŷ = wᵀx &nbsp;⟹&nbsp; ∂L/∂w = (ŷ−y)·x</p>
<p class="use"><b>Why it matters:</b> the simplest case where the gradient is "error times input", a pattern that recurs throughout backpropagation. The ½ is there purely so the 2 cancels.</p>
</div>
</details>

<details class="cx" id="d2">
<summary>2 · Softmax + cross-entropy gradient</summary>
<div class="cx-body">
<p>Differentiate cross-entropy with respect to the <em>logits</em>, not the probabilities. The softmax Jacobian is messy on its own and almost everything cancels.</p>
<p class="m">∂L/∂z = p − y</p>
<p class="use"><b>Why it matters:</b> the single most elegant result in the list, and the most asked. The gradient is just predicted minus actual — which is why frameworks fuse softmax and cross-entropy into one operation, and why you pass logits to the loss.</p>
</div>
</details>

<details class="cx" id="d3">
<summary>3 · Backprop through a two-layer network</summary>
<div class="cx-body">
<p>Forward: z₁ = W₁x, a₁ = σ(z₁), z₂ = W₂a₁. Then apply the chain rule backwards, writing each intermediate explicitly.</p>
<p class="m">δ₂ = ∂L/∂z₂ &nbsp; ∂L/∂W₂ = δ₂a₁ᵀ &nbsp; δ₁ = (W₂ᵀδ₂)⊙σ′(z₁) &nbsp; ∂L/∂W₁ = δ₁xᵀ</p>
<p class="use"><b>Why it matters:</b> doing this once by hand makes backpropagation permanently unmysterious, and it shows exactly where vanishing gradients enter — through the repeated σ′ factor.</p>
</div>
</details>

<details class="cx" id="d4">
<summary>4 · PCA via eigendecomposition and SVD</summary>
<div class="cx-body">
<p>Centre the data, form the covariance matrix, and take its eigenvectors as the components. Then show the SVD route gives the same answer without forming the covariance at all.</p>
<p class="m">C = XᵀX/(n−1) = VΛVᵀ &nbsp;&nbsp;|&nbsp;&nbsp; X = UΣVᵀ ⟹ λᵢ = σᵢ²/(n−1)</p>
<p class="use"><b>Why it matters:</b> connects eigendecomposition, SVD, and covariance in one derivation, and explains why the SVD route is preferred numerically — squaring the matrix squares its condition number.</p>
</div>
</details>

<details class="cx" id="d5">
<summary>5 · Bayes with a low base rate</summary>
<div class="cx-body">
<p>A 99% accurate test, a condition affecting 1 in 10,000. Work it in counts rather than symbols — a population of a million makes it immediate.</p>
<p class="m">100 true positives ≈ 99 detected · 999,900 healthy → ~9,999 false positives · P ≈ 99/10,098 &lt; 1%</p>
<p class="use"><b>Why it matters:</b> the most frequently asked probability question in interviews, and the intuition behind why a strong rare-event classifier still produces mostly false alarms.</p>
</div>
</details>

<details class="cx" id="d6">
<summary>6 · The log-sum-exp trick</summary>
<div class="cx-body">
<p>Show that subtracting the maximum before exponentiating leaves the result algebraically identical while keeping every exponential at most 1.</p>
<p class="m">log Σexp(xᵢ) = m + log Σexp(xᵢ−m), &nbsp; m = max xᵢ</p>
<p class="use"><b>Why it matters:</b> explains a real implementation detail you will meet in every framework, and demonstrates that you think about numerics rather than only about mathematics.</p>
</div>
</details>

<details class="cx" id="d7">
<summary>7 · The reparameterisation trick</summary>
<div class="cx-body">
<p>Show why ∂/∂μ of a sample from N(μ, σ²) is undefined as written, then rewrite the sample so the randomness sits in a parameter-free term.</p>
<p class="m">z ~ N(μ,σ²) &nbsp;→&nbsp; z = μ + σε, ε ~ N(0,1) &nbsp;⟹&nbsp; ∂z/∂μ = 1</p>
<p class="use"><b>Why it matters:</b> a small algebraic move with an outsized consequence — it is what made variational inference trainable by backpropagation, and it is the standard VAE question.</p>
</div>
</details>

<details class="cx" id="d8">
<summary>8 · Bias-variance decomposition</summary>
<div class="cx-body">
<p>Expand the expected squared error, add and subtract the expected prediction, and show the cross terms vanish.</p>
<p class="m">E[(y−ŷ)²] = (E[ŷ]−f)² + E[(ŷ−E[ŷ])²] + σ²</p>
<p class="use"><b>Why it matters:</b> turns a piece of vocabulary into something you can actually use for diagnosis, and the cancelling cross term is a good test of whether you are comfortable manipulating expectations.</p>
</div>
</details>

<p style="margin-top:2.4em;font-size:.9rem;color:#7a8189">Related: <a href="/stacks/ml/">ML Stack</a> for the models this maths underpins, <a href="/stacks/data-science/">Data Science Stack</a> for the applied statistics, and <a href="/interview-rounds/#ml">Interview Rounds</a> for how these come up in questions.</p>
