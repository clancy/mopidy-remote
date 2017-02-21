// a library to wrap and simplify api calls
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import store from '../../redux/store'

const baseURL = 'https://api.spotify.com/v1/';
const getConfig = (url, method) => {
  let access_token = store.getState().settings.getIn(['spotify', 'access_token']);
  return {
    headers: {
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${access_token}`
    },
    method: method,
    url: url,
    timeout: 10000
  }
}

const api = {
  getTrack: id => {
    return Observable.ajax(getConfig(`${baseURL}tracks/${id}`, 'GET'));
  }
};

export default api;
