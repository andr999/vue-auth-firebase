<template>
<v-container>
    <v-row align="center"
          justify="center">
      <v-col cols="4">
        <v-card class="ma-3 pa-6">
          <v-card-title>Dashboard</v-card-title>
             <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
                             
            
          </v-card>
      </v-col>
    </v-row>
</v-container>
  </template>
  <script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>