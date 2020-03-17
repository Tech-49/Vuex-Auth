<template>
  <h1>Users</h1>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  }
};
</script>

<style>
</style>