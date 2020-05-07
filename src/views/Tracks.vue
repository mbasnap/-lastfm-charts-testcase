<template>
    <v-container fluid>
        <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="3">
            <tile-item :value="item" @click="goTo('music', item)"></tile-item>
        </v-col>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </v-row>
    </v-container>
</template>

<script>
import TileItem from '../components/TileItem'
import { mapActions } from 'vuex'
export default {
    components: { TileItem },
    created(){
        this.getTopTracks(this.page).then(v => {
            this.tracks = v
        })
    },
    data() {
        return {
            page: 1,
            tracks: []
        }
    },
    computed: {
        items({ tracks, getItem }) {
            return tracks.map(getItem)
        }
    },
    methods: {
        ...mapActions(['getTopTracks']),
        infiniteHandler($state) {
            this.getTopTracks(this.page).then(v => {
                if (v.length) {
                    this.page += 1
                    this.tracks.push(...v);
                    $state.loaded()
                } else $state.complete()
            })
        },
        getItem({ artist, name: subtitle, image, listeners, playcount }){
            const { name: title } = {...artist}
            const info = { listeners, playcount }
            return { title, subtitle, image, info }
        },
        goTo(path, { title: name }) {
            this.$router.push(`/${path}/${name.toLowerCase()}`)
        }
    }

}
</script>

<style>

</style>