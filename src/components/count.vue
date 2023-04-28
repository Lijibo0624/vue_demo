<template>
  <div>
    <select v-model.number='addValue'>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="add">+</button>
    <div>{{ $store.state.sum }}</div>
    <hr/>
    <div>{{ sumCount }}</div>
  </div>
</template>

<script>
import { mapGetters } from '@/vuex'
export default {
  name: 'vuexDemo',
  data () {
    return {
      addValue: ''
    }
  },
  computed: {
    ...mapGetters()
  },
  methods: {
    add () {
      // this.$store.dispatch('add')
      this.$store.commit('Add', this.addValue)
    }
  }
}
</script>

<style>

</style>
