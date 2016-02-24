module.exports = function (app) {
    /* GET users listing. */
    app.get('/', function(req, res, next) {
        res.render('blog', {
            title: 'blog'
        });
    });

    app.get('/blog', function(req, res, next) {
        res.render('blog', {
            title: 'blog'
        });
    });

    app.get('/aboutme', function(req, res, next) {
        res.render('aboutme', {
            title: 'aboutme'
        });
    });
}
