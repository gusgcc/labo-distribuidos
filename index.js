//para poder leer .env en desarrollo
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require('express');
//importamos el script database
require("./database")
//const urlencodedParser = bodyParser.urlencoded({extended: false});
const config = require("./server/config");
//le pasamos el app de express() y nos devuelve un app configurado
const app = config(express());
app.listen(app.get('port'), () =>{ // iniciamos el server
    console.log('Server iniciado en : ',app.get('port'));
});