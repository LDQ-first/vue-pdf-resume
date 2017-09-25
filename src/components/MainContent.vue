<template>
    <div class="mainContent">
        <div class="projectWrap">
            <h2 class="title">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiangmu"></use>
                </svg>
                项目
            </h2>
            <ul class="projects">
                <li class="project">1</li>
                <li class="project">2</li>
                <li class="project">3</li>
                <li class="project">4</li>
                <li class="project">5</li>
                <li class="project">6</li>
            </ul>
        </div>
    </div>
</template>

<script>
    
export default {
    name: 'MainContent',
    data () {
        return {

        } 
    },
    components: {
        
    }, 
    methods: {
        
    }
}


</script>

<style lang="scss" scoped>
    @import '../assets/style/media.scss';
    .mainContent {
        flex: 1;
        height: 100%;
        background: #F4F4F4;
        padding: 0.5em;
        .projectWrap {
             text-align: left;
            .title {
                text-align: left;
            }
            .projects {
                margin: 0.5em 0;
                .project {
                    /*margin: 0.5em 0;*/
                    margin-left: 50px;
                    position: relative;
                    outline: 1px solid lightblue;
                    padding: 0.5em 0;
                    &::before {
                        content: '';
                        position: absolute;
                        left: -30px;
                        top: 4px;
                        width: 1em;
                        height: 1em;
                        background: #2196F3;
                        border-radius: 50%;
                        z-index: 2;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        left: -23px;
                        top: 4px;
                        width: 2px;
                        height: 100%;
                        background: #2196F3;
                        z-index: 1;
                    }
                    &:last-child {
                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>
