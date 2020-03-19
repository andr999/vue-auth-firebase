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
           <v-btn color="success" class="mr-3">
          <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn color="warning"  class="mr-3">
          <router-link to="/register">Register</router-link>
          </v-btn>
             <v-btn color="warning">
          <router-link to="/login">Login</router-link>
          </v-btn>       
      
      </div>

      <v-spacer></v-spacer>
      
    </v-app-bar>

    </div>
</template>

    
</style>

<script>
export default {
    
}
</script>