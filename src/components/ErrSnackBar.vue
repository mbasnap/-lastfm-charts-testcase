<template>
  <v-snackbar :value="err" :multi-line="true" >
      {{ err }} <v-btn color="red" text @click="hideErr" > Close </v-btn>
    </v-snackbar>
    <!-- <v-alert :value="true" border="left" close-text="Close Alert"
      color="deep-purple accent-4" dismissible
    >{{ err }}</v-alert> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['err'])
  },
  methods: {
    ...mapActions(['hideErr']),

  }
}
</script>

<style>

</style>