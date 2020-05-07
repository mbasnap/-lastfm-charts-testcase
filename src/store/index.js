import Vue from 'vue'
import Vuex from 'vuex'
import { lastfm } from '../plugins/lastfm'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    artists: [],
    tracks: [],
    albums: [],
    album: {}
  },
  getters: {
    artists({ artists }){
      return artists
    },
    tracks({ tracks }){
      return tracks
    },
    albums({ albums }){
      return albums
    },
    album({ album }){
      return album
    },
    loading({ loading }){
      return loading
    }
  },
  mutations: {
    artists(state, v){
      state.artists = v
    },
    tracks(state, v){
      state.tracks = v
    },
    albums(state, v){
      state.albums = v
    },
    album(state, v){
      state.album = v
    },
    loading(state, v){
      state.loading = v
    }
  },
  actions: {
    update({ commit }, [name, value]){
      commit(name, value)
      commit('loading', false)
    },
    getTopArtist({ dispatch, commit }){
      commit('loading', true)
      return lastfm.chart.getTopArtist().then(({ data }) => {
        dispatch('update', ['artists', {...data.artists}.artist])        
      }).catch(err => {
        console.log(err);
        
      })
    },
    getTopTracks({ commit }, page){
      commit('loading', true)
      return lastfm.chart.getTopTracks(page).then(({ data }) => {
        commit('loading', false)
        return {...data.tracks}.track
      }).catch(err => {
        console.log(err);
        
      })
    },
    getTopAlbums({ dispatch, commit }, artist){
      commit('loading', true)
      return lastfm.getTopAlbums(artist).then(({ data }) => {
        dispatch('update', ['albums', {...data.topalbums}.album])        
      }).catch(err => {
        console.log(err);
        
      })
    },
    getAlbumInfo({ dispatch, commit }, [artist, album]){
      commit('loading', true)
      return lastfm.getAlbumInfo(artist, album).then(({ data }) => {
        console.log(data);
        
        dispatch('update', ['album', {...data.album}])        
      }).catch(err => {
        console.log(err);
        
      })
    }
  },
  modules: {
  }
})
