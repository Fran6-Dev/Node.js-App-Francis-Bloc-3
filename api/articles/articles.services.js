const Article = require('./articles.schema');

class ArticleService {

    // Méthodes de la classe ArticleService
    getAllArticles() {
        // Logique pour récupérer tous les articles
        return Article.find({}, "-password");
    }

    getArticleById(id) {
        // Logique pour récupérer un article par son identifiant
        return Article.findById(id);
    }

    createArticle(articleData) {
        // Logique pour créer un nouvel article
        const article = new Article(articleData);
        return article.save();
    }

    updateArticle(id, articleData) {
        // Logique pour mettre à jour un article existant
        return Article.findByIdAndUpdate(id, articleData, { new: true })
    }

    deleteArticle(id) {
        // Logique pour supprimer un article par son identifiant
        return Article.findByIdAndDelete(id);
    }

    
}

module.exports = ArticleService;
