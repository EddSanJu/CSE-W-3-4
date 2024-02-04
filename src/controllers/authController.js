const User = require("../models/User");
const bcrypt = require('bcrypt');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
async function(accessToken, refreshToken, profile, cb) {
  try {
    let user = await User.findOne({ githubId: profile.id });
    if (!user) {
      // Crear un nuevo usuario o manejar la lógica según tu esquema de usuario
      user = new User({ /* tus datos de usuario basados en el perfil de GitHub */ });
      await user.save();
    }
    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
}
));

const githubAuth = passport.authenticate('github');

const githubAuthCallback = passport.authenticate('github', { failureRedirect: '/auth/login' });

const githubCallback = (req, res) => {
  if (req.user) {
    res.redirect('/api/docs');
  } else {
    res.redirect('/auth/login');
  }
};


const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    req.login(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: 'Logged in successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) { 
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.status(200).json({ message: 'Successfully logged out' });
  });
};

module.exports = {
  login,
  logout,
  githubAuth,
  githubAuthCallback,
  githubCallback
};