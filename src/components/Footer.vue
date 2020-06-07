<template>
  <v-footer padless dark app>
    <!-- <p class="footer-text"> &copy; CATSCRAPPER.COM 2020</p>  -->
    <v-card class="flex">
      <v-card-text class="py-2 text-center primary white--text">
        <strong> &copy; CATSCRAPPER.COM</strong> {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
