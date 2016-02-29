/**
 * mongodb初始化操作
 */
var mongoose = require('mongoose');

function mongodbInit(opts) {
    mongoose.connect(opts);
}
