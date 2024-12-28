import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL ,eventURL} from './constant/url';

const HomePage = ({setEventID}) => {
    
    const navigate = useNavigate();
    const [event,setEvent] = useState(false)
    const {evid} = useParams();
    const isValidEvent = async() => {
        if(process.env.NODE_ENV !== 'production' && evid === 'test'){
            setEvent(true);
            return
        }
        try {
            const response = await fetch(`${baseURL}/api/event/${evid}`,{
                method : 'GET',
                credentials : 'include',
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            const data = await response.json();
            // console.log("paru",data    )
            if(response.ok){
                setEvent(data)
                console.log(event)
                setEventID(evid)
            }else{
                setEvent(false)
            }

        } catch (err) {
            console.log(err)
            
        }
    }
    
    
    const pass = "KINGcas654";

    const handlePassword = () => {
        const input = prompt("Enter PassKey");
        if (input === pass) {
            return 1;
        } else {
            alert("Incorrect PassKey");
        }
    };
    const handleNavigate = (path) => {
        if(process.env.NODE_ENV !== 'production'){
            navigate(path)
        }else{
            handlePassword() && navigate(path)
        }
    }


    useEffect(() => {isValidEvent()},[])
   
    
    return event ? (

        <div className="relative h-screen bg-gray-100">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-green-600 shadow-md py-4 text-center text-lg font-bold z-10">
                KPRCAS
            </header>

            {/* Body */}
            <main className="flex flex-col gap-3 justify-center items-center h-full pt-16 pb-16 bg-blue-700">
                <button
                className="btn btn-outline  bg-white w-screen md:w-48"
                onClick={() => navigate('/register')}
                >
                Register
                </button>
                <button
                className="btn btn-outline   bg-white w-screen md:w-48"
                onClick={() => handleNavigate('/printid')}
                >
                Print ID
                </button>
                <button
                className="btn btn-outline   bg-white w-screen md:w-48"
                onClick={() => handleNavigate('/attendance')}
                >
                Attendance
                </button>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full bg-green-500 shadow-md py-3 text-center text-md  z-10 uppercase font-bold">
                {event.event.eventName}
            </footer>
        </div>

    ):(
        <div>no event</div>
    )
};

export default HomePage;
