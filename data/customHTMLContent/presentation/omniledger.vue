<template>
  <p>
    When building blockchains, there are a number of technical challenges to overcome. OmniLeger solves the following
    challenges:
  </p>
  <ul>
    <li>
      <strong>Speed</strong> - if many people want to use the system, it needs to be fast. Speed is measured in two
      ways: transactions per second, and confirmation delay
    </li>
    <ul>
      <li>
        <strong>Transactions per second</strong> - define how many money transfers can be processed by the system. VISA
        can process up to 10'000 transactions per second (tps), while Bitcoin can do about 7 tps. OmniLedger creates
        interdependent shards, so that the speed of the overall system can go well beyond 10'000 tps.
      </li>
      <li>
        <strong>Confirmation delay</strong> - how long you have to wait to be sure your money transfer arrived. VISA
        takes about 5 seconds, Bitcoin takes about 1h. OmniLedger transactions take between 2 seconds and 1 minute.
      </li>
    </ul>
    <li>
      <strong>Attack resistance</strong> - if you receive money in the system, you want to make sure it stays there, and
      does not disappear all of a sudden. OmniLedger can prove that even with its high throughput, it is still safe and
      will not allow an attacker to spend the same money twice.
    </li>
  </ul>
  <p>
    In addition to these challenges, we implemented
    <a href="https://factory.c4dt.org/showcase/labs/DEDIS/calypso">Calypso</a>, which is a
    <strong>Secret storage</strong> service. This is needed, because today's blockchains are often world-readable, so it
    is important that you still can store secret data without everybody being able to read it. Calypso is not part of
    the original OmniLedger paper, but uses the OmniLedger blockchain implementation.
  </p>
  <p>
    An overview of the OmniLedger architecture can be seen in the following figure:
    <img src="/showcase_v2/products/images/omniledger/omniledger-overview-transparent.png" class="dark_invert center" />
  </p>
</template>
