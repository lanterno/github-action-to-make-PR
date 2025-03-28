<template>
  <div class="center" style="width: 100%; display: flex">
    <div style="margin: 1em; flex: 1" class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/d-voting/d-voting_at_EPFL.png" />
        <br />Finalized Elections with results
      </label>
    </div>
    <div style="margin: 1em; flex: 1" class="click-zoom">
      <label>
        <input type="checkbox" />
        <img src="/showcase_v2/products/images/d-voting/d-voting-overview.png" />
        <br />Overview of the components of the system
      </label>
    </div>
  </div>

  <p>
    The d-voting project allows for electronic voting without a central point of trust. It relies instead on the
    majority of servers to be honest during the voting process. The ballots are encrypted during the voting phase, and
    then shuffled to anonymise the results. When they are finally decrypted, it is not possible anymore to retrace who
    voted for what.
  </p>
  <p>
    In Summer 2024, the d-voting system has been used for the first time on a bigger scale to elect the members of the
    EPFL school assembly. A little bit over 1000 voters used the system to elect the members, and after the resolution
    of a bug discovered during the on-going voting process, the elections could be successfully concluded. Since then
    the system has been used multiple times for smaller elections or to poll the EPFL community on administrative
    questions.
  </p>
  <p>
    The current plan wants to further improve the frontend of the program to make it even easier for the admins to
    create new elections. Also, some difficulties for new users will be removed.
  </p>
</template>
