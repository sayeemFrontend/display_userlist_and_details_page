import axios from 'axios';
import { store } from '../store';

import credentials from './credentials';

const handleError = async (error = {}) => {
  if (error.response) {
    const { data } = error.response || {};
    if (data.error === 'Token expired') {
      // handle token expire
    } else {
      // handle field error
    }
  } else if (error.request) {
    // console.log(error.request);
  } else {
    // console.log(error.message);
  }
};

export async function getApi({ url = '', init = () => {}, success = () => {}, fail = () => {} }) {
  store.dispatch(init());
  try {
    const response = await axios.get(`${credentials.baseUrl}/${url}`, { headers: credentials.getHeaders() });
    if (response.status === 200) {
      store.dispatch(success({ data: { data: response.data } }));
    }
  } catch (error) {
    store.dispatch(fail({ data: 'error message' }));
    handleError(error, { url, init, success, fail });
  }
}

export async function postApi(url = '', body = {} || [], success = () => {}, fail = () => {}) {
  try {
    const response = await axios.post(`${credentials.baseUrl}/${url}`, body, { headers: credentials.getHeaders() });
    if (response.status) {
      success();
    }
  } catch (error) {
    fail();
    handleError(error, { url, body, success, fail });
  }
}
