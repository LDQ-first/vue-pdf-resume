
const Sidebar = resolve => require(['../../components/Sidebar.vue'], resolve)
const MainContent = resolve => require(['../../components/MainContent.vue'], resolve)
import { mapState } from 'vuex'

export default {
    name: 'Home',
    data () {
        return {

        } 
    },
    computed: {
        ...mapState({
            isFullScreen: state => state.home.isFullScreen
        })
    },
    components: {
        Sidebar,
        MainContent
    },
    methods: {
        
    }
}

