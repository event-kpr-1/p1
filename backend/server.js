// pakages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// db
import connectDB from './db/connectDB.js';

// sites
import providerRoute from './routes/provider_route.js';
import registerRoute from './routes/register_route.js';
import attendanceRoute from './routes/attendance_route.js'



const app = express();
app.use(express.json())
dotenv.config();

app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))


// ENV
const PORT = process.env.PORT;


// redirecting
app.use("/api/provider",providerRoute);
app.use("/api/participant",registerRoute);
app.use("/api/event",attendanceRoute)


app.listen(PORT, ()=>{
    console.log(PORT)
    connectDB();
})