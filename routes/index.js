/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();

const mentor = require("../controllers/mentorController")
//las rutas de nuestro aplicacion web
module.exports = app => {
    //user
    router.post("/mentor", mentor.create)//para registrarse
    router.get("/mentor/:id", mentor.getMentor)// traemos un mentor


    //router.get("/mentor/:id", mentor.get)//obtine los datos del usuario :id (aunque realmente del token)
    //router.put("/mentor/:id", mentor.actualizar)//actualiza los datos del usuario :id (pero usa el dato del token)

    //


    app.use(router) //
}