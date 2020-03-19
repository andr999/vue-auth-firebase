<template>
<v-container>
    <v-row align="center"
          justify="center">
      <v-col cols="4">
        <v-card class="ma-3 pa-6">
          <v-card-title>Login</v-card-title>
             <div v-if="error" class="alert alert-danger">{{error}}</div>
            <v-form @submit.prevent="submit">
                             
            <v-text-field
                  v-model="form.email"
                    name="email"
                   label="Email"
                   type="email"
                     required
          ></v-text-field>
             <v-text-field
                  v-model="form.password"
                    name="password"
                   label="Password"
                   type="password"
                     required
          ></v-text-field> 
             <v-btn color="primary" type="submit">Login</v-btn>
             
            </v-form>
          </v-card>
      </v-col>
    </v-row>
</v-container>
  

</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

