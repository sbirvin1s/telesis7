/*=========== EXTERNAL MODULES ===========*/
require('dotenv').config();
const express = require('express') ;
const path = require('path');

/*=========== SYSTEM VARIABLES ===========*/
const app = express();
const { SERVER_PORT } = process.env;



/*=========== INTERNAL MODULES ===========*/
const { getData } = require('././routes.js');


/*=========== MIDDLEWARE ===========*/
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());


/*=========== ROUTES ===========*/
app.get('/data', getData);

/*=========== SERVER CONNECTIONS ===========*/
app.listen(SERVER_PORT, () => console.log(`Listening on http://localhost:${SERVER_PORT}`));