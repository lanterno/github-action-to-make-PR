<template>
  <h3>This project has been retired from the C4DT Factory Incubator</h3>
  <p>
    It is no longer actively supported, but you can find the archived project here:
    <a href="https://github.com/dedis/filesharing"> Calypso Demo Code </a>
    However, if you have questions or suggestions, feel free to contact us.
  </p>
  <p>
    OmniLedger has already been used for a number of years, and there are a lot of projects that interact with this
    blockchain. Together with the <a href="https://dedis.ch">DEDIS</a> lab, C4DT is running a test-network since March
    2019, and it is used on a daily basis for different services.
  </p>
  <h4>Calypso Access Control</h4>
  <p>
    The <a href="https://github.com/calypso-demo/filesharing">Calypso access control demo</a>
    shows one use-case of the calypso access control system. The demo shows three users where each user has a list of
    contacts and two groups. The files of the users are stored encrypted on the blockchain, and to decrypt the files,
    the access control of the file must match the user.
  </p>
  <p>If you follow the demo, here is a list of things to do:</p>
  <ol>
    <li>
      As a User 2, click on (1) to see the files stored by User 3. A window pops up that shows the two files from User
      3, one that is <i>refused</i> and one that is <i>allowed</i>.
    </li>
    <li>
      If you click on the refused file in (2), the system will request a decryption, but it will fail, as User 2 doesn't
      have the right to decrypt the file. The attempt will be logged on the blockchain, and in (3) you will see a red
      entry denoting the failed attempt.
    </li>
    <li>
      Clicking on the allowed file in (3) will successfully decrypt the file, and the access will be logged in (3).
    </li>
  </ol>
  <p>
    <img src="/showcase_v2/products/images/calypso/demo-fileshare.png" class="center" style="width: 100%" />
  </p>

  This demo needs to be run on your local computer. Find the code here:
  <a href="https://github.com/dedis/filesharing"> Calypso Demo Code </a>
</template>
