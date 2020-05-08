<template>
    <v-container fluid>
        <v-row>
        <v-col v-for="(item, i) in values" :key="i" :cols="cols">
            <tile-item :value="getValue(item)"
            @click="goTo('music', getValue(item).title)"></tile-item>
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
        ...mapGetters({ values: 'tracks' }),
        action() {
            return this.$lastfm.chart.getTopTracks
        },
        page({ pages }) {
            return pages.tracks || 1
        }
    },
    methods: {
        getValue({ artist, name: subtitle, image, listeners, playcount }){
            const { name: title } = {...artist}
            const info = { listeners, playcount }
            return { title, subtitle, image, info }
        },
        setValues({ '@attr': attr, track = [] }) {
            const { $store, page, values } = this
            if (page > {...attr}.totalPages) return
            $store.commit('pages', { tracks: page + 1 })
            $store.commit('tracks', [...values, ...track])
            return true
        }
    }
}
</script>

<style>

</style>