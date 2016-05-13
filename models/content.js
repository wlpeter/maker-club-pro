/**
 * 博客文章文档
 */
var mongoose = require('../lib/mongodb/mongodb-init');
var Schema    = mongoose.Schema;

// 定义博客文章模型结构
var ContentSchema = new Schema({
    articleId:      {type: String, unique: true},       // 主键ID
    content:        {type: String}                      // 文章内容
}, { collection: 'Content' });

ContentSchema.index({articleId: 1});

module.exports = mongoose.model('Content', ContentSchema, 'Content');
