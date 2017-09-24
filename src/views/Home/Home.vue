<template>
    <div class="home" :class="{fullScreen: isFullScreen}">
        <buttons class="cancelfullScreenBtn" btnText="退出内容全屏" :isShowMesg="false" @click="cancelFullScreen"/>
        <sidebar />
        <mainContent />
    </div>
</template>


<script>
    import Home from './Home.js'
    export default Home
</script>


<style scoped lang="scss">
    @import '../../assets/style/media.scss';
    .home {
        width: 800px;
        background: #F4F4F4;
        height: 100vh;
        margin: 0 auto;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 50;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.fullScreen {
           width: 100vw;
           height: 100vh;
        }
        .cancelfullScreenBtn {
            position: fixed;
            right: 10px;
            top: 10px;
            opacity: 0;
            z-index: 100;
            transition: all 0.5s ease-in-out;
            &:hover {
                opacity: 1;
            }
        }
    }
    
</style>