<template>
  <div class="intro v-card">
    <h1>Welcome to CatScrapper.com</h1>
    <h2>Recyclers & processors of retired catalytic convertors</h2>
    <p>
      We aim to provide a bespoke <span><em>Cats to Cash</em></span> service for
      commercial and hobbyist recyclers.<br /><br />
      For all enthusiasts and please browse out site where you will find current
      catalytic convertor recyling news.<br /><br />
      Checkout the realtime precious metal prices
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.intro {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.intro h1 {
  grid-row: 1/2;
  grid-column: 1/-1;
  background-color: powderblue;
  text-shadow: 0 0 3px #0000dd;
  padding: 0.25em;
}
.intro h2 {
  grid-row: 2/3;
  grid-column: 1/-1;
  padding: 0.5em;
}
.intro p {
  grid-column: 1/-1;
  padding: 0.5em;
  line-height: 1.4;
  font-size: 1.2em;
}
</style>
