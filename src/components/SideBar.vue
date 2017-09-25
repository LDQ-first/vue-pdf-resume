<template>
    <div class="sidebar">
        <div class="avatarWrapper">
            <img class="border" src="../assets/img/Mask.png">
            <div class="avatar" alt="刘德铨" title="刘德铨"></div>
        </div>
        <div class="name-job">
            <h1 class="name">刘德铨</h1>
            <h2 class="job">前端工程师</h2>
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
        .name-job {
            width: 100%;
            padding: 1em 0;
            background: rgba(0, 0, 0, 0.3);
            .name {
                color: #EEE;
                font-size: 20px;
            }
            .job {
                font-size: 18px;
                color: #ED5527;
                text-shadow: 0 1px 0 #ccc,
                             0 6px 1px rgba(0,0,0,0.1),
                             0 0 5px rgba(0,0,0,0.1);
            }
        }

    }
</style>
