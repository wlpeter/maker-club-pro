/**
 * 博客文章文档
 */
var mongoose = require('../lib/mongodb/mongodb-init');
var Schema    = mongoose.Schema;

// 定义博客文章模型结构
var ArticleSchema = new Schema({
    articleId:      {type: String, unique: true},  // 主键ID
    authorId:       {type: String},                // 作者ID
    title:          {type: String},                         // 标题
    profiles:       {type: String},                         // 文章简介
    categoryId:     {type: String},                 // 分类ID
    viewCount:      {type: Number, default: 0},             // 查看次数
    isDraft:        {type: Boolean, default: true},         // 是否草稿
    link:           {type: String},                         // 链接地址
    createAt:       {type: Date, default: Date.now },       // 创建时间
    updateAt:       {type: Date, default: Date.now }        // 修改时间
}, { collection: 'Article' });

ArticleSchema.index({articleId: 1});
ArticleSchema.index({authorId: 1});

module.exports = mongoose.model('Article', ArticleSchema, 'Article');
