var log4js = require('log4js');
var config = require('../../config/log4js.json');

log4js.configure(config);

module.exports = log4js.getLogger('web');
