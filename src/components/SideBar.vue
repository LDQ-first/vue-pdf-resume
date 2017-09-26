<template>
    <div class="sidebar">
        <div class="avatarWrapper">
            <img class="border" src="../assets/img/Mask.png" v-show="!isFirefox()">
            <div class="avatar" alt="刘德铨" title="刘德铨"></div>
             <div class="name-job">
                <h1 class="name">刘德铨</h1>
                <h2 class="job">前端工程师</h2>
            </div>
        </div>
        <div class="des">
            <h2 class="title">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bokefenxiang"></use>
                </svg>
                自我描述
            </h2>
            <p class="content">我是一个充满热情，有耐心，有强大自我驱动力的前端工程师</p>
        </div>
       
        <!--
            HTML CSS JavaScript ES6/7 SASS Vue React Nodejs Webpack
        -->
        <div class="skillWrap">
            <h2 class="title">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jineng"></use>
                </svg>
                技能
            </h2>
            <div class="skill">
                <div class="html text">HTML</div>
                <div class="css text">CSS</div>
                <div class="JavaScript text">JavaScript(ES3~7)</div>
                <div class="Sass text">Sass</div>
                <div class="Vue text">Vue</div>
                <div class="React text">React</div>
                <div class="Nodejs text">Nodejs</div>
                <div class="Webpack text">Webpack</div>
            </div>
        </div>
        
        <div class="contact">
            <h2 class="title">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-lianxifangshi3"></use>
                </svg>
                联系方式
            </h2>
            <ul class="lists">
                <li class="list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouji"></use>
                    </svg>
                    手机：18826136763
                </li>
                <li class="list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wechat-copy"></use>
                    </svg>
                    微信：18826136763
                </li>
                <li class="list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youxiang"></use>
                    </svg>
                    163邮箱：18826136763@163.com
                </li>
                <li class="list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youxiang"></use>
                    </svg>
                    qq邮箱：2320975287@qq.com
                </li>
            </ul>
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
        isFirefox () {
            return navigator.userAgent.indexOf('Firefox') > -1
        }
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
        justify-content: space-between;
        align-items: center;
        .avatarWrapper {
            position: relative;
             width: 100%;
            height: 252px;
            .avatar {
                width: 134px;
                height: 150px;
                background: url('../assets/img/ldq.jpg') no-repeat 0 0 / cover;
                position: absolute;
                left: 50%;
                top: 1px;
                z-index: 2;
                -webkit-mask-box-image: url('../assets/img/mask.svg');
                transform: translateX(-50%);
            }
            .border {
                width: 136px;
                height: 152px;
                position: relative;
                left: 0px;
                top: 0px;
                z-index: 10;
            }
            .name-job {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 1em 0;
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
        }
        .des {
            padding: 1em 4em;
            color: #FFF;
            .title {
                font-size: 18px;
                margin-bottom: 1em;
            }
        }
        .skillWrap {
            width: 100%;
            height: calc(26% + 30px + 1em);
            margin-top: 1em;
            .title {
                 font-size: 18px;
                 margin-bottom: 1em;
             }
        }
        .skill {
             position: relative;
             overflow: hidden;
             color: #FFF;
             height: calc(100% - 30px - 1em);
             font-size: 14px;
             .text {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 text-shadow: 0 1px 0 #ccc,
                             0 4px 1px rgba(0,0,0,0.1),
                             0 0 5px rgba(0,0,0,0.1);
                &:hover {
                    animation: shakeIcon 1s ease-in;
                }
             }
             .html {
                 width: 80px;
                 height: 80px;
                 border-radius: 50%;
                 background: rgba(244, 67, 54, 0.8);
                 position: absolute;
                 top: 24px;
                 left: 10px;
             }
             .css {
                 width: 90px;
                 height: 90px;
                 border-radius: 50%;
                 background: rgba(25, 118, 210, 0.8);
                 position: absolute;
                 top: 20px;
                 left: 80px;
                 z-index: 12;
             }
             .JavaScript {
                 width: 180px;
                 height: 140px;
                 border-radius: 50% / 70px;
                 background: rgba(255, 214, 0, 0.8);
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 margin-left: -90px;
                 margin-top: -70px;
                 z-index: 10;
             }
             .Sass {
                 width: 80px;
                 height: 80px;
                 border-radius: 50%;
                 background: rgba(230, 70, 127, 0.8);
                 position: absolute;
                 top: 20px;
                 left: 170px;

             }
             .Vue {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 background: rgba(65, 184, 131, 0.8);
                 position: absolute;
                 top: 160px;
                 left: 10px;
                 z-index: 9;
             }
             .React {
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                 background: rgba(97, 218, 251, 0.8);
                 position: absolute;
                 top: 170px;
                 left: 90px;
                 z-index: 13;
             }
             .Nodejs {
                 width: 70px;
                 height: 70px;
                 border-radius: 50%;
                 background: rgba(2, 110, 0, 0.8);
                 position: absolute;
                 top: 90px;
                 left: 200px;
                 z-index: 11;
             }
             .Webpack {
                 width: 80px;
                 height: 80px;
                 border-radius: 50%;
                 background: rgba(85, 106, 221, 0.8);
                 position: absolute;
                 top: 160px;
                 right: 10px;
                 z-index: 10;
             }
        }
        .contact {
            width: 100%;
            padding: 1em 0;
            color: #FFF;
            font-size: 14px;
            padding-left: 10px;
            .title {
                font-size: 18px;
                margin-bottom: 1em;
            }
            .lists {
                .list {
                    text-align: left;
                    margin: 12px 6px;
                }
            }
        }

    }
</style>
