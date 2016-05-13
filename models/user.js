/**
 * 用户文档
 */
var mongoose = require('../lib/mongodb/mongodb-init');
var Schema    = mongoose.Schema;

// 用户模型结构
var UserSchema = new Schema({
    authorId:       {type: String},                   // 用户ID
    name:           {type: String},                     // 昵称
    loginUser:      {type: String},                     // 登录名
    loginPwd:       {type: String},                     // 登录密码
    level:          {type: String},                     // 文章内容 (root、normal)
    createAt:       {type: Date, default: Date.now },   // 创建时间
    updateAt:       {type: Date, default: Date.now }    // 修改时间
}, { collection: 'User' });

UserSchema.index({authorId: 1});

module.exports = mongoose.model('User', UserSchema, 'User');
