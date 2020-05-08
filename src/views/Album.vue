<template>
<v-container fluid>
    <v-breadcrumbs :items="breadcrumbs" ></v-breadcrumbs>
    <v-row :style="{'flex-direction': width < 800 ? 'column' : 'row'}">
        <v-col>
        <v-skeleton-loader :loading="loading" type="card">

            <v-card class="mx-auto" tile  max-width="434">
                <v-img height="100%" :src="img.extralarge">
                <v-row align="end" class="fill-height" >
                    <v-col class="py-0">
                        <v-list-item class="list__item" color="rgba(0, 0, 0, .4)" dark  >
                            <v-list-item-content>
                            <v-list-item-title class="title">{{ album.artist }}</v-list-item-title>
                            <v-list-item-subtitle>{{ album.name }}</v-list-item-subtitle>
                            <v-list-item-subtitle>{{ published }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
                </v-img>
                <v-list >
                <v-list-item v-for="([key, value]) in Object.entries(info)" :key="key">
                    <v-list-item-content>
                    <v-list-item-title>{{ key }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                    <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>
</v-skeleton-loader>
        </v-col>
        <v-col >
            <v-skeleton-loader :loading="loading" type="table-tbody">
            <v-data-table :headers="[{ value: 'index', text: '№'}, { align: 'start', text: 'name', value: 'name'}, { align: 'end', text: 'duration', value: 'duration' }]"
            :items="tracks" hide-default-footer></v-data-table>
            </v-skeleton-loader>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import {infiniteHandler, img} from '../mixins'
export default {
    mixins: [infiniteHandler, img],
    computed: {
        ...mapGetters(['album']),
        value({ album, key }) {
            return { ...album[key] }
        },
        published({ value }){
            return {...value.wiki}.published
        },
        tracks({ value }){
            return ({...value.tracks}.track || [])
                .map((v, i) => ({...v, index: i + 1 }))
        },
        info({ value }){
            const { playcount, listeners } = value
            return { playcount, listeners }
        },
        action() {
            return this.$lastfm.getAlbumInfo
        },
        breadcrumbs({ params }) {
            const { artist, album } = params
            return [
                { text: artist.toUpperCase(), disabled: false, href: `#/music/${artist}` },
                { text: album.toUpperCase() }
            ]
        },
        key({ params }){
            const { artist, album } = params
            return `${artist}-${album}`
        },
        width({ breakpoint }) {            
            return breakpoint.width
        }
    },
    methods: {
        loadItems() {
            const { action, params } = this            
            const { artist, album } = params
            return this.load([action, artist, album]).then(this.setValues)
        },
        getValue({ name: title, image, listeners, playcount }){
            const info = { listeners, playcount }
            return { title, image, info }
        },
        setValues(value) {
            const { album, key } = this
            this.$store.commit('album', {...album, [key]: value })
        }
    }
}
</script>

<style lang="scss" scoped>
    .list{
        &__item{
            background-color: #000000c2;
        }
    }
</style>