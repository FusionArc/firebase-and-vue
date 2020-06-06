<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-email"
          type="email"
          label="email address"
          v-model="email"
        />
        <v-text-field
          prepend-icon="mdi-lock"
          label="password"
          v-model="password"
          v-bind:type="showPassword ? 'text' : 'password'"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <div v-if="feedback" class="text-center">
          <p class="red--text">{{ feedback }}</p>
        </div>
        <v-card-actions>
          <v-btn class="primary" v-on:click="login">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      showPassword: false
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .catch(() => {
            this.feedback = "Incorrect email or password";
          });
      } else {
        this.feedback = "Please enter your email address and password";
      }
    }
  }
};
</script>
