import React, { useState, useRef } from 'react';
import { baseURL } from '../constant/url';




const IDprintPage = () => {
    const [id, setId] = useState('');
    const [QRimg,setQRimg] = useState('')
    const [detail,setDetail] = useState({})
    const [isThere,setIsThere] = useState('participant')
    
    const [dispPage, setDispPage ] =useState(true)
    const inputRef = useRef();
    
    
    const handleSearch = async () => {
        try {
            console.log("search click")
            const res = await fetch(`${baseURL}/api/participant/show/${id}`,{
                method : "GET",
                credentials : 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
            })
            
            const participant = await res.json();
            if(!res.ok){
                console.log("data not found")
                throw new Error(participant.error || "data not found")
            }
            setDetail(participant)
            setIsThere(participant.name)
            
            
            // console.log("Search :" , detail);
        } catch (err) {
            setIsThere('not found')
            // alert("participant not found")
        }
        
    };
    
    
    const handlePrint = async () => {
        
        if(isThere === 'participant' || isThere === 'not found'){
            alert("nothing to print")
        }
        else{
            const img =  (`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`)
            setQRimg(img)
            setDispPage(false);
            setTimeout(async() => {
                window.print();
                setTimeout(()=>{
                    setDispPage(true); 
                    setTimeout(() => {
                        inputRef.current.focus();
                        setId('')
                        setDetail({})
                    })
                },500)           
            }, 50);
        }     
    }
    
    if(dispPage){
        return (
            <div>
            <label htmlFor="Printid">ID here:</label>
            <input 
                type="text" 
                id="Printid" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                ref={inputRef}
                
                />

            <button onClick={handleSearch}>Search</button>
            <button onClick={() =>handlePrint()}>Print</button>
            <p>{isThere}</p>
            
            </div>
        )}
    else{
        return(
        <div>
            <p>hi you are {id}</p>
            <img src={QRimg} alt={id} />
            <p>{detail.name}</p>
            <p>{detail.phone}</p>
            <p>{detail.college}</p>
            <p>{detail.email}</p>
        </div>
        )
    }
    
};
export default IDprintPage;