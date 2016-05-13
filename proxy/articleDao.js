var ArticleModule = require('../models/article');
var _ = require('underscore');

var logger = require("../lib/logger/logger");

/**
 * 博客文章信息插入
 *
 * @param  postData 博客文章信息对象
 * @param  cb       回调
 */
function articleInsert(postData, cb) {
    // 判断插入对象是否有误
    if (_.isEmpty(postData) || !postData.articleId) {
        return callback('insert failed: param error.');
    }
    var articleEnity = new ArticleModule({
        "articleId":      postData.articleId,       // 主键ID
        "authorId":       postData.authorId,        // 作者ID
        "title":          postData.title,           // 标题
        "profiles":       postData.profiles,        // 文章简介
        "categoryId":     postData.categoryId,      // 分类ID
        "viewCount":      0,                        // 查看次数
        "isDraft":        true,                     // 是否草稿
        "link":           postData.link,            // 链接地址
    });
    // 信息插入
    articleEnity.save(function (err, data) {
        if (err) {
            logger.error(err.message || err)
        }
        cb(err, data);
    });
}

/**
 * 博客文章信息更新
 *
 * @param  conditions 条件
 * @param  postData   待更新对象
 * @param  cb         回调
 */
function articleUpdate(conditions, postData, cb) {
    conditions = conditions || {};
    // 判断待更新参数是否为空
    if (_.isEmpty(postData)) {
        return callback('update failed: no param.');
    }
    // 更新
    ArticleModule.update(conditions, {
        $set: _.extend(postData, {
            "updateAt": new Date()
        })
    }, function(err) {
        if (err) {
            return callback(err.message || err);
        }
        return callback(null);
    });
}

/**
 * 博客文章数据删除
 *
 * @param  conditions 条件
 * @param  cb         回调
 */
function articleRemove(conditions, cb) {
    // 判断删除条件是否为空
    if (_.isEmpty(conditions)) {
        return callback('remove failed: no conditions.');
    }
    // 删除
    ArticleModule.remove(conditions, function(err) {
        if (err) {
            return callback(err.message || err);
        }
        return callback(null);
    });
}

function getBlogListForFirst(conditions, pageSize, page) {
}
