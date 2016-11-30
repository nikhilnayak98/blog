---
layout: page
title: Nikhil Nayak | 18 and Learning
---
<div class="col s12 m12 l4" id="fadeIn" style="opacity: 1;">

                <div class="card hoverable">
                    <div class="waves-effect waves-block waves-light">
                        <div class="center" style="padding-top: 20px;">
                            <img width="256px" height="256px" src="images/self_pic.jpg" class="circle responsive-img">
                        </div>
                    </div>
                    <div class="card-content center">
                        <span class="card-title activator center" style="color:rgba(0,0,0,0.7);"><strong>Nikhil Nayak</strong>
                         </span>
                        <p>Student</p>
                        <p>SOA University</p>
                        <p>Bhubaneswar, IN</p>
                    </div>
                    <div class="card-action center">
                <a target="_blank" href="https://github.com/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/github17.png"></a>
                <a target="_blank" href="mailto:nikhilnayak98@gmail.com?subject=Reply From Homepage&amp;body=Hi Nikhil,%0D">
                <img height="32" width="32" src="images/icons/png/gmail3.png"></a>
                <a target="_blank" href="https://in.linkedin.com/in/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/linkedin24.png"></a>
                    </div>
                </div>
</div>
<br>

## Hello!

I m a first year undergraduate student of Computer Science And Engineering Dept. at SOA University.

Automating my existence is what I strive for. I m interested in Machine Learning and AI the most. This is the sole reason for most of the coding and tinkering I do. The rest is for helping out friends, and sometimes just for fun :).

In my spare time you can find me building some or the other thing on the computer. I've done a lot of interesting projects over the past years. Head over to the blog section to check out my exploits.

Here's a little TensorFlow Python code that makes up some data in two dimensions, and then fits a line to it .

{% highlight python %}
import tensorflow as tf
import numpy as np

# Create 100 phony x, y data points in NumPy, y = x * 0.1 + 0.3
x_data = np.random.rand(100).astype(np.float32)
y_data = x_data * 0.1 + 0.3

# Try to find values for W and b that compute y_data = W * x_data + b
# (I know that W should be 0.1 and b 0.3, but TensorFlow will
# figure that out for us.)
W = tf.Variable(tf.random_uniform([1], -1.0, 1.0))
b = tf.Variable(tf.zeros([1]))
y = W * x_data + b

# Minimize the mean squared errors.
loss = tf.reduce_mean(tf.square(y - y_data))
optimizer = tf.train.GradientDescentOptimizer(0.5)
train = optimizer.minimize(loss)

# Before starting, initialize the variables.  We will 'run' this first.
init = tf.global_variables_initializer()

# Launch the graph.
sess = tf.Session()
sess.run(init)

# Fit the line.
for step in range(201):
    sess.run(train)
    if step % 20 == 0:
        print(step, sess.run(W), sess.run(b))

# Learns best fit is W: [0.1], b: [0.3]
{% endhighlight %}

### Happy Coding :)
