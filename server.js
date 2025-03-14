require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
