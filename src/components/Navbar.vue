<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title> </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text v-if="!user" @click="google">
        Login with Google
      </v-btn>
      <v-btn text v-if="!user" :to="{ name: 'Signup' }">
        Register
      </v-btn>
      <v-btn text v-if="!user" :to="{ name: 'Login' }">
        Login
      </v-btn>
      <v-btn text v-if="user">
        {{ user.email }}
      </v-btn>
      <v-btn text v-if="user" @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>
