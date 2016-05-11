/**
 * 博客文章文档
 */
var mongoose = require('../lib/mongodb/mongodb-init'),

// 定义博客文章模型结构
var ArticleSchema = new mongoose.Schema({
    uuid:           {type: String, unique: true},       // 主键ID
    author_id:      {type: String},                     // 作者ID
    content:        {type: String},                     // 文章内容
    tag_id:         {type: String},                     // 标签ID
    create_at:      {type: Date, default: Date.now },   // 创建时间
    update_at:      {type: Date, default: Date.now }    // 修改时间
});

ArticleSchema.index({uuid: 1});
ArticleSchema.index({author_id: 1});

mongoose.model('Article', ArticleSchema, 'Article');