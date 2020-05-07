<template>
    <v-container fluid>
        <v-breadcrumbs :items="breadcrumbs" ></v-breadcrumbs>
        <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="3">
            <tile-item :value="item" @click="goTo($route.params.artist, item)"></tile-item>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TileItem from '../components/TileItem'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { TileItem },
    created() {
        this.getTopAlbums(this.$route.params.artist)
    },
    data(){
        return {
            breadcrumbs: [
                { text: this.$route.params.artist.toUpperCase() },
            ]
        }
    },
    computed: {
        ...mapGetters(['albums']),
        items({ albums, getItem }) {
            return albums.map(getItem)
        }
    },
    methods: {
        ...mapActions(['getTopAlbums']),
        getItem({ image, name: title, playcount }){
            const info = { playcount }
            return { title, image, info }
        },
        goTo(path, { title: name }) {           
            this.$router.push(`${path}/${name.toLowerCase()}`)
        }
    }
}
</script>

<style>

</style>