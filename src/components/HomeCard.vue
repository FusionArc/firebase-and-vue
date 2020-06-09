/* eslint-disable */
<template>
  <v-card class="intro dense">
    <div class="heading">
      <v-card-title>
        <h2>Cat Scrapper</h2>
        <h2>
          Precious Metal<br />
          Recovery & Refining
        </h2>
      </v-card-title>
    </div>
    <div class="card-body">
      <v-card-text>
        <h2>Recyclers & processors of retired catalytic convertors</h2>
        <br/>
        <p>
          We aim to provide a bespoke <span><em>Cats to Cash</em></span> service
          for commercial & hobbyist recyclers
        </p>
        <br />
        <p>
          For all enthusiasts and collectors please browse our site where you<br />
          will find current catalytic convertor recyling news & insights.<br />
        </p>
        <p>Checkout the realtime precious metal prices.<br /></p>
        <p>
          Share and Learn about precious metal recovery in 2020<br /><br />
          Be part of growing community of scrappers, enthusiasts & experts of
          their field.<br />
        </p>
        <p>
          Check our <em>`cat a list`</em> to match your salvaged collections.<br />
          Match model codes against our lists for fast valuation of your items.
        </p>
      </v-card-text>
    </div>
    <v-img><Chart1 /></v-img>
  </v-card>
</template>
<script>
import Chart1 from "@/components/Chart1";
export default {
  name: "HomeCard",
  components: {
    Chart1
  }
};
</script>
<style scoped>
.heading {
  text-align: center;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  );
  padding: 0;
}
.intro {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  grid-column: 2 / -2;
}
h2 {
  text-align: center;
  min-width: 100%;
  padding: 0;
  line-height: 1.4;
  font-family: serif;
  font-variant: small-caps;
}
.intro h2 {
  text-align: center;
  padding: 0;
  font-family: serif;
  font-variant: small-caps;
}
.intro p {
  font-family: serif;
  font-weight: 500;
  color:black;
  text-align: center;
  line-height: 1.25;
  font-variant: small-caps;
  font-size: 1.75em;
}
.card-body {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 0, 0.5),
      rgba(0, 0, 255, 0.5)
    ),
    url(../../public/img/icons/bullions.png);
  background-size: contain;
  background-position: center;
}
.card-body {
  color: black;
  padding-bottom: 5em;
}
.card-body img {
  min-width: 4em;
  justify-self: center;
}
</style>
