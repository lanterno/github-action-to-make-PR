<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    As part of our collaboration with our partners at C4DT, we created a hands-on workshop showcasing Calypso. The
    problem to be solved was how to handle secret keys in a self-sovereign identity management system. As you don't have
    a central authority anymore, in case of the user losing their key, they need to be able to recover it somehow.
  </p>
  <p>
    For this training we prepared practical exercises, where the participants use the existing demonstrators to find out
    how the system works. During the training, we discussed and used the following two solutions with Calypso:
  </p>

  <div class="center" style="width: 100%; display: flex; align-items: flex-end">
    <div style="margin: 1em">
      <img src="/showcase_v2/products/images/calypso/hands-on-slide-password-manager.png" /><br />
      Storing the private key encrypted on the chain, and giving access to a group of trusted accounts. It is also
      possible to define a threshold: out of five trusted accounts, 3 need to work together to recover the private key
    </div>
    <div style="margin: 1em">
      <img src="/showcase_v2/products/images/calypso/hands-on-slide-access-delegation.png" /><br />
      Changing the access control system to allow for updates by a group of trusted accounts. So instead of trusting
      only one key, the system trusts a list of keys. And this list can be updated by a trusted group of accounts.
    </div>
  </div>

  <p>
    Here are the slides of the hands-on training. If you are interested in this training, please reach out to
    <a href="mailto:linus.gasser@epfl.ch">Linus Gasser</a>
  </p>
  <ul>
    <li>
      <a href="/showcase_v2/products/images/calypso/calypso-hands-on-executive-overview.pdf">Executive Overview</a>
    </li>
    <li><a href="/showcase_v2/products/images/calypso/calypso-hands-on-exercises.pdf">Training Slides</a></li>
  </ul>
</template>
