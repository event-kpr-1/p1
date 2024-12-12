import Participant from "../model/participant_model.js";

export const attended = async(req , res) => {
    try {
        const {event , id} = req.params;
        const participant = await Participant.findOne({regno : id})
        if(!participant){
            return res.status(404).json({error : "participant not found"})
        }
        
        if(event === 'kit' || event === 'food'){
            
            const newValue = participant[event]+1;
            await participant.updateOne({ [event]: newValue });
            await participant.save();
            res.status(200).json({ [event]: newValue });
        }
        
        else{
            if(participant.participated.length >=2){
                return res.status(200).json({msg : "participated 2"})
            }
            if(participant.participated.includes([event])){
                res.status(200).json({msg : "already participated"})
            }
            else{
                await participant.updateOne({ $push :{participated : [event]} })
                await participant.save();
                
                res.status(200).json({added : [event]})
            }
        }


        
        
    } catch (err) {
        // console.log(err)
        res.status(400).json({error : err})
    }
}