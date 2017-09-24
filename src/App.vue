<template>
  <div id="app">
    <router-view></router-view>
    <buttons btnText="内容全屏" Mesg="该功能尚未开发 (＞人＜；)对不起" :isShowMesg="false" 
    @click="mainContentFullScreen" />
  </div>
</template>

<script>
const Buttons = resolve => require(['./components/Button.vue'], resolve)


export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Buttons
  },
  methods: {
    mainContentFullScreen () {
      console.log('mainContentFullScreen')
      this.$store.commit('FullScreen', true)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: #EDCFFF;
}





</style>
