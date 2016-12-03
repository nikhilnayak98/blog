---
layout: post
title:  "How do you train a neural network?"
date:   2016-12-03 19:34:57
categories: coffeecup,nicks
---
A neural network is a simple mechanism that’s implemented with basic math. The only difference between the traditional programming and neural network is, again, that you let the computer determine the parameters by learning from training datasets.

In this post, I won’t discuss in detail how you can train the parameters with algorithms such as backpropagation and gradient descent. Suffice it to say that the computer tries to increase or decrease each parameter a little bit to see how it reduces the error compared with training dataset, in hopes of finding the optimal combination of parameters.

![Neural Networks](images/posts/neuralnetworks.png)

Think of the computer as a student or junior worker. In the beginning, the computer makes many mistakes and it takes some time before it finds a practical way of solving real-world problems (including possible future problems) and minimizes the errors (so called generalization).
