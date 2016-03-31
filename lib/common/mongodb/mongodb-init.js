/**
 * mongodb初始化操作
 */
var mongoose = require('mongoose');

/**
 * 数据库功能
 * @param opts 数据库详细参数
 */
function mongodbJob (opts) {
    var self = this;
    this.options = opts;
    // 数据库初始化
    this.init(mongoose);
}

mongodbJob.create = function(opts){
	return new mongodbJob(opts);
}

// 数据库功能原型链
mongodbJob.prototype = {
    // 数据库初始化
    init: function(mongoObj) {
        var self = this;
        // 连接数据库
        mongoObj.connect(this.options.uri, this.options.data || {}, function (err) {
            if (err) {
                console.error('Mongodb connect error: ', err.message);
                process.exit(1);
                return;
            }
            // 数据库模型导入
            self.modulesInit();
        });
    },
    // 数据库模型导入
    modulesInit: function () {
        console.log('******************************');
        /*var userTestSchema = new mongoose.Schema({
            name: String
        }, {collection:'userTest'});

        mongoose.model('userTest', userTestSchema);*/
    }
}

module.exports = mongodbJob;
