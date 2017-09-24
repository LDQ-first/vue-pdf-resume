<template>
    <div class="home" :class="{fullScreen: isFullScreen}">
        <sidebar />
        <mainContent />
    </div>
</template>


<script>
    import Home from './Home.js'
    export default Home
</script>


<style scoped lang="scss">
    .home {
        width: 800px;
        background: #EEE;
        height: 100vh;
        margin: 0 auto;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 10;
        &.fullScreen {
           width: 100vw;
           height: 100vh;
        }
    }
    
</style>