<template>
  <div id="app">
    <button @click="getData">点击获取服务器数据</button>
    <!-- <div>{{acceptData}}</div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // acceptData: ''
  },
  data () {
    return {
    }
  },
  methods: {
    getData () {
      console.log('qingqiu')
      axios.get('/api')
        .then((data) => {
          // this.acceptData = data.data
          console.log(data.data)
        })
    }
  }
}
</script>

<style>
</style>
