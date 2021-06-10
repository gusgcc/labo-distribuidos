// Servicos del mentor
const Mentor = require('../modelos/Mentor')

const MentorService = {}

// Crear un mentor en la bd
MentorService.createMentor = async (data) =>{
    const newMentor = new Mentor({
        nombres: data.nombres,
        apellidos: data.apellidos,
        telefono: data.telefono,
        email:data.email,
        telefono:data.telefono

    })
    let mentor = await newMentor.save()
    return mentor
}
// Buscar un mentor en la bd por id
MentorService.getMentor = async (id) =>{
    let mentor = await Mentor.findById(id)
    return mentor
}
MentorService.updateMentor = async (id,newData) =>{
    let mentor = await Mentor.findByIdAndUpdate(id, newData)
    return mentor
}
MentorService.deleteMentor = async (id) => {
    let mentor = await Mentor.findByIdAndRemove(id)
    return mentor
}
module.exports = MentorService

