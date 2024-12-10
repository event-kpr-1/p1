import React, { useState , useRef } from 'react'
import { baseURL } from '../constant/url';

import { BiQrScan } from 'react-icons/bi';

const AttendanceEvent = () => {
    const [out,setOut] = useState('')
    const [id,setId] = useState('');
    const [event,setEvent] = useState('');
    const inputRef = useRef();

    const handleAdd = async() => {
        
        if(!event || !id){
            setOut("select event");
            inputRef.current.focus();
            return;
        }
        try {
            console.log("add click")
            const res = await fetch(`${baseURL}/api/event/${event}/${id}`,{
            method : 'POST',
            credentials : 'include',
            headers : {
                "Content-Type" : "application/json"
            },
            
        })
        const status = await res.json();
        if(!res.ok){
            setOut("not got")
        }
        console.log(status)

        } catch (err) {
            setOut(err)
        } finally {
            inputRef.current.focus();
        }
    }

    const handleScan = () =>{
        
    }
    
  return (
    <div className="flex w-screen h-screen bg-red-600 justify-center items-center">
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto ">
        <div className="mb-4">
            <div className="text-lg font-semibold text-gray-700">{out}</div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{event}</h1>
        </div>

        <form action="" className="space-y-4">
            <div className="flex flex-col">
            <label htmlFor="id" className="text-sm font-medium text-gray-600">Scan ID:</label>
            <div className='flex flex-row justify-evenly gap-2'>            
                <input 
                    type="text" 
                    onChange={(e) => setId(e.target.value)} 
                    value={id} 
                    ref={inputRef} 
                    required 
                    className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 flex-1"
                    />
                <button className="mt-1 flex justify-center items-center border rounded-lg focus:outline-none focus:ring-2 h-auto w-10 text-center" onClick={handleScan}><BiQrScan  /></button>
            </div>
            </div>

            <div className="flex flex-col">
            <label htmlFor="event" className="text-sm font-medium text-gray-600">Select Event:</label>
            <select 
                name="event" 
                id="event" 
                onChange={(e) => setEvent(e.target.value)} 
                className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
            >
                <optgroup label="Events">
                <option value="">--SELECT EVENT--</option>
                <option value="EV1">e1</option>
                <option value="EV2">e2</option>
                <option value="EV3">e3</option>
                <option value="EV4">e4</option>
                </optgroup>

                <optgroup label="Others">
                <option value="food">food</option>
                <option value="kit">kit</option>
                <option value="certificate">certificate</option>
                </optgroup>
            </select>
            </div>
        </form>

 
  
    
  


        <div className="mt-6">
            <button 
            onClick={handleAdd} 
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
            >
            ADD
            </button>
        </div>
    </div>
    </div>

  )
}

export default AttendanceEvent