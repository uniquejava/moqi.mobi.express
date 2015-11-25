var express = require('express');
var cors = require('cors');
var router = express.Router();

var blogs = [
  {
    title: "This is a blog test",
    description: "Is there a way to take the JSON from a $.getJSON() call and assign it",
    slug: 'http://www.cyper.me',
    keywords: "python -m SimpleHTTPServer 8000",
    created: "2015-11-25"
  },
  {
    title: "This is a blog test 2",
    description: "Is there a way to take the JSON from a $.getJSON() call and assign it",
    slug: 'http://www.cyper.me',
    keywords: "python -m SimpleHTTPServer 8000",
    created: "2015-11-25"
  }
];

/* GET blog listing. */
router.get('/', cors(), function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(blogs);

});

module.exports = router;
