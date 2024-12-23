import Participant from "../model/participant_model.js";
export const printid = async(req , res) => {
    try {
        const {regno , evid} = req.params;
        const participant = regno.length === 24 ? await Participant.findOne({_id : regno}) : await Participant.findOne({regno : regno})
        
        if(!participant || participant.eventID.toString() !== evid.toString()){
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

export const printcertificate = async(req , res) => {
    try {
        const {regno} = req.params;
        const participant = regno.length === 24 ? await Participant.findOne({_id : regno}) : await Participant.findOne({regno : regno})

        
        if(!participant){
            return res.status(404).json({error : "participant not found"})
        }
        console.log(participant)

        res.status(200).json({participated : participant.participated})
    } catch (err) {
        console.log(`error at resShow-register-controller : ${err}` );
        res.status(400).json({error : "internal server error"});
    }
}