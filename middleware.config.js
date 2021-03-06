const config = require('./config.js');

module.exports = {
  integrations: {
    kibo: {
      location: '@vue-storefront/kibocommerce-api/server',
      configuration: {
        api: {
          accessTokenUrl: config.get('accessTokenUrl'),
          clientId: config.get('clientId'),
          sharedSecret: config.get('sharedSecret'),
          apiHost: config.get('apiHost')
        }
      }
    },
    sb: {
      location: '@vue-storefront/storyblok/server',
      configuration: {
        token: '0JRryErQBak2gfRzoubuvAtt',
        cacheProvider: 'memory',
      },
    },
  }
};
