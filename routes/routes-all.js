module.exports = function (app) {
    /* GET users listing. */
    app.get('/', function(req, res, next) {
        res.render('blog', {
            title: 'blog',
            bolgList: [{day:"1"},{day:"1"}]
        });
    });

    app.get('/blog', function(req, res, next) {
        res.render('blog', {
            title: 'blog',
            bolgList: [{day:"1"},{day:"1"}]
        });
    });

    app.get('/aboutme', function(req, res, next) {
        res.render('aboutme', {
            title: 'aboutme'
        });
    });
    app.get('/blog/:id', function(req, res, next) {
        console.log(req.params);
        res.render('context', {
            title: 'context'
        });
    });
}
