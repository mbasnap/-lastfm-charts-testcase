import { mapActions, mapGetters } from 'vuex'
import TileItem from '../components/TileItem'
export default {
    components: { TileItem },
    created(){
        if (!this.values.length) this.loadItems()
    },
    computed: {
        ...mapGetters(['pages', 'loading']),
        values() { return [] },
        params() {
            return {...this.$route.params}
        },
        breakpoint() {
            return this.$vuetify.breakpoint
        },
        cols({ breakpoint }) {
            switch (breakpoint.name) {
                case 'xs': return 12
                case 'sm': return 6
                case 'md': return 3
                case 'lg': return 3
                case 'xl': return 3
            }
        }
    },
    methods: {
        ...mapActions(['load']),
        infiniteHandler($state) {            
            this.loadItems().then(loaded => {
                if (loaded) {                   
                    $state.loaded()
                } else $state.complete()
            })
        },
        loadItems() {
            const { action, page } = this
            return this.load([action, page]).then(v => this.setValues({...v}))
                // .catch(err => console.log(err))
        },
        goTo(path, name) {
            this.$router.push(`/${path}/${name.toLowerCase()}`)
        }
    }
}