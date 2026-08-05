---
title: "ML Stack"
permalink: /stacks/ml/
layout: single
author_profile: true
---

{% include stack-style.html %}

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">Models and the machinery that trains them — classical algorithms first, then neural architectures, then the losses, optimizers, and regularization that make any of them learn.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">Classical models</p>

<details class="cx" id="linear-regression">
<summary>Linear Regression</summary>
<div class="cx-body">
<p>Linear regression fits a weighted sum of the inputs to predict a continuous outcome, choosing weights that minimise squared error. It is the simplest useful model and the one everything else is judged against.</p>
<p>Its value is interpretability: each coefficient states how much the outcome moves per unit of that input. Always fit it first — if a sophisticated model cannot beat it by a margin that justifies the complexity, the sophisticated model is not worth deploying.</p>
</div>
</details>

<details class="cx" id="logistic-regression">
<summary>Logistic Regression</summary>
<div class="cx-body">
<p>Despite the name, logistic regression is a classifier. It passes a linear combination of inputs through a sigmoid to produce a probability between 0 and 1, and is trained with cross-entropy loss.</p>
<p>It remains the default baseline for binary classification because it is fast, calibrated, and interpretable in terms of odds — and because a surprising number of production classification problems are adequately solved by it.</p>
</div>
</details>

<details class="cx" id="decision-trees">
<summary>Decision Trees</summary>
<div class="cx-body">
<p>A decision tree splits the data by asking a sequence of threshold questions, choosing each split to maximise purity in the resulting groups. The path from root to leaf is a readable rule.</p>
<p>Trees need no feature scaling, handle mixed data types, and capture interactions automatically. Left unconstrained they also <span class="k">overfit badly</span> — a deep enough tree memorises the training set perfectly and generalises poorly, which is precisely the weakness ensembles were invented to fix.</p>
</div>
</details>

<details class="cx" id="random-forest">
<summary>Random Forest</summary>
<div class="cx-body">
<p>A random forest trains many trees on bootstrapped samples, each considering a random subset of features at every split, and averages their predictions.</p>
<p>The double randomisation is the point: it <span class="k">decorrelates the trees</span>, so their individual errors cancel rather than compound. The result is far more robust than a single tree, needs little tuning, and is often the strongest model you can get with almost no effort.</p>
</div>
</details>

<details class="cx" id="gradient-boosting">
<summary>Gradient Boosting</summary>
<div class="cx-body">
<p>Boosting builds trees sequentially, each fitted to the errors the ensemble has made so far, so the model improves where it is currently weakest. XGBoost, LightGBM, and CatBoost are the standard implementations.</p>
<p>It is the strongest general-purpose approach for tabular data and wins most competitions on it. The trade against random forests is tuning: because trees are fitted to residuals, learning rate and depth matter, and it will overfit if pushed too far.</p>
</div>
</details>

<details class="cx" id="svm">
<summary>Support Vector Machines</summary>
<div class="cx-body">
<p>An SVM finds the decision boundary with the widest margin between classes, determined only by the closest points — the support vectors. The kernel trick lets it fit non-linear boundaries by working implicitly in a higher-dimensional space.</p>
<p>SVMs excel when dimensionality is high relative to sample count, which made them the method of choice for text classification before deep learning. They scale poorly to very large datasets, since training cost grows steeply with the number of examples.</p>
</div>
</details>

<details class="cx" id="knn">
<summary>k-Nearest Neighbours</summary>
<div class="cx-body">
<p>k-NN classifies a point by majority vote among its k closest training examples. There is no training phase — the model is the dataset — so all the cost is at prediction time.</p>
<p>It is a useful mental model as much as an algorithm: it makes explicit that "similar inputs have similar outputs" is the assumption underneath most supervised learning. It degrades in high dimensions, where distances lose their meaning.</p>
</div>
</details>

<details class="cx" id="kmeans">
<summary>k-Means Clustering</summary>
<div class="cx-body">
<p>k-Means partitions unlabelled data into k groups by alternating between assigning points to the nearest centroid and recomputing centroids from their members.</p>
<p>Two caveats matter in practice. You must choose k in advance, and the result depends on initialisation. It also assumes roughly spherical, similarly-sized clusters — on elongated or nested structure it produces confident, meaningless groups.</p>
</div>
</details>

<details class="cx" id="pca">
<summary>PCA</summary>
<div class="cx-body">
<p>Principal Component Analysis finds the orthogonal directions of greatest variance and re-expresses the data along them, so most of the information is captured in fewer dimensions.</p>
<p>It is used to compress, to visualise high-dimensional data in two dimensions, and to decorrelate inputs. The cost is interpretability: components are linear combinations of the originals and usually correspond to nothing you can name.</p>
</div>
</details>

<p class="cx-group">Neural architectures</p>

<details class="cx" id="mlp">
<summary>MLP</summary>
<div class="cx-body">
<p>A multilayer perceptron stacks fully connected layers separated by non-linear activations. Without the non-linearity the whole stack collapses to a single linear map, which is why activations are structural rather than decorative.</p>
<p>With enough width an MLP can approximate any continuous function — the universal approximation result — though that says nothing about whether you can <em>train</em> it to. It is the baseline neural architecture and a component inside almost every larger one.</p>
</div>
</details>

<details class="cx" id="dnn">
<summary>DNN</summary>
<div class="cx-body">
<p>"Deep neural network" describes depth rather than a specific architecture: many layers, each transforming the previous representation, so features compose from simple to abstract with depth.</p>
<p>Depth is what makes representation learning work — early layers find edges or n-grams, later ones find objects or meaning. It also created the problems that define modern training: vanishing gradients, the need for normalisation, and the residual connections that made very deep networks trainable at all.</p>
</div>
</details>

<details class="cx" id="cnn">
<summary>CNN</summary>
<div class="cx-body">
<p>Convolutional networks slide small learned filters across the input, so the same feature detector applies everywhere. Pooling then reduces spatial resolution while retaining what was found.</p>
<p>Two properties explain their dominance in vision: <span class="k">weight sharing</span> makes them far more parameter-efficient than a fully connected layer on the same image, and <span class="k">translation invariance</span> means a cat is recognised wherever it appears. They apply to any grid-structured data, including audio spectrograms.</p>
</div>
</details>

<details class="cx" id="rnn">
<summary>RNN</summary>
<div class="cx-body">
<p>A recurrent network processes a sequence one step at a time, carrying a hidden state forward so earlier inputs can influence later outputs. It handles variable-length sequences naturally.</p>
<p>The limitation that defined a decade of research is the vanishing gradient: signal propagated back through many steps shrinks toward zero, so plain RNNs cannot learn long-range dependencies. Their sequential nature also prevents parallelisation across the sequence.</p>
</div>
</details>

<details class="cx" id="lstm">
<summary>LSTM</summary>
<div class="cx-body">
<p>An LSTM adds a cell state with input, forget, and output gates controlling what is written, retained, and read. Information can travel many steps largely unchanged.</p>
<p>The gates are a learned solution to the vanishing gradient problem — the network decides what to remember rather than decaying by default. LSTMs remain a sensible choice for moderate-length sequences and time series where a transformer's cost is not justified.</p>
</div>
</details>

<details class="cx" id="transformers">
<summary>Transformers</summary>
<div class="cx-body">
<p>Transformers replace recurrence with self-attention: every position attends directly to every other, weighting them by learned relevance. Position information is supplied explicitly, since attention itself is order-agnostic.</p>
<p>The breakthrough was as much practical as conceptual. Removing sequential dependency made training <span class="k">parallel across the sequence</span>, which is what allowed the scale that produced modern language, vision, and multimodal models. The cost is attention scaling quadratically with sequence length — the constraint most long-context research targets.</p>
</div>
</details>

<p class="cx-group">Training mechanics</p>

<details class="cx" id="loss-functions">
<summary>Loss Functions</summary>
<div class="cx-body">
<p>The loss function defines what "wrong" means numerically, and therefore what the model optimises for. Mean squared error for regression, cross-entropy for classification, and task-specific losses everywhere else.</p>
<p>It is the most consequential and most overlooked design choice in a model. <span class="k">The model will optimise exactly what you wrote down</span>, including the parts you did not intend — class imbalance ignored in the loss produces a model that ignores the minority class, and no amount of architecture fixes that.</p>
</div>
</details>

<details class="cx" id="backpropagation">
<summary>Backpropagation</summary>
<div class="cx-body">
<p>Backpropagation computes the gradient of the loss with respect to every parameter by applying the chain rule backwards through the network, reusing intermediate results so the cost is roughly that of a forward pass.</p>
<p>It is not a learning algorithm but the mechanism that makes one affordable: it answers "how should each weight change to reduce the error?" for millions of parameters at once. Every framework's autograd is an implementation of it.</p>
</div>
</details>

<details class="cx" id="optimizers">
<summary>Optimizers &amp; Gradient Descent</summary>
<div class="cx-body">
<p>Gradient descent moves parameters downhill along the gradient. Stochastic gradient descent estimates that gradient from mini-batches, and momentum, RMSProp, and Adam add per-parameter adaptation and smoothing on top.</p>
<p>The learning rate is the hyperparameter that matters most: too high and training diverges, too low and it crawls or lodges in a poor region. Adam is the reasonable default, and learning-rate schedules — warmup then decay — are standard for large models.</p>
</div>
</details>

<details class="cx" id="regularization">
<summary>Regularization</summary>
<div class="cx-body">
<p>Regularization constrains a model so it generalises rather than memorising the training set. L1 and L2 penalties shrink weights, dropout randomly disables units during training, early stopping halts before the model starts fitting noise, and data augmentation expands what the model has seen.</p>
<p>Each works by making it <span class="k">harder for the model to rely on any single spurious pattern</span>. L1 additionally drives weights to exactly zero, which performs feature selection as a side effect — useful when you want a sparse, interpretable model rather than just a well-behaved one.</p>
</div>
</details>

<details class="cx" id="bias-variance">
<summary>Bias–Variance Tradeoff</summary>
<div class="cx-body">
<p><span class="k">Bias</span> is error from a model too simple to capture the real pattern; <span class="k">variance</span> is error from a model so flexible it fits the noise in the training data. Underfitting and overfitting are the two symptoms, and they demand opposite corrections.</p>
<p>This is the first diagnosis to run when a model disappoints, and the comparison that gives the answer is training error versus validation error. Both high means underfitting — add capacity or better features. Training low and validation high means overfitting — add data or regularization. Reaching for the wrong remedy makes the problem worse, which is why the diagnosis comes before the fix.</p>
</div>
</details>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>
