const { getUuid } = require('../plugins/get-uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClientPlugin } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    getAge,
    getUuid,
    httpClientPlugin,
    buildLogger,
}