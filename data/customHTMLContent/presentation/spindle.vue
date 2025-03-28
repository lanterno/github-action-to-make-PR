<template>
  <p>
    SPINDLE allows for some statistics on distributed data without sharing any data in clear. One kind of statistics it
    can do is called
    <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>, which allows a program to make
    predictions based on a given set of data. It fits many use cases, such as determining the likeliness that some
    hospital patient has a disease, or automatically determine what an image represents.
    <br />
    SPINDLE can do all that while at the same time keeping the data private. It does so by using a
    <a href="https://en.wikipedia.org/wiki/Lattice-based_cryptography">new kind of cryptography</a>, allowing to apply
    common mathematical operations on encrypted data and only revealing the result.
  </p>

  <h4>Example</h4>

  <p>
    Using homomorphic encryption in machine learning allows SPINDLE to both ensure the privacy of data and to make the
    machine learning computations. In the demonstrator, we present a use-case based around predicting whether a hospital
    patient is likely to have diabetes, based on the data of three different hospitals.
  </p>

  <p>
    The training phase in machine learning usually never finishes, it does its computation repeatedly, with each round
    using the model created during the previous one, and hopefully improving it. In the demonstrator, you can set the
    number of wanted round. In order to improve the execution speed of the algorithm, each hospital first computes a
    local model. This local model is then merged with the other models, to obtain a network model, behaving as if it was
    computed on the aggregated data directly. Then, the querier can ask SPINDLE to predict using this network model.
  </p>
  <img class="dark align-middle" src="/showcase_v2/products/images/spindle/network.svg" />
</template>
