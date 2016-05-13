/**
 * 博客文章文档
 */
var mongoose = require('../lib/mongodb/mongodb-init');
var Schema    = mongoose.Schema;

// 定义博客文章模型结构
var CategorySchema = new Schema({
    categoryId:     {type: String, unique: true},       // 分类ID
    alias:          {type: String},                     // 别名
    link:           {type: String}                      // 链接地址
}, { collection: 'Category' });

CategorySchema.index({categoryId: 1});

module.exports = mongoose.model('Category', CategorySchema, 'Category');
