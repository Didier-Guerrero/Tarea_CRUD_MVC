// Middleware para verificar si el usuario está autenticado
exports.isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
};
