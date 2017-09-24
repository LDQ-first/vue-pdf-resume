<template>
  <div id="app">
    <router-view></router-view>
    <buttons class="fullScreenBtn" btnText="内容全屏" Mesg="该功能尚未开发 (＞人＜；)对不起" :isShowMesg="false" 
    @click="mainContentFullScreen" />
    <asides />
  </div>
</template>

<script>
const Buttons = resolve => require(['./components/Button.vue'], resolve)
const Asides = resolve => require(['./components/Aside.vue'], resolve)
import './assets/style/reset.scss'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Buttons,
    Asides
  },
  methods: {
    mainContentFullScreen () {
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




</style>
