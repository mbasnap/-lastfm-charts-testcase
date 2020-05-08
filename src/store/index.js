import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    artists: [],
    tracks: [],
    artist: {},
    album: {},
    pages: {},
    err: ''
  },
  getters: {
    artists({ artists }){
      return artists
    },
    tracks({ tracks }){
      return tracks
    },
    artist({ artist }){
      return artist
    },
    album({ album }){
      return album
    },
    pages({ pages }){
      return pages
    },
    loading({ loading }){
      return loading
    },
    err({ err }){
      return err
    }
  },
  mutations: {
    artists(state, v){
      state.artists = v
    },
    tracks(state, v){
      state.tracks = v
    },
    artist(state, v){
      state.artist = v
    },
    album(state, v){
      state.album = v
    },
    pages(state, v = {}){
      state.pages = {...state.pages, ...v}
    },
    loading(state, v){
      state.loading = v
    },
    err(state, v){
      state.err = v
    }
  },
  actions: {
    hideErr({ commit }) {
      commit('err', '')
    },
    load({ commit }, [action, ...params]){
      commit('loading', true)
      return action(...params).then(v => {
        commit('loading', false)
        return v
      }).catch(({ response }) => { 
        const { message } = response.data
        commit('loading', false)
        commit('err', message)
      })
    }
  },
  modules: {}
})
