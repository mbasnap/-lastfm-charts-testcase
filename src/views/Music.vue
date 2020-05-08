<template>
    <v-container fluid>
        <v-breadcrumbs :items="breadcrumbs" ></v-breadcrumbs>
        <v-row>
        <v-col v-for="(item, i) in values" :key="i" :cols="cols">
            <tile-item :value="getValue(item)"
            @click="goTo(params.artist, getValue(item).title)"></tile-item>
        </v-col>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import infiniteHandler from '../mixins/infiniteHandler'
export default {
    mixins: [infiniteHandler],
    computed: {
        ...mapGetters(['artist']),
        action() {
            return this.$lastfm.getTopAlbums
        },
        page({ artist, params }) {
            return {...artist[params.artist]}.page || 1
        },
        values({ artist, params }) {
            return {...artist[params.artist]}.albums || []
        },
        breadcrumbs({ params }) {
            return [
                { text: params.artist.toUpperCase() },
            ]
        }
    },
    methods: {
        loadItems() {
            const { action, params, page } = this
            return this.load([action, params.artist, page]).then(this.setValues)
        },
        getValue({ name: title, image, playcount }){
            const info = { playcount }
            return { title, image, info }
        },
        setValues({ '@attr': attr, album }) {
            const { $store, params, page, values } = this
            if (page > attr.totalPages) return    
            const albums = [...values, ...album]
            const artist = {...this.artist, [params.artist]: { albums, page:  page + 1 }}
            $store.commit('artist', artist)
            return true
        },
        goTo(path, name) {           
            this.$router.push(`${path}/${name.toLowerCase()}`)
        }
    }
}
</script>

<style>

</style>