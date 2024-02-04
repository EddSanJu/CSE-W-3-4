const express = require('express');
const conection = require('./db/config');
require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const { swaggerDocs: V1SwaggerDocs } = require('./swagger');
const userRoutes = require('./routes/userRoutes');
const memorieRoutes = require('./routes/memorieRoutes');
const authRoutes = require('./routes/authRoutes');
const isAuthenticated = require('./middlewares/isAuthenticated');
const isGithubAuthenticated = require('./middlewares/isGithubAuthenticated');

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'nopales',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

conection();

app.use('/api', isAuthenticated, userRoutes);
app.use('/api', isGithubAuthenticated, memorieRoutes);


app.get('/', (req, res) => {
  res.send(`API Docs available at route "URL/api/docs"`);
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
})