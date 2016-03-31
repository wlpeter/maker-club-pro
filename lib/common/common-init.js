var opts = require("../../config/settings");
var mongodbInit = require('./mongodb/mongodb-init.js');
mongodbInit.create(opts.mongodb);
