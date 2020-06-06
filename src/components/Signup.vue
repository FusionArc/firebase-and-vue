<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Register for an account</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-email"
          type="email"
          label="Enter a valid email"
          v-model="email"
        />
        <v-text-field
          prepend-icon="mdi-lock"
          label="Choose a password"
          v-model="password"
          v-bind:type="showPassword ? 'text' : 'password'"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <div v-if="feedback" class="text-center">
          <p class="red--text">{{ feedback }}</p>
        </div>
        <v-card-actions>
          <v-btn class="primary" v-on:click="signup">Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      showPassword: false
    };
  },
  methods: {
    signup() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .catch(() => {
            this.feedback = "Incorrect email address or password";
          });
      } else {
        this.feedback = "Please enter your email address and password";
      }
    }
  }
};
</script>
