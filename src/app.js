const express = require('express');
const conection = require('./db/config');
require('dotenv').config();

const { swaggerDocs: V1SwaggerDocs } = require('./swagger');
const userRoutes = require('./routes/userRoutes');
const memorieRoutes = require('./routes/memorieRoutes');

const app = express();
app.use(express.json());

conection();

app.use('/api', userRoutes, memorieRoutes);

app.get('/', (req, res) => {
  res.send('API running correctly');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
})