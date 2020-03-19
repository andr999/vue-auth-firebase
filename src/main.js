import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase";

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyARsLCsbDwk9eBr-cKWdeEIwUwgS6MwZwI",
  authDomain: "fir-auth-vue-2fac1.firebaseapp.com",
  databaseURL: "https://fir-auth-vue-2fac1.firebaseio.com",
  projectId: "fir-auth-vue-2fac1",
  storageBucket: "fir-auth-vue-2fac1.appspot.com",
  messagingSenderId: "232105108873",
  appId: "1:232105108873:web:23d70500c0434023c1ed58"

};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
