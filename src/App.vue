<template>
  <router-link to="/about">about</router-link>
  --------
  <router-link to="/test">test</router-link>
  --------
  <router-link to="/test/test2">test2</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
