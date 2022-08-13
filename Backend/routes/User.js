'use strict'

var express = require('express');
var UserController = require('../controllers/User');
var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : './upload/articles'});


//rutas de prueba
router.get('/datos-curso', UserController.datoscurso);
router.get('/test-de-controlador', UserController.test);

//rutas Productivas
router.post('/create', UserController.createUser);
router.get('/get-articles/:last?', UserController.getArticles);
router.get('/get-article/:id', UserController.getArticle);
router.put('/update-article/:id', UserController.updateArticle);
router.delete('/delete-article/:id', UserController.deleteArticle);
router.post('/upload-image/:id', md_upload, UserController.upload);
router.get('/get-image/:image', UserController.getImageArticle);
router.get('/search/:search', UserController.searchArticle);


module.exports = router;