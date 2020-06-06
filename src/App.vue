<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app color="primary" dark class="justify-center">
      <p class="small"><small>&copy; catscrapper.com 2020</small></p>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  }
};
</script>
