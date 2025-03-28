<template>
  <h4>Introduction</h4>

  <p>
    With the upcoming
    <a href="https://en.wikipedia.org/wiki/Web3">Web 3.0</a>
    more and more services rely on private keys. This includes, but is not limited to, blockchains and identity
    management systems that allow a user to selectively disclose one or more attributes. Another element of Web 3.0 is
    decentralization, which makes it harder to revoke a stolen or lost private key.
  </p>

  <p>
    The most common protections for these private keys include
    <i>Wallets as a service</i> like hardware wallets and hardware security modules. But these solutions all contain a
    single point of failure that can leak the private key or lead to abuse. To avoid a single point of failure, one can
    use threshold cryptographic solutions like <a href="/projects/calypso">Calypso</a> or
    <a href="https://sepior.com/">Sepior</a>. However, for a service that is privacy preserving, these solutions leak
    the identity of the key user.
  </p>

  <img
    class="dark center"
    alt="The user fetches a one-time token from the Tandem server. Then they use it
                to sign a transaction, which is sent to the server."
    src="/showcase_v2/products/images/tandem_monero/system_setup.png"
    style="width: 30em; max-width: 80%"
  />

  <p>
    For this reason Tandem has been developed. It is a
    <a href="https://en.wikipedia.org/wiki/Threshold_cryptosystem">threshold-cryptographic</a>
    solution like the ones cited above. But it does not leak the identity of the client, which is important when it is
    used for a service that is privacy preserving. The Tandem paper shows how to use this solution for Attribute-based
    credentials. In this setting a simple threshold-cryptographic solution can protect the key, but it will deanonymize
    the user.
  </p>

  <p>
    We looked at the
    <a href="https://www.getmonero.org/">Monero blockchain</a>, which provides anonymous token transfers. These
    transfers are initiated with transactions that are signed by a private key. We show how to convert a Monero
    transaction into a Tandem-compatible protocol without the need to modify Monero. C4DT contributed to the elaboration
    of the protocols to be used between the client and the Tandem server. Pending to find partner support, we would like
    to test it on the Monero test network, and write a reference library in Rust.
  </p>
</template>
