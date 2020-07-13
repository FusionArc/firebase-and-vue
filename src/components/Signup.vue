<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Register for an account</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field class="email-field"
          prepend-icon="mdi-email"
          type="email"
          label="Enter a valid email"
          v-model="email"
        />
          <div v-if="feedback" class="text-center">
            <p class="red--text">{{ feedback }}</p>
          </div>
        <v-text-field
          prepend-icon="mdi-lock"
          label="Enter a password"
          v-model="password"
          v-bind:type="showPassword ? 'text' : 'password'"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <div v-if="feedback" class="text-center">
          <p class="red--text">{{ feedback }}</p>
        </div>
        <v-text-field
          prepend-icon="mdi-verified"
          label="Verify Password"
          v-model="password2"
          v-bind:type="showPassword2 ? 'text' : 'password2'"
          v-bind:append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword2 = !showPassword2"
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
      password2: null,
      feedback: null,
      showPassword: false,
      showPassword2: false
    };
  },
  methods: {
    signup() {
      if (!this.email) {
        this.feedback = "Please enter a valid email address";
        if (this.password.length < 8) {
          this.feedback = "Password must be 8 characters or greater";
          if (this.password2 != this.password) {
            this.feedback = "Passwords do not match, please try again";
          }
        }
      }
      //this.feedback = null;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
    }
  }
};
</script>