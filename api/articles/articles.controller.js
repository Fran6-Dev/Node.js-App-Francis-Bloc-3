const Article = require('./articles.schema');
const articleService = require('./articles.services');
const NotFoundError = require("../../errors/not-found");


class ArticlesController {

    async getArticlesByUserId(req, res, next) {
        try {
            const userId = req.params.userId;
            const articles = await articleService.getArticlesByUserId(userId);
            res.json(articles);
        } catch (err) {
            next(err);
        }
    }

    async createArticle(req, res, next) {
        try {
            const article = await articleService.createArticle({
                title: req.body.title,
                content: req.body.content,
                user: req.user._id,
            });
            res.status(201).json(article);
        } catch (err) {
            next(err);
        }
    }

    async updateArticle(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;
            const articleModified = await articleService.updateArticle(id, data);
            res.json(articleModified);
        } catch (err) {
            next(err);
        }
    }

    async deleteArticle(req, res, next) {
        try {
            const id = req.params.id;
            await articleService.deleteArticle(id);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ArticlesController();