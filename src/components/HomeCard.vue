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
    <v-card-text>
      <p>
        We aim to provide a bespoke <span><em>Cats to Cash</em></span> service for
        commercial and hobbyist recyclers<br /><br />
        For all enthusiasts and please browse out site where you will find current
        catalytic convertor recyling news.<br /><br />
        Checkout the realtime precious metal prices
      </p>
    </v-card-text>
</v-card> 
</template>
<script>
export default {
  name: "HomeCard"
};
</script>
<style scoped>
.heading{
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
  color: black;
  text-align: center;
  padding: 0.5em;
  line-height: 1.5;
  font-size: 1.75em;
}
</style>
