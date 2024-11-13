import mongoose from 'mongoose';

const ParticipantSchema = mongoose.Schema({
    name : {
        type : String,
        requried : true,

    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    college : {
        type : String,
        required : true,

    },
    phone : {
        type: String,
        required: true,
    
    },
    gender : {
        type : String,
        required : true
    },
    regno : {
        type : String,
        required : true,
        unique : true
    },
    
    team : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Participants",
        default : []
    }],
    participated : [{
        type : String,
        
    }],
    food : {
        type : Boolean,
        default : false
    },
    idcard : {
        type : Boolean,
        default : false
    },
    certificate : [{
        type : String,
        default : []
    }],
    kit : {
        type : Boolean,
        default : false

    }

    

},{timestamps : true})

const Participant = mongoose.model("Participant" , ParticipantSchema);
export default Participant;