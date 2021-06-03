/*configuracion de servidor*/
const express = require("express")
const cors = require("cors")
const routes = require("../routes/index")
// const morgan = require("morgan")
//configuramos el app
module.exports = app => {
    //configuraciones 
    app.set("port", process.env.PORT)

    //middlewares
    app.use(cors());//permite origen cruzado
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    routes(app)//para configurar las rutas
    return app;
}