<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Auth Demo (Vuex)</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link active-class="active" class="nav-item nav-link" to="/users">Users</router-link>
        <router-link
          active-class="active"
          class="nav-item nav-link"
          to="/login"
          v-if="!isAuthenticated"
        >Login</router-link>
        <a
          @click.prevent="logout"
          active-class="active"
          class="nav-item nav-link"
          href="#"
          v-if="isAuthenticated"
        >Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  }
};
</script>

<style>
</style>