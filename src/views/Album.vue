<template>
<v-container fluid>
    <v-breadcrumbs :items="breadcrumbs" ></v-breadcrumbs>
    <v-row>
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
        <v-col>
            <v-skeleton-loader :loading="loading" type="table-tbody">
            <v-data-table :headers="headers" :items="tracks" hide-default-footer></v-data-table>
            </v-skeleton-loader>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    created() {
        const { artist, album } = this.$route.params
        this.getAlbumInfo([artist, album])
    },
    data(){
        return {
            headers: [
                { value: 'index'},
                { align: 'start', value: 'name'},
                { align: 'end', text: "duration", value: 'duration' }
            ],
            breadcrumbs: [
                { text: this.$route.params.artist.toUpperCase(),
                    disabled: false,
                    href: `/music/${this.$route.params.artist}`
                },
                { text: this.$route.params.album.toUpperCase() }
            ],
        }
    },
    computed: {
        ...mapGetters(['album', 'loading']),
        published({ album }){
            return {...album.wiki}.published
        },
        tracks({ album }){
            return ({...album.tracks}.track || [])
                .map((v, i) => ({...v, index: i + 1 }))
        },
        info({ album }){
            const { playcount, listeners } = album
            return { playcount, listeners }
        },
        img({ album }){
            return (album.image || []).reduce((cur, v) => ({ ...cur, [v.size]: v['#text']}), {})
        }
    },
    methods: {
        ...mapActions(['getAlbumInfo']),
        getItem({ image, name: title, playcount }){
            const info = { playcount }
            return { title, image, info }
        },
        goTo(path, { title: name }) {
            this.$router.push(`/${path}/${name.toLowerCase()}`)
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