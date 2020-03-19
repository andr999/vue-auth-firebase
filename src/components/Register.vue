<template>
<v-container>
    <v-row align="center"
          justify="center">
      <v-col cols="4">
        <v-card class="ma-3 pa-6">
          <v-card-title>Register</v-card-title>
             <div v-if="error" class="alert alert-danger">{{error}}</div>
            <v-form @submit.prevent="submit">
                  <v-text-field
                  v-model="form.name"
                    name="name"
                   label="Name"
                     required
          ></v-text-field>
           
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
             <v-btn color="primary" type="submit">Register</v-btn>
             
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
        name: "",
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              this.$router.replace({
            name: "home"
          });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>