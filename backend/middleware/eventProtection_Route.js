import Event from "../model/NewEventModel.js";

const eventProtection = async(req, res, next) => {
    const {evid} = req.params;
    if(evid.length !== 24){
        return res.status(404).json({error : 'length event found'})
    }
    
    const event = await Event.findOne({_id : evid})
    if(!event){
        
        return res.status(404).json({error : 'no event found'})
    }
    

    next();
}

export default eventProtection;