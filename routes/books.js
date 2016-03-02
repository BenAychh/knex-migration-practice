var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

router.get('/books', function(req, res, next) {
  models.books.findAll({}).then(function(results){
    res.render('books/index', {books: results});
  });
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.post('/books', function(req, res, next) {
  models.books.create(req.body).then(function(result){
    res.redirect('/books');
  });
});

router.get('/books/:id', function (req, res, next) {
  models.books.find({
    where: {
      id: req.params.id
    }
  }).then(function(book) {
    res.render('books/show', { book: book });
  });
});

router.get('/books/:id/edit', function (req, res) {
  models.books.find({
    where: {
      id: req.params.id
    }
  })
  .then(function(book) {
    console.log(book);
    res.render('books/edit', { book: book });
  });
});

router.post('/books/:id', function (req, res) {
  models.books.find({
    where: {
      id: req.params.id
    }
  }).then(function(book) {
    if(book) {
      book.updateAttributes( req.body)
      .then(function() {
        res.redirect('/books');
      });
    }
  });
});

router.post('/books/:id/delete', function (req, res) {
  models.books.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.redirect('/books');
  });
});

module.exports = router;
