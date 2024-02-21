const express = require('express');
const router = express.Router();
const articlesController = require('./articles.controller');
const adminMiddleware = require('../../middlewares/adminMiddleware');
const auth = require('../../middlewares/auth');

// Route pour créer un nouvel article
router.post('/', articlesController.createArticle);

// Route pour mettre à jour un article existant
router.put('/:id', adminMiddleware, articlesController.updateArticle);

// Route pour supprimer un article
router.delete('/:id', adminMiddleware, articlesController.deleteArticle);

module.exports = router;
