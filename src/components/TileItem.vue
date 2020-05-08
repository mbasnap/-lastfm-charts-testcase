<template>
<v-skeleton-loader :loading="loading" type="card">
  <v-card max-width="375" class="mx-auto" @click="$emit('click')">
          <div class="title">
          <v-list-item-title>{{ toTitleCase(value.title) }}</v-list-item-title>
          <v-list-item-title>{{ toTitleCase(value.subtitle) }}</v-list-item-title>
          </div>
    <v-img :src="img.large" height="300px" dark>
      <v-row class="fill-height">
        <v-spacer></v-spacer>
      </v-row>
    </v-img>
    <v-list >
      <v-list-item v-for="([key, value]) in Object.entries(value.info)" :key="key">
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
</template>

<script>
import { mapGetters } from 'vuex'
import { img } from '../mixins'
export default {
    mixins: [img],
    props: { value: Object },
    computed: {
      ...mapGetters(['loading'])
    },
    methods: {
      toTitleCase(v = '') {
        return v.split(' ')
          .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
            .join(' ')
      }
    }
}
</script>

<style lang='scss' scoped>
    .v-card{
        box-shadow: none;
    }
    .title{
      height: 60px;
      font-size: 18px !important;
      cursor: pointer;
      background-color: #0e0e0e30;
      line-height: 25px;
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
    }
</style>