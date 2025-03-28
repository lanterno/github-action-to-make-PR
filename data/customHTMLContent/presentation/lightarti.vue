<template>
  <h3>Anonymous Communication in Mobile Apps</h3>

  <img
    src="/showcase_v2/products/images/lightarti/logo.png"
    width="10%"
    style="float: left; margin: 0.5em"
    class="dark dark_pad"
  />

  <p>
    Since the beginning of the commercial internet, and even more so with the start of mobile apps, there is a tendency
    to collect as much data from the users as possible. This data is used to monetize the users by selling it to other
    companies. But it can also be used by governments to track users, even when the government said they will not do it.
  </p>
  <p>
    On the network level, one of the best projects to guarantee the anonymity of the client is Tor. The Onion Router
    (Tor) relays the request of a client through a series of servers in such a way that no server has a full picture of
    the request. Unfortunately this advantage comes with a large setup cost for mobile applications: the client needs to
    download every hour a full list of these servers.
  </p>
  <p>
    Lightarti-rest solves this problem by creating a smaller list of reliable servers, and updating this list only once
    a week. In regular intervals, an update is created to indicate servers that have been disabled since the creation of
    the list. This allows a mobile app to use the Tor network, but only downloading 100kB per week, plus 1kB per day for
    the update.
  </p>
  <p>
    Originally created for the NotifyMe feature of SwissCovid, lightarti-rest offers an easy-to-use API for mobile apps.
    Both Android and iOS are supported. For more information, you can read the
    <a href="https://github.com/c4dt/lightarti-rest/wiki">lightarti-rest wiki</a>.
  </p>
  <p>
    Lightarti-rest is based on the excellent work of the new Tor-client, called arti, which is available here:<br />
    <a href="https://gitlab.torproject.org/tpo/core/arti/-/wikis/home">Arti</a>
  </p>
</template>
