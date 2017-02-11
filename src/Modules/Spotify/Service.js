// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import store from '../../redux/store'

// our "constructor"
const create = (baseURL = 'https://api.spotify.com/v1/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  // Force OpenWeather API Key on all requests
  api.addRequestTransform((request) => {
    var access_token = store.getState().settings.getIn(['spotify', 'access_token']);
    request.headers['Authorization'] = `Bearer ${access_token}`;
  })

  const getTrack = (id) => api.get(`tracks/${id}`)

  return {
    getTrack
  }
}

// let's return back our create method as the default.
export default {
  create
}
