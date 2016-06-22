var express = require('express');
var router = express.Router();
var todolist = [];

/* GET home page. */

router.get('/', function(req, res, next) {
 res.render('index', {todolist: todolist});
});

router.get('/', function(req, res, next) {
  res.render(todolist);
});

router.post('/', function(req, res, next) {
  var newtodo = req.body;
  todolist.push(newtodo);
  res.redirect('/');
});

router.get('/new', function(req, res, next) {
  res.render('newtodo/new');
});

module.exports = router;
