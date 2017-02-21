// a library to wrap and simplify api calls
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import store from '../../redux/store'

const baseURL = 'http://thawing-basin-74614.herokuapp.com/';
const getConfig = (url, method) => {
  return {
    headers: {
      'Cache-Control': 'no-cache'
    },
    method: method,
    url: url,
    timeout: 10000
  }
}

const api = {
  refreshToken: refresh_token => {
    return Observable.ajax(getConfig(`${baseURL}refresh_token/?refresh_token=${refresh_token}`, 'GET'));
  }
};

export default api;
