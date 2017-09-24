import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import moduleHome from './module/moduleHome.js'


export default new Vuex.Store({
    modules: {
        home: moduleHome
    }
})   


