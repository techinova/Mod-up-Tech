const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Mod-up-Tech',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

