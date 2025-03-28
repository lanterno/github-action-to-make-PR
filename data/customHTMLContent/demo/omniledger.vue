<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    We do not host this demo anymore, but you can find its code here and use the instructions to run it on your own
    computer!
    <a href="https://github.com/c4dt/omniledger">Omniledger Archive</a>.
  </p>
  <p>
    OmniLedger has already been used for a number of years, and there are a lot of projects that interact with this
    blockchain. Together with the <a href="https://dedis.ch">DEDIS</a> lab, C4DT is running a test-network since March
    2019, and it is used on a daily basis for different services.
  </p>
  <p>
    This page presents a demonstrator, showing the various blocks of the main chain. In addition to this, there are a
    pilot which have been created with an actual use-case in mind.
  </p>

  <h3 id="columbus">Blockchain Explorer</h3>
  <p>
    In order to inspect what is happening on a blockchain you need a blockchain explorer. It can show you pas
    transactions that happened on the blockchain and allows to understand how a blockchain works. The blockchain
    explorer <strong>Columbus</strong> developed by the DEDIS lab also shows the structure of the blockchain with the
    different forward-links that allow to navigate more efficiently between the blocks.
  </p>
  <p>Here is a list of things you can do:</p>
  <ol>
    <li>
      Clicking on a block (1) will display the contents of this block in the blockchain. In (2) you can find the time of
      creation of that block, together with the <i>height</i>
      indicating how good this block is connected. The list in (3) shows the transactions that are stored in this block.
    </li>
    <li>
      In the entry-field (4) you can enter a block-number that will be displayed. If you enter <strong>1</strong> and
      press enter, the explorer will display the first block of the chain, which has been created in March 2019.
    </li>
  </ol>
  <img src="/showcase_v2/products/images/omniledger/demo-columbus.png" class="center" style="width: 100%" />

  <a href="https://explorer.c4dt.org" class="tab-link"> For a Live Demo Click Here </a>
</template>
