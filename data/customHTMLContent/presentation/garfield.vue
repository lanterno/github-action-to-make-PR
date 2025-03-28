<template>
  <h4>Introduction</h4>

  <p>
    Garfield is a framework to write <a href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a> (ML)
    applications. It is built on top of <a href="https://pytorch.org/">PyTorch</a> and
    <a href="https://www.tensorflow.org/">TensorFlow</a>, two of the most used libraries in this field.
  </p>
  <p>
    More specifically, Garfield allows one to write distributed Byzantine fault tolerant ML applications. Those terms
    will be explained in the following paragraphs.
  </p>

  <h4>Distributed Machine Learning</h4>

  <p>
    Garfield focuses on Distributed ML, or in other words the use of multiple machines to collaboratively train a model
    using data.
  </p>

  <p>
    One reason to use many machines can be efficiency: distributing the work and executing it in parallel can
    dramatically reduce the computation time.
  </p>

  <p>
    Another reason can also be privacy: in some situations, the data on which we wish to train a model belongs to
    different entities, who either cannot (for legal reasons) or do do not want to share their data with the other
    participants. In this case, decentralised learning can be used, allowing each participant to keep its data secret
    and only share partial models.
  </p>

  <p>
    These different goals lead to various distributed architectures, illustrated in the following figure.
    <img class="dark align-middle" src="/showcase_v2/products/images/garfield/models.svg" />
    Garfield can work with any of these architectures, and provides examples for all of them.
  </p>

  <h4>Byzantine Faults</h4>

  <p>
    Computer systems can present many kinds of failures, ranging from one-off glitches to catastrophic breakdowns. In
    distributed systems, the most general class of failures is called
    <a href="https://en.wikipedia.org/wiki/Byzantine_fault">Byzantine faults</a>, and characterizes conditions where
    components can behave in completely arbitrary ways. They can for example act normally with respect to one component,
    but present errors to another one. They can send inconsistent information to different peers. Such actions can be
    the result of an attack, or simply due to a combination of software or hardware errors.
  </p>

  <p>
    A system is said to be Byzantine fault tolerant when the components that operate correctly can reach a correct
    result despite the presence of these faulty elements.
  </p>

  <p>
    Garfield provides tools to create Byzantine fault tolerant ML applications, thereby allowing the training of models
    even if some of the actors do not behave correctly.
  </p>
</template>
