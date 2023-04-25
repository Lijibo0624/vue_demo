<template>
  <div>
    <button @click="add">+</button>
    <!-- <div>{{ sum }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'vuexDemo',
  data () {
    return {
      // sum: 0
    }
  },
  methods: {
    add () {
      // this.sum++
      console.log(this.$store)
    }
  }
}
</script>

<style>

</style>
