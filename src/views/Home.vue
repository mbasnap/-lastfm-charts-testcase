<template>
    <v-container fluid>
        <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="3">
            <tile-item :value="item" @click="goTo('music', item)"></tile-item>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TileItem from '../components/TileItem'
export default {
    components: { TileItem },
    created(){
        this.getTopArtist()
    },
    data(){
        return {
            data: {}
        }
    },
    computed: {
        ...mapGetters(['artists']),
        // artists({ data }){
        //     return data.artist || []
        // },
        items({ artists, getItem }) {
            return artists.map(getItem)
        }
    },
    methods: {
        ...mapActions(['getTopArtist']),
        getItem({ name: title, image, listeners, playcount }){
            const info = { listeners, playcount }
            return { title, image, info }
        },
        goTo(path, { title: name }) {
            this.$router.push(`/${path}/${name.toLowerCase()}`)
        }
    }

}
</script>

<style>

</style>