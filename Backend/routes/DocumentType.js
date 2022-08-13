'use strict'

var express = require('express');
var DocumentTypeController = require('../controllers/DocumentType');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : './upload/articles'});

//rutas de prueba
router.get('/datos-curso', DocumentTypeController.datoscurso);
router.get('/test-de-controlador', DocumentTypeController.test);

//rutas Productivas
router.post('/save-article', DocumentTypeController.saveArticle);
router.get('/get-articles/:last?', DocumentTypeController.getArticles);
router.get('/get-article/:id', DocumentTypeController.getArticle);
router.put('/update-article/:id', DocumentTypeController.updateArticle);
router.delete('/delete-article/:id', DocumentTypeController.deleteArticle);
router.post('/upload-image/:id', md_upload, DocumentTypeController.upload);
router.get('/get-image/:image', DocumentTypeController.getImageArticle);
router.get('/search/:search', DocumentTypeController.searchArticle);


module.exports = router;