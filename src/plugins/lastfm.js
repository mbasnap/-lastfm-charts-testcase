import axios from 'axios'

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/'
const API_KEY = 'c2797e2442ddb38a50280e1e697fa316'

const lastfm = {
  chart: {
    getTopArtist: () => axios.get(`${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json`),
    getTopTracks: (page) => axios.get(`${BASE_URL}?method=chart.gettoptracks&page=${page}&api_key=${API_KEY}&format=json`),
  },
  getTopAlbums: (artist) => axios.get(`${BASE_URL}?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`),
  getAlbumInfo: (artist, album) => axios.get(`${BASE_URL}?method=album.getinfo&artist=${artist}&album=${album}&api_key=${API_KEY}&format=json`),

}

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$lastfm', {value: lastfm})
  }
}
export {
  lastfm
}