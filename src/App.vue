<template>
  <div id="app">
    <animate/>
  </div>
</template>

<script>
import animate from './components/animate'

export default {
  name: 'App',
  components: {
    animate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
