// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const offerRoutes = require('./routes/offers');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/offers', offerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
