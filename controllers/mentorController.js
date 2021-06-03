ctrl = {}
const MentorService  =require('../services/mentorServices')

ctrl.create = async (req,res)=>{
    try{
        console.log(req.body)
        let mentor  = await MentorService.createMentor(req.body)
        res.status(200).send(mentor)
    }catch(error) {
        console.log(error)
        res.status(500).json('error')
    }
}

ctrl.getMentor = async (req,res)=>{
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

ctrl.update = async (req,res)=>{
    
}

module.exports = ctrl