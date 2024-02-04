function isGithubAuthenticated(req, res, next) {
  if (req.isAuthenticated() && req.user.githubId) {
    return next();
  }
  res.status(401).json({ message: 'Not authorized via GitHub' });
}

module.exports = isGithubAuthenticated;