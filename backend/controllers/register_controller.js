import Participant from "../model/participant_model.js";


export const register = async (req , res) => {
    try {
        const {name , email , college , gender , regno, phone} = req.body

        console.log(name,email,college,gender,regno,phone)

        //validating the email 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error : "invalid email format"})
        }

        //check for existing participant
        const existingEmail = await Participant.findOne({email : email})
        const existingRegno = await Participant.findOne({regno : regno})
        if(existingEmail || existingRegno){
            return res.status(400).json({error : "already exists"})
        }

        const phonenoRegex = /^\d{10}$/
        if(!phonenoRegex.test(phone)){
            return res.status(400).json({error : "invaild phone number"})
        }


        // creating new Participant
        const newParticipant = new Participant({
            name : name,
            email : email,
            college : college,
            phone : phone,
            gender : gender,
            regno : regno
            
            
        })

        // saving the details of new Participant
        if(newParticipant){
            
            await newParticipant.save();
            res.status(200).json({
                _id : newParticipant.id,
                name : newParticipant.name,
                gender : newParticipant.gender,
                email : newParticipant.email,
                regno : newParticipant.regno,
            })
        }else {
            res.status(404).json({error : "invalid Participant Data"})
        }
        
    } catch (err) {
        console.log(`error at register-register-controller : ${err}` )
        res.status(400).json({error : "internal server error"})
    }
}
export const regShow = async (req , res) => {
    try {
        const {regno} = req.params;
        const participant = await Participant.findOne({regno : regno})
        
        if(!participant){
            return res.status(404).json({error : "participant not found"})
        }
        console.log(participant)

        res.status(200).json({
            _id : participant.id,
            name : participant.name,
            college : participant.college,
            email : participant.email,
            regno : participant.regno,
            phone : participant.phone
        })
    } catch (err) {
        console.log(`error at resShow-register-controller : ${err}` );
        res.status(400).json({error : "internal server error"});
    }
}