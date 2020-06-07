/* eslint-disable */
<template>
  <v-card class="v-flex intro">
    <div class="heading">
      <v-card-title>
        <h1>Welcome to CatScrapper.com</h1>
      </v-card-title>
      <v-card-subtitle>
        <h2>Recyclers & processors of retired catalytic convertors</h2>
      </v-card-subtitle>
    </div>
    <div class="card-body">
      <v-card-text>
        <p>
          We aim to provide a bespoke <span><em>Cats to Cash</em></span> service
          for commercial & hobbyist recyclers<br /><br />
          For all enthusiasts and collectors please browse out site where you
          will find current catalytic convertor recyling news.<br /><br />
          Checkout the realtime precious metal prices
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
  background-color: burlywood;
}
.intro {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.intro h1 {
  text-align: center;
  min-width: 100%;
  text-shadow: 0 0 3px #0000dd;
  padding: 0.25em;
}
.intro h2 {
  text-align: center;
  padding: 0.5em;
}
.intro p {
  font-family: serif;
  font-weight: 500;
  color: rgb(5, 63, 63);
  text-align: center;
  padding: 0.5em;
  line-height: 1.5;
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
.card-body img {
  min-width: 4em;
  justify-self: center;
}
</style>
