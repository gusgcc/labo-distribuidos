const { Schema, model } = require("mongoose")
// const bcrypt = require("bcryptjs")

var mentorSchema = new Schema({
    email: String,
    nombres: String,
    apellidos: String,
    telefono: String,
    edad: Number
})

const Mentor = model("Mentor", mentorSchema)//se creo el modelo Mentor

module.exports = Mentor