'use strict'

var express = require('express');
var DocumentController = require('../controllers/Document');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : './upload/articles'});

//rutas de prueba
router.get('/datos-curso', DocumentController.datoscurso);
router.get('/test-de-controlador', DocumentController.test);

//rutas Productivas
router.post('/save-document', DocumentController.saveArticle);
router.get('/get-documents/:last?', DocumentController.getArticles);
router.get('/get-document/:id', DocumentController.getArticle);
router.put('/update-document/:id', DocumentController.updateArticle);
router.delete('/delete-document/:id', DocumentController.deleteArticle);
router.post('/upload-file/:id', md_upload, DocumentController.upload);
router.get('/get-file/:image', DocumentController.getImageArticle);
router.get('/search-document/:search', DocumentController.searchArticle);


module.exports = router;