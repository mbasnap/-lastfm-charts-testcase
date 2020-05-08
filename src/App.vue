<template>
<!-- App.vue -->
<v-app>
  <v-app-bar app>
    <v-toolbar-title class="logo" @click="goTo('')">Top-Music</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn v-for="link in ['artists', 'tracks']" :key="link" text
      :class="['nav', {active: isActive(link)}]"
      @click="goTo(link)"> {{ link }} </v-btn>
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
    <err-snack-bar></err-snack-bar>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import ErrSnackBar from './components/ErrSnackBar'
export default {
  name: 'App',
  components: {ErrSnackBar},
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
    isActive(link) {
      return link === this.$route.name
    },
    goTo(link = '') {
      if (this.isActive(link)) return
      this.$router.push(`/${link}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo{
    cursor: pointer;
  }
  .nav.active{
    background-color:#00000026;
  }
</style>
