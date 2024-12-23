import mongoose from "mongoose";

const NewEventSchema = mongoose.Schema({
    eventName : {
        type : String,
        require : true
    },
    subEvents : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Event",
            default : []
        }
    ],
    eventDetails : {
        type : String,
        require : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "AdminUser",
        require : true
    }
},{timestamp : true})

const Event = mongoose.model('Event' , NewEventSchema);
export default Event;