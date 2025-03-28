<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    We do not host this demo anymore, but you can
    <a href="https://github.com/c4dt/service-drynx">find its code here</a>.
  </p>

  <h4>Description</h4>

  <p>
    Together with our SwissRe partner we created a demonstrator using the Drynx data analysis tool. The source data is a
    list of house insurances and the incurred claims. Supposing that this list is spread over many insurers, Drynx
    allows to:
  </p>
  <ul>
    <li>Hide the contents of the list to the other insurers</li>
    <li>Allow data analysis using all data from all lists</li>
  </ul>
  <p>
    Looking at the start screen of Drynx below, you can see the 3 data sources (A), (B), and (C). For the demo, the data
    is visible to the user, but in the application itself, the data from one insurer is not available in clear to the
    other insurers.
  </p>
  <p>
    Now you can click on (1) and choose the columns that you want to analyze. You can choose for example the
    <i>Design year</i> and the <i>Incurred claim</i> to see how much a house from a certain year will cost to the
    insurer. Of course this supposes that the houses themselves have the same value over the years. This query is also
    possible, but left as en exercise to the reader! <br />In (2) you can choose the type of operation, but for
    multi-column analysis, only <i>linear regression</i> is available.
  </p>

  <img src="/showcase_v2/products/images/drynx/demo-start.png" width="80%" class="center" />

  <p>
    Clicking on (3) will start the calculation. The nodes holding the data of the insurers (the <i>Data Providers</i>)
    will communicate their encrypted values and do the calculation only on these values. Once the result is calculated,
    it is sent encrypted to the browser, who can then decrypt it and display it. The resulting linear regression can be
    seen in the following screenshot:
  </p>

  <img src="/showcase_v2/products/images/drynx/demo-year-claim.png" width="60%" class="center" />

  <p>You can see that older houses tend to have higher claims than newer houses, which seems intuitively correct.</p>
</template>
