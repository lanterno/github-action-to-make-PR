<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    We do not host this demo anymore, but you can find its code here and use the instructions to run it on your own
    computer!
    <a href="https://github.com/c4dt/service-spindle">Spindle Archive</a>.
  </p>

  <h4>Description</h4>

  <p>
    In the Spindle demo, three hospitals want to determine if a patient has diabetes or not. To avoid invasive
    procedures, theses only want to proceed with the full test if it is likely that the patient has it.
  </p>

  <p>
    To predict if someone is having diabetes, these hospitals use what is known as a generalized linear model. It is a
    statistical method used to predict the likeliness of someone exhibiting a condition, based on a known set of
    representative values. It works in two phases, first the training, where the model ingests data, then you can
    predict with the trained model, to determine if some new patient is likely sick. For example, imagine if having
    diabetes was only determined by the age of the patient, after 40, you are assured to have it. After training, your
    model will come to the same conclusion, and when asked to predict if a patient is diabetic, it will only look at
    their age, and answer accordingly.
  </p>

  <div class="click-zoom center">
    <label>
      <input type="checkbox" />
      <img src="/showcase_v2/products/images/spindle/demo-start.png" width="50%" />
      <br />The start page of the demo
    </label>
  </div>
  <br />

  <p>
    In order to improve the quality of the model, these hospitals need to share the collected data, but doing so
    trivially does endanger the patient's privacy. If they decide to put all the data at the same place, there is a
    greater risk that such a treasure will be attacked. If they decide to keep the data locally and only share the
    model, it can still leak data by "reversing" part of it.
  </p>

  <p>
    Here comes SPINDLE, which enables some statistics on distributed databases without sharing any data in clear. It
    does so by using a new kind of cryptography, allowing to apply common mathematical operations on encrypted data and
    only revealing the result.
  </p>

  <p>
    Around this text, you can see the three hospitals' data, which you can see the content of by clicking on it. Each
    data is stored in a separated instance of SPINDLE, none of it is shared as it but is first encrypted. By cooperating
    with each other, the hospitals can deliver the statistical results to you, without any privacy issues.
  </p>

  <p>
    The following two screenshots shows the demo during training, and once the result is calculated and is ready to
    predict outcomes.
  </p>

  <div class="columns click-zoom">
    <label>
      <input type="checkbox" />
      <img src="/showcase_v2/products/images/spindle/demo-calculate.png" />
      <br />During calculation of the result
    </label>
    <label>
      <input type="checkbox" />
      <img src="/showcase_v2/products/images/spindle/demo-predict.png" />
      <br />Ready to predict outcomes
    </label>
  </div>
</template>
