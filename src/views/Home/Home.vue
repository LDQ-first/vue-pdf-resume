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
        height: 1122px;
        margin: 4em auto;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 50;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.fullScreen {
           width: 100vw;
           height: 1122px;
           margin: 0em auto;
        }
        .cancelfullScreenBtn {
            position: fixed;
            right: 10px;
            top: 10px;
            opacity: 0;
            z-index: 1000;
            border: 1px solid #FFF;
            transition: all 0.5s ease-in-out;
            &:hover {
                opacity: 1;
            }
        }
    }
    
</style>