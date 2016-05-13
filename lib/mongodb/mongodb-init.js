/**
 * mongodb初始化操作
 */
var mongoose = require('mongoose');
var config = require("../../config/settings.json");
var logger = console;

// 连接数据库
mongoose.connect(config.mongodb.uri, config.mongodb.options || {});

var db = mongoose.connection;

db.on('error', function (err) {
    logger.error('MongoDB连接错误: ' , err.message || err);
    process.exit(1);
});

db.once('open', function (err) {
    logger.info('MongoDB连接成功.');
});

module.exports = mongoose;
