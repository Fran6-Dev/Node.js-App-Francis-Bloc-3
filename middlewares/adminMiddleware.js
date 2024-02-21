module.exports = (req, res, next) => {
    // Vérifier si l'utilisateur connecté a le rôle d'administrateur
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ msg: 'Accès refusé : vous devez être administrateur' });
    }
};
