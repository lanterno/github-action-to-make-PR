<template>
  <p>
    The following shows a detailed step-by-step procedure of the access control system using Calypso. It shows the
    interaction of the writer (Wanda) and the reader (Ron). To protect the encrypted data, two systems are needed:
  </p>
  <ul>
    <li>Access Control Blockchain - guarantees that all updates to the access control are correctly authorized</li>
    <li>
      Secret-Management Committee - executes the decryption (re-encryption) of the document, but only if a correct proof
      of the access control blockchain is given
    </li>
  </ul>
  <img src="/showcase_v2/products/images/calypso/steps.png" class="dark_invert center" style="width: 75%" />

  <p>The <a href="https://eprint.iacr.org/2018/209.pdf">Calypso paper</a> has all the details.</p>
</template>
