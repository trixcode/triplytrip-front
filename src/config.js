const merge = require('lodash/merge');

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isProd: process.env.NODE_ENV === 'production',
    basename: process.env.PUBLIC_PATH || '/',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    apiUrl: 'http://localhost:8000/api/v1/',
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'http://52.58.62.46/api/v1/',
  },
};

module.exports = merge(config.all, config[config.all.env]);
