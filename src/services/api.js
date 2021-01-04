import axios from 'axios';
import { store } from '../store';

axios.defaults.baseURL = 'http://empreendedorismoufpi.com.br:21646/';
axios.defaults.timeout = 30000

axios.interceptors.request.use(
  request => {
    const headers = {
      locale: 'pt-br',
      accept: 'application/json',
      Authorization: store.getState().auth.token,
    };

    if (request.url.includes('files')) {
      headers.accept = '*/*'
      headers.ContentType = 'multipart/form-data'
    }

    request.headers = headers;
    return request;
  },
  err => {
    Promise.reject(err);
});

// axios.interceptors.response.use((response) => {
//   switch (response.status) {
//     case 200:
//       return response.data
//     case 400:
//       return response.data
//     case 401:
//       return response.data
//   }
// }, err => {
//   console.log(err)
// });


export default axios;


