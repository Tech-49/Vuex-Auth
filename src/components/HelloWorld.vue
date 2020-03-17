<template>
  <div class="hello">
    <h1>{{ getCounter }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed:{
    getCounter(){
      return this.$store.getters['auth/getCounter'];
    }
  },
  props: {
    msg: String
  },
  created() {
    console.info(this.$store)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
