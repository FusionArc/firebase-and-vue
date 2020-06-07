import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import firebaseConfig from "./firebase/init";
import "./registerServiceWorker";
import store from "./store";

Vue.config.productionTip = false;

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
