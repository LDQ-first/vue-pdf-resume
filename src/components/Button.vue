<template>
    <el-button class="btn" type="primary"  
    @click="undeveloped(isShowMesg)">
        {{btnText}}
    </el-button>
</template>

<script>

import { Message } from 'element-ui'
    
export default {
    name: 'Button',
    props: {
       btnText: {
           type: String,
           required: true
       },
       isShowMesg: {
           type: Boolean,
           required: true
       }, 
       Mesg: {
           type: String,
           required: false
       }
    },
    data () {
        return {
            
        } 
    },
    methods: {
         undeveloped (isShowMesg) {
            if (isShowMesg) {
                Message({
                    showClose: true,
                    message: this.Mesg
                })
            } else {
                this.$emit('click')
            }
        }
    }
}


</script>

<style lang="scss" scoped>
    .btn {
        position: fixed;
        left: 10px;
        bottom: 10px;

    }
</style>
