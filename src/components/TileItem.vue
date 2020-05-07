<template>
<v-skeleton-loader :loading="loading" type="card">
  <v-card max-width="375" class="mx-auto">
        <!-- <v-card-title class="title"> -->
          <div class="title">
            <!-- <router-link :to="`music/${value.title.toLowerCase()}`">{{ value.title }}</router-link> -->
          <div @click="$emit('click', value.title)" >{{ value.title }}</div>
          <div>{{ value.subtitle }}</div>
          </div>
        <!-- </v-card-title> -->
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
export default {
    props: { value: Object },
    computed: {
      ...mapGetters(['loading']),
        img({ value }){
            return value.image.reduce((cur, v) => ({ ...cur, [v.size]: v['#text']}), {})
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