const Mentor = require('../modelos/Mentor')

const MentorService = {}

MentorService.createMentor = async (data) =>{
    const newMentor = new Mentor({
        nombres: data.nombres,
        apellidos: data.apellidos
    })
    let mentor = await newMentor.save()
    return mentor
}
MentorService.getMentor = async (id) =>{
    let mentor = Mentor.findById(id)
    return mentor
}
module.exports = MentorService