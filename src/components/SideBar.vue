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
        <!--
            HTML CSS JavaScript ES6/7 SASS Vue React Nodejs Webpack
        -->
        <div class="skill">
            <h2 class="title">

                技能
            </h2>
            <div class="html text">HTML</div>
            <div class="css text">CSS</div>
            <div class="JavaScript text">JavaScript(ES3~7)</div>
            <div class="Sass text">Sass</div>
            <div class="Vue text">Vue</div>
            <div class="React text">React</div>
            <div class="Nodejs text">Nodejs</div>
            <div class="Webpack text">Webpack</div>
        </div>
        <div class="contact">
            
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
        padding: 0.5em 0;
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
            padding: 0.5em 0;
            background: rgba(103, 58, 183, 0.2);
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
        .skill {
             margin-top: 0.5em;
             position: relative;
             overflow: hidden;
             color: #FFF;
             width: 100%;
             height: calc(36% + 40px);
             .title {
                 font-size: 18px;
             }
             .text {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 text-shadow: 0 1px 0 #ccc,
                             0 4px 1px rgba(0,0,0,0.1),
                             0 0 5px rgba(0,0,0,0.1);
             }
             .html {
                 width: 90px;
                 height: 90px;
                 border-radius: 50%;
                 background: rgba(226, 76, 41, 0.8);
                 background: rgba(244, 67, 54, 0.8);
                 position: absolute;
                 top: 44px;
                 left: 10px;
             }
             .css {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 background: rgba(20, 100, 196, 0.8);
                 background: rgba(25, 118, 210, 0.8);
                 position: absolute;
                 top: 40px;
                 left: 80px;
                 z-index: 12;
             }
             .JavaScript {
                 width: 180px;
                 height: 140px;
                 border-radius: 50% / 70px;
                 background: rgba(248, 222, 31, 0.8);
                 background: rgba(255, 214, 0, 0.8);
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 transform: translate(-50%, -50%);
                 z-index: 10;
             }
             .Sass {
                 width: 80px;
                 height: 80px;
                 border-radius: 50%;
                 background: rgba(204, 102, 153, 0.8);
                 background: rgba(230, 70, 127, 0.8);
                 position: absolute;
                 top: 40px;
                 left: 170px;

             }
             .Vue {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 background: rgba(65, 184, 131, 0.8);
                 position: absolute;
                 top: 170px;
                 left: 10px;
                 z-index: 9;
             }
             .React {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 background: rgba(97, 218, 251, 0.8);
                 position: absolute;
                 top: 180px;
                 left: 80px;
                 z-index: 13;
             }
             .Nodejs {
                 width: 70px;
                 height: 70px;
                 border-radius: 50%;
                 background: rgba(2, 110, 0, 0.8);
                 position: absolute;
                 top: 110px;
                 left: 210px;
                 z-index: 11;
             }
             .Webpack {
                 width: 80px;
                 height: 80px;
                 border-radius: 50%;
                 background: rgba(85, 106, 221, 0.8);
                 position: absolute;
                 top: 170px;
                 right: 10px;
                 z-index: 10;
             }
        }
        .contact {
            flex: 1;
            width: 100%;
            outline: 1px solid lightblue;
        }

    }
</style>
