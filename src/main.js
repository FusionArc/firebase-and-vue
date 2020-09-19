import Vue from "vue"
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "./registerServiceWorker";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBgChysO0s7ym3lhJCIMEkytN7UJY5CqHk",
  authDomain: "cat-scrapper.firebaseapp.com",
  databaseURL: "https://cat-scrapper.firebaseio.com",
  projectId: "cat-scrapper",
  storageBucket: "cat-scrapper.appspot.com",
  messagingSenderId: "757111003528",
  appId: "1:757111003528:web:6c27d65679515fca24c23d",
  measurementId: "G-9DQ1ZWYXE9"
};

firebase.initializeApp(firebaseConfig);

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
