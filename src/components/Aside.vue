<template>
    <aside class="aside">
        <ul class="lists">
            <li v-for="(item, index) in asideArr" :key="index">
                <a class="link" :href="item.link" target="_blank" >
                    {{item.tag}}
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    
export default {
    name: 'Aside',
    data () {
        return {
            asideArr: [
                { tag: 'PDF下载', link: 'https://ldq-first.github.io/vue-pdf-resume/static/result/刘德铨-应聘前端开发-2017.pdf' },
                { tag: '源码', link: 'https://github.com/LDQ-first/vue-pdf-resume' },
                { tag: 'GitHub', link: 'https://github.com/LDQ-first' },
                { tag: '在线简历', link: 'http://ldqblog.me/react-resume/dist/#/' }
            ]
        } 
    },
    methods: {
        
    }
}


</script>

<style lang="scss" scoped>
    @import '../assets/style/media.scss';
    .aside {
        position: fixed;
        right: 0;
        top: 30%;
        z-index: 10;
    }

    .aside ul li {
        list-style: none;
        background: #00A68F;
        margin-bottom: 10px;
        border-radius: 10px 0 0 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
                    0 3px 1px -2px rgba(0,0,0,.2),
                    0 1px 5px 0 rgba(0,0,0,.12);
    }

    .aside a {
        display: inline-block;
        width: 80px;
        height: 38px;
        line-height: 38px;
        padding-left: 10px;
        color: #FFF;
    }
</style>
