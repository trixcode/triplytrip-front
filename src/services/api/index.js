/* eslint-disable */
import 'isomorphic-fetch';
import merge from 'lodash/merge';
import { apiUrl } from '../../config';
import { FIRST_INDEX_OF_ARRAY, HTTP_INTERNAL_SERVER_ERROR_CODE } from '../constants';

const checkStatus = (response) => {
  if (response.ok) {
    return response.json();
  }
  if (response.status >= HTTP_INTERNAL_SERVER_ERROR_CODE) {
    return {
      throwError: true,
      json: {
        message:
          'Ошибка на сервере! Если ошибка не исчезнет в ближайшее время - обратитесь к администратору',
      },
    };
  }
  return response.json().then((json) => ({
    json,
    throwError: true,
  }));
};

const checkException = (response) => {
  if (response.throwError === true) {
    const errorMessage = Object.keys(response.json).map((key) => response.json[key]);
    const error = new Error(errorMessage);
    error.error = response.json;
    throw error;
  }
  return response;
};

// export const parseJSON = (response) => {
//   if (response.status === 204) {
//     return 'OK';
//   }
//   if (response.headers.get('content-type') === 'text/csv') {
//     return response.blob().then((blobFile) => {
//       const data = new File([blobFile], 'ubirator.csv', { type: 'text/csv' });
//       const csvURL = window.URL.createObjectURL(data);
//       const tempLink = document.createElement('a');
//       document.body.appendChild(tempLink);
//       tempLink.href = csvURL;
//       tempLink.setAttribute('download', data.name);
//       tempLink.click();
//       document.body.removeChild(tempLink);
//     });
//   }
//   return response.json();
// };


export const parseSettings = (
  {
    method = 'GET', data, locale, ...otherSettings
  } = {},
) => {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    token: `token ${localStorage.getItem('token')}`,
  };
  if (otherSettings.removeContentType) {
    delete headers['Content-type'];
  }
  const settings = merge(
    {
      body: data instanceof FormData ? data : JSON.stringify(data),
      method,
      headers,
      // credentials: 'include',
    },
    otherSettings,
  );
  return settings;
};

export const parseEndpoint = (endpoint, params) => {
  const requestUrl = endpoint.indexOf('http') === FIRST_INDEX_OF_ARRAY ? 'endpoint' : apiUrl + endpoint;
  const querystring = params ? `?${params}` : '';
  return `${requestUrl}${querystring}`;
};

const api = {};
api.request = (endpoint, { params, ...settings } = {}) => fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(checkException);


['DELETE', 'GET'].forEach((method) => {
  api[method] = (endpoint, settings) => api.request(endpoint, { method, ...settings });
});

['POST', 'PUT', 'PATCH'].forEach((method) => {
  api[method] = (endpoint, data, settings) => api.request(endpoint, { method, data, ...settings });
});

api.create = (settings = {}) => ({
  settings,

  setToken(token) {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: `Bearer ${token}`,
    };
  },

  unsetToken() {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: undefined,
    };
  },

  request(endpoint, settings) {
    return api.request(endpoint, merge({}, this.settings, settings));
  },

  POST(endpoint, data, settings) {
    return this.request(endpoint, { method: 'POST', data, ...settings });
  },

  GET(endpoint, settings) {
    return this.request(endpoint, { method: 'GET', ...settings });
  },

  PUT(endpoint, data, settings) {
    return this.request(endpoint, { method: 'PUT', data, ...settings });
  },

  PATCH(endpoint, data, settings) {
    return this.request(endpoint, { method: 'PATCH', data, ...settings });
  },

  DELETE(endpoint, settings) {
    return this.request(endpoint, { method: 'DELETE', ...settings });
  },
});

export default api;
