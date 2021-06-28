const express = require('express');
const app = express();
const path = require('path')

app.set("port",process.env.PORT || 3000)

//server 
app.listen(app.get("port"), () => console.log("Server Start on http://localhost"+':gi'+app.get("port")));
 
//Public Access 
app.use(express.static(path.resolve(__dirname,"../public")));


//WebSites Routes
app.use (require('./routes/web'));
