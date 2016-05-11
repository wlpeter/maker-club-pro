/**
 * 用户文档
 */
var mongoose = require('../lib/mongodb/mongodb-init'),

// 用户模型结构
var UserSchema = new mongoose.Schema({
    author_id:      {type: String},                     // 用户ID
    name:           {type: String},                     // 昵称
    sign:           {type: String},                     // 签名
    login_user:     {type: String},                     // 登录名
    login_pwd:      {type: String},                     // 登录密码
    level:          {type: String},                     // 文章内容 (root、normal)
    create_at:      {type: Date, default: Date.now },   // 创建时间
    update_at:      {type: Date, default: Date.now }    // 修改时间
});

UserSchema.index({uuid: 1});
UserSchema.index({author_id: 1});

mongoose.model('User', UserSchema, 'User');
