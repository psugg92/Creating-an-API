const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');

let handler = express();

handler.use(cors());
handler.use(express.json());
handler.use('/api', mainRouter);

handler.listen(3000, console.log('Connected to Port 3000'))
