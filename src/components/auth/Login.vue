<template>
  <div>
    <h1>Login</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="email" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="isLoading">Login</b-button>&nbsp;
      <b-button type="reset" variant="danger" :disabled="isLoading">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
      isLoading: false
    };
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("auth/login", { email, password })
        .then(() => this.$router.push("users"))
        .catch(err => console.log(err))
        .finally(() => {
          this.isLoading = false;
        });
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.checked = [];
    }
  }
};
</script>