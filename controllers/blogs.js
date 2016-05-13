var _ = require('underscore');
var Article = require('../models/article');
var content = require('../models/content');
var async = require('async');
var Promise = require('bluebird');

//var logger = require("../lib/logger/logger");

/*function firstPageShow(req, res, next) {

}*/


/**
 * 查询博客列表
 *
 * @param  conditions 查询条件
 * @param  limit      单页显示数
 * @param  skip       当前位置
 * @param  sort       排序
 * @param  cb         回调
 */
function getBolgsList(conditions, limit, skip, sort, cb) {
    conditions = conditions || {};
    // 查询博客列表
    Article.find(conditions).limit(limit).skip(skip).sort(sort).exec(function(err, data) {
        cb(err, data);
    });
}

function articleInsert(param, cb) {
    if (_.isEmpty(param)) {
        cb(err, data);
    }
    var enity = new Article({
        articleId:      param.articleId,
        authorId:       param.authorId,
        title:          param.title,
        profiles:       param.profiles,
        categoryId:     param.categoryId,
        viewCount:      param.viewCount,
        isDraft:        param.isDraft,
        link:           param.link,
        createAt:       new Date(),
        updateAt:       new Date()
    });
    // 文章插入
    Article.save([enity], function (err, data) {
        if () {

        }
        cb(err);
    });
}
