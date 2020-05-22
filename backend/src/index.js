const express = require('express');
const cors = require('cors');
require('dotenv');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT || 3333, () => console.log('O servidor foi iniciado'));