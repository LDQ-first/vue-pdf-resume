<template>
    <div class="sidebar">
        <div class="avatarWrapper">
            <img class="border" src="../assets/img/Mask.png" alt="">
            <div  class="avatar" alt=""></div>
        </div>
    </div>
</template>

<script>

const Avatar = resolve => require(['./Avatar.vue'], resolve)
    
export default {
    name: 'Sidebar',
    data () {
        return {

        } 
    },
    components: {
        Avatar
    },
    methods: {
        
    }
}


</script>

<style lang="scss" scoped>
    @import '../assets/style/media.scss';
    .sidebar {
        padding: 1em 0;
        width: 280px;
        height: 100%;
        background: #2196F3;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .avatarWrapper {
            position: relative;
            .avatar {
                width: 134px;
                height: 150px;
                background: url('../assets/img/ldq.jpg') no-repeat 0 0 / cover;
                position: absolute;
                left: 1px;
                top: 1px;
                z-index: 2;
                -webkit-mask-box-image: url('../assets/img/mask.svg');
            }
            .border {
                width: 136px;
                height: 152px;
                position: relative;
                left: 0px;
                top: 0px;
                z-index: 10;
            }
        }

    }
</style>
