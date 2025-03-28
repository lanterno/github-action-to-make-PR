<template>
  <img src="/products/images/calypso/document-secure.png" width="10%" style="float: left; margin: 0.5em" />
  <p>
    Calypso allows a writer to encrypt a document, and to store the list of allowed readers on a blockchain. Over time,
    the writer can update this list to include more readers, or to remove readers that they don't trust anymore. The
    blockchain will verify all read requests and log them immutably. Only authorized read-requests will receive the
    decryption key.
  </p>

  <p>This has a big advantage over current document encryption schemes, which suffer from:</p>
  <ul>
    <li>a trusted central authority that might be hacked or forced to behave maliciously</li>
    <li>the need to know all readers in advance, and not knowing which of them will access the documents</li>
  </ul>

  <h3>Applications</h3>
  The two elements of the Calypso system allow to create a number of applications. Everytime information needs to be
  secured and only accessible under certain restrictions, Calypso can give the guarantees that this is enforced.
  <ul>
    <li>
      <strong>Clearance-enforcing Document Sharing</strong> - as implemented in the
      <a href="/projects/odyssey?segment=demo">Odyssey pilot</a>, which allows
      <i>Auditable Sharing and Management of Sensitive Data Across Jurisdictions</i>: the documents are stored
      encrypted, and only available to a restricted set of readers. The access control is updatable, and all accesses
      are logged in a blockchain.
    </li>
    <li>
      <strong>Patient-centric Medical Data sharing</strong> - in a medical setting, the data gathered about a patient
      need to be secured. The patient needs to be in the position of adding and revoking access to their data. This can
      be done easily with Calypso.
    </li>
    <li>
      <strong>Decentralized Games</strong> - a number of online games using the blockchain start to emerge. Some of them
      need to consider secret moves of the players before calculating the winner. For example a lottery, poker, but also
      bidding. Calypso can store all these moves encrypted and enforce the decryption only to happen once a barrier
      point is passed - either a certain time, or a number of moves stored.
    </li>
  </ul>
</template>
