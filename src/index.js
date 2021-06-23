const express = require('express');
const app = express();
const path = require('path')

//server 
app.listen(3000, () => console.log("Server Start on http://localhost:3000"));
 
//Public Access 
app.use(express.static(path.resolve(__dirname,"../public")));

//WebSites Routes
app.use (require('./routes/web'));
