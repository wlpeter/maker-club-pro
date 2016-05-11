var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('blog', {
        title: 'blog',
        bolgList: [{day:"1"},{day:"1"}],
        pageList: []
    });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', {
        title: 'blog',
        bolgList: [{day:"1"},{day:"1"}],
        pageList: []
    });
});

router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', {
        title: 'aboutme'
    });
});
router.get('/blog/:id', function(req, res, next) {
    console.log(req.params);
    res.render('context', {
        title: 'context'
    });
});

module.exports = router;
