import React, { useState } from 'react'

const AttendanceEvent = () => {
    const [id,setId] = useState('');
    const [event,setEvent] = useState('');
    
  return (
    <div>
        <h1>{event}</h1>
        <form action="">
            <p>
                <label htmlFor="id">scan ID:</label>
                <input 
                    type="text" 
                    onChange={(e)=>setId(e.target.value)}
                    value={id}
                    required
                />
            </p>
            <p>
                <label htmlFor="event"></label>
                <select name="event" id="event" onChange={(e) => setEvent(e.target.value)} >
                    <optgroup label='events'>
                        <option value="event 1">e1</option>
                        <option value="event 2">e2</option>
                        <option value="event 3">e3</option>
                        <option value="event 4">e4</option>
                    </optgroup>
                    
                    <optgroup label='others'>
                        <option value="food">food</option>
                        <option value="kit">kit</option>
                        <option value="certificate">certificate</option>
                    </optgroup>
                
            </select>
            </p>
        </form>
    </div>
  )
}

export default AttendanceEvent