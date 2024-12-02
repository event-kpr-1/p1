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
            const res = await fetch(`${baseURL}/api/provider/printid/${id}`,{
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
            const img = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`;
            setQRimg(img);
            
            
            // console.log("Search :" , detail);
        } catch (err) {
            setIsThere('not found')
            // alert("participant not found")
        }
        
    };
    
    
    const handlePrint = async () => {
        // Check if there's nothing to print
        if (isThere === 'participant' || isThere === 'not found') {
          alert("Nothing to print");
          return;
        }
      
        try {
          
          
      
          
          await new Promise((resolve) => setTimeout(resolve, 100));
      
          
          setDispPage(false);
      
          
          await new Promise((resolve) => setTimeout(resolve, 500));
      
          
          window.print();
      
          
          await new Promise((resolve) => setTimeout(resolve, 500)); 
          
          setDispPage(true);
          
          
          setId('');
          setDetail({});
          setIsThere('')
          await new Promise((resolve) => setTimeout(resolve, 500)); 
          inputRef.current.focus();
      
          console.log("Process completed.");
        } catch (error) {
          console.error("Error during the print process:", error);
        }
      };
      
      
      
    
    if(dispPage){
        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <label htmlFor="Printid" className="block text-sm font-medium text-gray-700">
              ID here:
            </label>
            <input
              type="text"
              id="Printid"
              value={id}
              onChange={(e) => setId(e.target.value)}
              ref={inputRef}
              className="mt-1 p-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSearch}
                className="w-1/2 mr-2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Search
              </button>
              <button
                onClick={() => handlePrint()}
                className="w-1/2 ml-2 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Print
              </button>
            </div>
          
            <p className="text-center text-gray-700 font-medium mt-4">{isThere}</p>
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