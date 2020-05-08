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
        ...mapGetters({ values: 'artists' }),
        action() {
            return this.$lastfm.chart.getTopArtists
        },
        page({ pages }) {
            return pages.artists || 1
        }
    },
    methods: {
        getValue({ name: title, image, listeners, playcount }){
            const info = { listeners, playcount }
            return { title, image, info }
        },
        setValues({ '@attr': attr, artist = [] }) {
            const { $store, page, values } = this
            if (page > {...attr}.totalPages) return
            $store.commit('pages', { artists: page + 1 })
            $store.commit('artists', [...values, ...artist])
            return true
        }
    }
}
</script>

<style>

</style>