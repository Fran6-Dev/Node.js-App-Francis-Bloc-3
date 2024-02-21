

// Importez les modules nécessaires pour les tests
const assert = require('assert');
const Article = require('../models/article');

describe('Tests pour la création, la mise à jour et la suppression d\'un article', () => {
    let article;

    beforeEach(() => {
        article = new Article();
    });

    test("should create a new article", async () => {
        const article = await articleService.createArticle({
            title: "Nouveau titre",
            content: "Nouveau contenu",
    });
    expect(article.title).toBe("Nouveau titre");
    expect(article.content).toBe("Nouveau contenu");
    });

    test("should update the title of the article", async () => {
        const newTitle = "Nouveau titre";
        const newContent = "Nouveau contenu";
        const article = await articleService.createArticle({
            title: "Ancien titre",
            content: "Ancien contenu",
        });
        const updatedArticle = await articleService.updateArticle(article._id, {
            title: newTitle,   
        });
        expect(updatedArticle.title).toBe(newTitle);
        expect(updatedArticle.content).toBe(newContent);
    });

    test("delete an article", async () => {
        const article = await articleService.createArticle({
            title: "Nouveau titre",
            content: "Nouveau contenu",
        });
        await articleService.deleteArticle(article._id);
        const deletedArticle = await articleService.getArticleById(article._id);
        expect(deletedArticle).toBeNull();
    });
});
