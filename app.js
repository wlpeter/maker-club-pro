'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config/settings.json");
var logger = require("./lib/logger/logger");

// 导入总路由
var routerAll = require('./routes/routes-all');

var app = express();
logger.info(process.env.NODE_ENV);
// ------------------------设置参数----------------------------
// view engine setup
// 设置模板文件的路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs');

// ------------------------导入中间件----------------------------
// app.use([path], function) path参数可以不填，默认为'/' （可自定义）
// uncomment after placing your favicon in /public
// 设置图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
// 接收http访问时允许的数据最大值,（默认为空即100kb）
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ limit: '100mb',extended: true, parameterLimit: 99999999}));
app.use(cookieParser());
// 导入public下的静态文件
// express.static()为处理静态请求
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', config.port);
app.listen(app.get('port'), function() {
    logger.info('listening on port ' + app.get('port'));
});

// ------------------------导入总路由----------------------------
app.use(routerAll);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
//console.log(process.env);
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
