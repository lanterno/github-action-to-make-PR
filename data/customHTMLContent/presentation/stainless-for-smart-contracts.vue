<template>
  <h4>Introduction</h4>

  <p>
    Stainless is a tool to help designing highly reliable programs in <a href="https://scala-lang.org/">Scala</a>. Using
    <a href="https://en.wikipedia.org/wiki/Formal_verification">Formal Verification</a>, it will check whether the
    system behaves according to how it was specified, or if it will deviate in unexpected ways. Logical errors, security
    vulnerabilities and other defects can therefore be detected before the program is deployed.
  </p>

  <p>
    More precisely, Formal Verification is a technique that uses mathematical logic and automated reasoning to produce
    proofs, similarly to how a mathematician proves a theorem by using axioms and rules of deduction. The result of this
    process can:
  </p>
  <ul>
    <li>prove that a program behaves always correctly, no matter what inputs it receives;</li>
    <li>
      prove that a program will always reach termination, without the possibility of remaining stuck in an infinite
      loop;
    </li>
    <li>on the other hand, pinpoint precise sets of inputs which will cause the program to behave incorrectly.</li>
  </ul>

  <h4>Formal Verification vs. Testing</h4>

  <p>
    Formal Verification differs from more commonly used approaches for testing in several ways. The latter usually
    involves selecting a set of inputs and checking that the program produces the expected output. We can be smart and
    carefully choose the checked inputs, making sure that corner cases are included, but in the end the number of
    verified scenarios will still be a very small subset of the complete possibilities. Using this approach, it is
    possible to prove that a program is incorrect (when one of the tests fails), but it is impossible to prove that no
    defect exists.
  </p>

  <p>
    In contrast, Formal Verification is more complex to use, and due to its mathematical nature may require some
    background with logic and proof building. However, when successfully used, it covers all cases and completely
    guarantees the absence of defects.
  </p>

  <p>
    One way to illustrate the difference is as follows. Imagine that you are producing an image and want to make sure it
    is correct. By testing, you will check a few pixels, perhaps a border or a corner, and verify that they are correct:
    <img class="dark align-middle" src="/showcase_v2/products/images/stainless/test-vs-fv-1.png" />
  </p>
  <p>
    This will give you some assurance, but you will never be completely sure, unless you try each and every one of the
    pixels, which can be very long, if not impossible in a reasonable amount of time depending on the size of the image.
  </p>

  <p>
    Now by using mathematical logic, you can either construct a proof that your image is correct no matter its size:
    <img class="dark align-middle" src="/showcase_v2/products/images/stainless/test-vs-fv-2.png" />
  </p>
  <p>
    Or, failing that, you can directly obtain an image location that is incorrect:
    <img class="dark align-middle" src="/showcase_v2/products/images/stainless/test-vs-fv-3.png" />
  </p>

  <h4>Smart Contracts</h4>

  <p>
    <a href="https://en.wikipedia.org/wiki/Smart_contract">Smart Contracts</a> are computer programs that are executed
    on a <a href="https://en.wikipedia.org/wiki/Blockchain">blockchain</a>. They usually enforce mechanisms or model
    real-life processes, such as e-voting, insurance or loans, with the advantage that they do not require centralized
    trust.
  </p>
  <p>
    Smart Contracts typically involve the transfer of assets such as money. It is therefore critical that they are
    devoid of errors, as mistakes will translate in possibly significant financial loss. Their source code is also
    generally short compared to applications, which helps in keeping the complexity of applying Formal Verification
    manageable. A variant of Stainless exists that can verify Smart Contracts written for the popular
    <a href="https://en.wikipedia.org/wiki/Ethereum">Ethereum blockchain</a>.
  </p>
  <p>
    <a href="omniledger.html">OmniLedger</a>, another project curated by the C4DT, is a blockchain implementation
    developed at the <a href="https://www.epfl.ch/labs/dedis/">DEDIS</a> lab. It also contains a layer allowing it to
    run an Ethereum virtual machine. Together with Stainless, they provide a complete platform for the development and
    execution of verified Smart Contracts, as illustrated in the following diagram:
    <img class="dark dark_pad align-middle" src="/showcase_v2/products/images/stainless/interactions.svg" />
  </p>
  <p>
    The Smart Contract author uses Stainless to determine whether the code fulfills its specifications, iterating until
    no error is found. At this point, he uses Stainless to compile the Smart Contract, making it ready to be deployed on
    the blockchain. Each deployment creates a new instance of the contract, with which users interact by connecting to
    the blockchain and calling the contract functions.
  </p>
</template>
