<template>
    <div>
        <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <template v-if="user.loggedIn">
            <div>{{user.data.displayName}}</div>
            <v-btn @click.prevent="signOut" class="ml-4">Sign out</v-btn>
        </template>
          <template v-else>
               <v-btn color="success" class="ml-4">
                 <router-link to="login">Login</router-link>
            </v-btn>
              <v-btn color="success" class="ml-4">
                  <router-link to="register">Register</router-link>
              </v-btn>
              
            </template>
              
      
      </div>

      <v-spacer></v-spacer>
      
    </v-app-bar>

    </div>
</template>

<style scoped>
    
</style>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>