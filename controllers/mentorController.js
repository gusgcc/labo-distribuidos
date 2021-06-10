// Crearemos el controlador de la peticion para mentor
ctrl = {}
// Importamos los servicios de mentor
const MentorService  =require('../services/mentorServices')

ctrl.create = async (req,res)=>{// crear un mentor
    try{
        console.log(req.body)
        let mentor  = await MentorService.createMentor(req.body)
        res.status(200).send(mentor)
    }catch(error) {
        console.log(error)
        res.status(500).json('error')
    }
}
ctrl.getMentor = async (req,res)=>{//traer mentor por id
    try {
        let id = req.params.id
        let mentor = await MentorService.getMentor(id)
        if(mentor){
            res.status(200).send(mentor)
        }else{
            res.status(404).send('No existe mentor')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json('error')
    }
}
ctrl.updateMentor = async (req,res) => {
    try{
        try {
            let id = req.params.id
            let newData  =req.body
            let mentor = await MentorService.updateMentor(id, newData)
            if(mentor){
                res.status(200).send(mentor)
            }else{
                res.status(404).send('No existe mentor')
            }
        } catch (error) {
            console.log(error)
            res.status(500).json('error')
        }
    }catch{
        console.log(error)
        res.status(500).json('error')
    }
}
ctrl.deleteMentor = async (req, res)=>{
    try{
        try {
            let id = req.params.id
            let mentor = await MentorService.deleteMentor(id)
            if(mentor){
                res.status(200).send(mentor)
            }else{
                res.status(404).send('No existe mentor')
            }
        } catch (error) {
            console.log(error)
            res.status(500).json('error')
        }
    }catch{
        console.log(error)
        res.status(500).json('error')
    }
}
module.exports = ctrl

