<template>
  <img
    src="/showcase_v2/products/images/freegaen/microg_full_colored.svg"
    width="30%"
    style="float: left; margin: 1em"
    class="dark_invert"
  />
  <p>
    Apple and Google developed the Google-Apple Exposure Notification system in order to provide a uniform API for
    contact-tracing apps while preserving user privacy. On Android, GAEN is integrated in the Google Play services,
    which is proprietary. As a consequence, users wanting to keep a free system, as well as phone manufacturers such as
    Huawei who don't have Google Play services cannot use these applications.
  </p>
  <p>
    This project aims to offer an alternative framework, based on open-source code, which requires only minimal changes
    to the apps.
  </p>
  <p>
    After analyzing the various possibilities to replace GAEN, and examining the current related projects, we focused
    our work on collaborating with <a href="https://microg.org/">microG</a>, a Free Software project dedicated to
    replacing all of GMS. This effort resulted in a way to use microG's contact tracing subset as a library, so that it
    can be bundled with an existing app without source code modification, and without other dependencies.
  </p>
</template>
