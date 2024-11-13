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
        type : Number,
        default : 0
    },
    idcard : {
        type : Number,
        default : 0
    },
    certificate : [{
        type : String,
        default : []
    }],
    kit : {
        type : Number,
        default : 0

    }

    

},{timestamps : true})

const Participant = mongoose.model("Participant" , ParticipantSchema);
export default Participant;