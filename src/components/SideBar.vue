<template>
    <div class="sidebar">
        
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
        width: 280px;
        height: 100%;
        background: #2196F3;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
</style>
