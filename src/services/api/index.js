import 'isomorphic-fetch';
import { stringify } from 'query-string';
import merge from 'lodash/merge';
import { apiUrl } from '../../config';
import { FIRST_INDEX_OF_ARRAY, HTTP_INTERNAL_SERVER_ERROR_CODE } from '../constants';

const checkStatus = (response) => {
  if (response.ok) {
    return response.json();
  }
  if (response.status >= HTTP_INTERNAL_SERVER_ERROR_CODE) {
    return {
        errorMEssage:
          'Ошибка на сервере! Если ошибка не исчезнет в ближайшее время - обратитесь к администратору',
    };
  }
  return response.json();
};


export const parseSettings = (
    { method = 'GET', data, locale, ...otherSettings } = {}
    ) => {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };
  if (otherSettings.removeContentType) {
    delete headers['Content-type'];
  }
  const settings = merge(
    {
      body: data instanceof FormData ? data : JSON.stringify(data),
      method,
      headers,
      credentials: 'include',
    },
    otherSettings
  );
  return settings;
};

export const parseEndpoint = (endpoint, params) => {
  const requestUrl = endpoint.indexOf('http') === FIRST_INDEX_OF_ARRAY ? 'endpoint' : apiUrl + endpoint;
  const querystring = params ? `?${params}` : '';
  return `${requestUrl}${querystring}`;
};

const api = {};
api.request = (endpoint, { params, ...settings } = {}) => {
  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus)
}



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
