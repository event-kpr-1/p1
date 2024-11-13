import React, { useState , useRef } from 'react'
import { baseURL } from '../constant/url';

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

    
  return (
    <div>
        <div>{out}</div>
        <h1>{event}</h1>
        <form action="">
            <p>
                <label htmlFor="id">scan ID:</label>
                <input 
                    type="text" 
                    onChange={(e)=>setId(e.target.value)}
                    value={id}
                    ref={inputRef}
                    required
                />
            </p>
            <p>
                <label htmlFor="event"></label>
                <select name="event" id="event" onChange={(e) => {setEvent(e.target.value)}} >
                    <optgroup label='events'>
                        <option value="">--SELECT EVENT--</option>
                        <option value="EV1">e1</option>
                        <option value="EV2">e2</option>
                        <option value="EV3">e3</option>
                        <option value="EV4">e4</option>
                    </optgroup>
                    
                    <optgroup label='others'>
                        <option value="food">food</option>
                        <option value="kit">kit</option>
                        <option value="certificate">certificate</option>
                    </optgroup>

                
            </select>
            </p>
        </form>
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default AttendanceEvent