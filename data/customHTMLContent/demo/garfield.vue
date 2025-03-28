<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    We do not host this demo anymore, but you can find its code here and use the instructions to run it on your own
    computer!
    <a href="https://github.com/c4dt/garfield">Garfield Archive</a>.
  </p>
  <p>Here are some screenshots from the running demo:</p>
  <div class="columns">
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-1.png"
          alt="This shows the first step of six in the demo. It contains the introduction
                and shows a figure with different setups for a distributed system.
                For this demo, the 'Decentralized' setup is used, because it allows each
                participant to keep their private data on their servers."
        />
        <br />
        Overview of the system, showing the different setups proposed by Garfield.
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-2.png"
          alt="Step 2: 'Simple training' with a short explanation that we need
                as much data as possible for good ML models. A button labeled 'train' which
                allows to start the training. At the bottom a block displaying an accuracy
                of 72% for the single system."
        />
        <br />
        This shows the training results for a simple system with only part of the available data. It supposes that the
        rest of the data stays private with the other nodes.
      </label>
    </div>
  </div>
  <div class="columns">
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-3.png"
          alt="Step 3: 'Adding data' allows the user to choose how many additional
                servers with their private data should join the system to train the common
                model. The user can choose, and here they chose 3 additional systems. Again
                a 'train' button, and at the bottom a block displaying an accuracy of
                76% for the '4 reliable systems'."
        />
        <br />
        If we can bring more data to train the model, the accuracy increases. Here the user chose to add 3 more systems,
        all reliable, which gives an accuracy of nearly 76%.
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-4.png"
          alt="Step 4: 'Byzantine behaviour' gives the user a choice to change some
                of the additional servers to 'byzantine', meaning they will disturb the system,
                by sending wrong data. The user chose 1 byzantine system. Again a 'train' button,
                and at the bottom a block displaying an accuracy of 64% for '4 system, where
                one is unreliable'."
        />
        <br />
        Unfortunately, if one of the systems is unreliable (byzantine) and sends wrong data, then the model suffers. In
        this case, the accuracy drops to 64%, even though more data is available.
      </label>
    </div>
  </div>
  <div class="columns">
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-5.png"
          alt="Step 5: 'Byzantine resilience' looks similar to step 4, with 4 systems,
                where one is red to indicate an unreliable system. This time the
                user can only click the 'train' button. At the bottom is a box which indicates
                an accuracy of 76% for '4 systems, 1 unreliable, with byzantine resilience'"
        />
        <br />
        Now Garfield enters the scene and adds byzantine resilience to the system. This will allow the 3 reliable
        systems to detect and ignore the unreliable one. In this case the accuracy is again about the same as the
        accuracy with 4 reliable systems.
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img
          src="/showcase_v2/products/images/garfield/garfield-demo-6.png"
          alt="Step 6: 'Comparison with other projects' shows a text comparing it to another
              project from one of our partner-labs."
        />
        <br />
        Comparing Garfield with a solution like
        <a href="https://factory.c4dt.org/showcase/spindle/presentation">SPINDLE</a> shows the difference between the
        two: while Garfield protects against attacks wanting to influence the model, SPINDLE protects against attacks on
        listeners, so that no server or external party can learn anything from the data exchanged.
      </label>
    </div>
  </div>

  <h4>Former description</h4>
  <p>
    The <a href="https://factory.c4dt.org/incubator/garfield/demo/">Garfield Demonstrator</a> illustrates how Machine
    Learning is used to train a model on known data and how it fares on new data. It describes the Decentralized
    Learning model, showing how training on more data improves learning, while still keeping control on one’s data.
    Finally, it shows the negative impact that faulty components have on distributed learning, and how using Garfield
    helps to develop applications that can tolerate them.
  </p>

  <p>
    The following screenshot shows the start of the demonstrator. A wizard-style interface will let you navigate through
    the various steps of the demonstrator.
  </p>

  <img src="/showcase_v2/products/images/garfield/demo-screenshot.png" width="50%" class="center" />

  <a href="https://factory.c4dt.org/incubator/garfield/demo/" class="tab-link"> For a Live Demo Click Here </a>
</template>
