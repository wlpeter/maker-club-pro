/**
 * mongodb初始化操作
 */
var mongoose = require('mongoose');

/**
 * 数据库初始化
 * @param opts 数据库详细参数
 */
function mongodbInit(mongoObj, opts) {
    mongoObj.connect(opts);
}
