<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    We do not host this demo anymore, but you can find its code here and use the instructions to run it on your own
    computer!
    <a href="https://github.com/c4dt/omniledger">Omniledger Archive</a>.
  </p>
  <p>
    With the C4DT team we created a pilot using OmniLedger to create a self-sovereign identity. The identity is stored
    on the blockchain and controlled by the user. Instead of using passwords, the user has a private key stored in his
    web-browser. Using this private key, they can authenticate themselves and access their identity.
  </p>
  <p>The demo can do the following:</p>
  <ol>
    <li><a href="#update">Update</a> the user information autonomously</li>
    <li>
      <a href="#login">Login-procedures</a> - currently we have two logins:
      <ul>
        <li>Wordpress login, to allow access to the administrative interface and the partner-page</li>
        <li>Matrix login, to enter the C4DT chat</li>
      </ul>
    </li>
    <li>
      <a href="#keymgmt">Key management</a> to allow the users to login from multiple devices and to entrust key
      recovery to a chosen group of accounts.
    </li>
  </ol>
  <p>
    In the following paragraphs the different parts are presented in more detail. If you want to have a live demo, don't
    hesitate to get in contact with <a href="mailto:linus.gasser@epfl.ch">Linus Gasser</a>
  </p>

  <h3 id="update">Self sovereign Identity</h3>
  <p>
    In the following two screenshots you see the data that a user can modify by themselves. Due to the way the
    blockchain is set up, there is no central part that can interfere with this. The downside of this complete
    autonomity of the user is that there is no administrator that can reset the password.
  </p>
  <div class="center" style="width: 100%; display: flex">
    <div style="margin: 1em" class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-01-login.png" />
        <br />User information
      </label>
    </div>
    <div style="margin: 1em" class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-02-transaction.png" />
        <br />Update in progress
      </label>
    </div>
  </div>

  <h3 id="login">Login Procedures</h3>
  <p>
    In order to use the OmniLedger identity for a login, we use a Central Authentication Service (CAS). The
    <i>central</i> is only with regard to the login itself. So each application can have its own CAS. We implemented a
    CAS-plugin and tested it with Wordpress and Matrix. Wordpress is a very wide-spread website generation tool. Using
    the OmniLedger identity, users can login to WordPress, either for administration, or to enter secured pages.
  </p>
  <p>
    The Matrix application is used for communication. The login-procedure allows anybody with an OmniLedger login, and
    who is authorized by the owner of the Matrix server, to login.
  </p>
  <p>In the following there are some example screenshots of how this looks:</p>

  <div class="columns">
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-04-login-wordpress.png" />
        <br />The "Sign in with OmniLedger" button in Wordpress
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-05-login-wordpress-confirmation.png" />
        <br />A user has to confirm the login
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-07-login-wordpress-transaction.png" />
        <br />The login is written to the blockchain
      </label>
    </div>
  </div>
  <div class="columns">
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-06-login-wordpress-complete.png" />
        <br />The access to the protected area in Wordpress
      </label>
    </div>
    <div class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/omniledger/pilot-08-login-matrix-cas.png" />
        <br />Logging in to Matrix
      </label>
    </div>
  </div>

  <h3 id="keymgmt">Key Management</h3>
  <p>An often neglected part of self-sovereign identities is the key management. There are at least two problems:</p>
  <ol>
    <li>Key recovery in case the key is lost</li>
    <li>Adding and removing keys for multiple devices</li>
  </ol>
  <p>
    The 1. item is normally solved by a central administrator who has the right to reset a password. However, in a
    decentralized, self-sovereign identity, this is not possible. With a blockchain, there is no central administrator
    who can reset passwords. Instead, the user has the possibility to delegate key recovery power to a set of trusted
    accounts. At any moment, the user can update the set of people who is allowed to create a new key for his account.
    They can even define a 3-out-of-5 scheme where three out of five chosen contacts need to collectively request a new
    key.
  </p>
  <p>
    Adding new devices, as described in the 2. item, is easier. Both are done using a structure called Decentralized
    Access Rights Control (DARC), which allows to express relationships with regard to keys. This makes it possible to
    add and remove keys, or to add a new key only if a certain number of accounts work together.
  </p>
  <div style="margin: 1em" class="click-zoom center">
    <label>
      <input type="checkbox" />
      <img src="/showcase_v2/products/images/omniledger/pilot-03-devices.png" width="50%" />
      <br />An account with a number of keys and a recovery account
    </label>
  </div>
</template>
