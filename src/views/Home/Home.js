
const Sidebar = resolve => require(['../../components/Sidebar.vue'], resolve)
const MainContent = resolve => require(['../../components/MainContent.vue'], resolve)
import { mapState } from 'vuex'
const Buttons = resolve => require(['../../components/Button.vue'], resolve)

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
        Buttons,
        Sidebar,
        MainContent
    },
    methods: {
        cancelFullScreen () {
            this.$store.commit('FullScreen', false)
        }
    }
}

