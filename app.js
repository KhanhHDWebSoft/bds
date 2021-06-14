const express = require('express');
const app = express();
const db = require('./database/mongoose');
const bodyParser = require('body-parser');
// app.use(express.json({ limit: '50mb'}));
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
require('./routes')(app);

const port = 5000;

db.connect();
app.listen(port, () => console.log(`server running on port ${port}`))
