<template>
  <p>
    Klint allows for fast and automated
    <a href="https://en.wikipedia.org/wiki/Formal_verification">formal verification</a>
    of network functions (NF), such as a
    <a href="https://en.wikipedia.org/wiki/Router_(computing)">router</a> or a
    <a href="https://en.wikipedia.org/wiki/Network_address_translation">NAT</a>. It works directly on binaries, without
    the need of special data structures.
    <br />
    It can ensure that a given NF, be it proprietary or not, respects a formal specification. It allows decoupling
    between NF-providers and network operators, and let the latter validate it before deploying it.
  </p>

  <a
    title="NextToRiver, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
    href="https://commons.wikimedia.org/wiki/File:Lab01-Exp01-Ripv1.png"
    ><img
      class="dark center"
      style="width: 60%"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lab01-Exp01-Ripv1.png/512px-Lab01-Exp01-Ripv1.png"
  /></a>

  <p>
    The network functions can be written in any compiled language, as long as it exposes two functions conforming to
    Klint: a setup method taking care of initialisation, and another method handling a packet, asserting on the
    transmitted packet.
    <br />
    Klint provides some well-known NF specification to get you started writing your own, and a way to compile with
    <a href="https://www.dpdk.org">DPDK</a>.
  </p>
</template>
