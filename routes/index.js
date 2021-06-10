/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();
// importamos el controlador de mentor
const mentor = require("../controllers/mentorController")
//las rutas de nuestro aplicacion web
module.exports = app => {
    //user
    router.post("/mentor", mentor.create)//para registrarse
    router.get("/mentor/:id", mentor.getMentor)// traemos un mentor por id
    router.put("/mentor/:id", mentor.updateMentor) //Editar datos del mentor
    router.delete('mentor/:id', mentor.deleteMentor) // Borrar mentor
    app.use(router)
}
