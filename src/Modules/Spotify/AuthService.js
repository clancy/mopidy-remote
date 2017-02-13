// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import store from '../../redux/store'

// our "constructor"
const create = (baseURL = 'http://thawing-basin-74614.herokuapp.com/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const refreshToken = (refresh_token) => api.get('refresh_token', {refresh_token: refresh_token})

  return {
    refreshToken
  }
}

// let's return back our create method as the default.
export default {
  create
}
