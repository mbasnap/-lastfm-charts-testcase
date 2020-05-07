<template>
<!-- App.vue -->
<v-app>
  <v-app-bar app>
    <v-toolbar-title>Top-Music</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn v-for="link in ['artists', 'tracks']" :key="link" text
      @click="$router.push(`/${link}`)"> {{ link }} </v-btn>
    <v-spacer></v-spacer>
    
      <v-progress-linear v-show="loading" :active="loading" :indeterminate="loading" absolute bottom color="deep-purple accent-4"></v-progress-linear>
  </v-app-bar>
  <v-content>
      <router-view></router-view>
  </v-content>

  <v-footer padless>
    <v-row justify="center" class="py-4 white--text">
        {{ new Date().getFullYear() }} — <strong> Vuetify </strong>
    </v-row>
  </v-footer>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>
