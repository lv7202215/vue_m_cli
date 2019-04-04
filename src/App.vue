<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "index",
    data () {
      return {
        spinShow: true
      }
    },
    created () {
      axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('logout')
                    .then()
                    .catch()
          }
          throw err;
        });
      });
    },
  }
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Regular,Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
