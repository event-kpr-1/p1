import React, { useState, useRef } from 'react';



const IDprintPage = () => {
    const [id, setId] = useState('');
    
    const [dispPage, setDispPage ] =useState(true)
    const inputRef = useRef();

    const handleSearch = () => {
        console.log("Search button clicked with ID:", id);
    };
    

    const handlePrint = () => {
        
        setDispPage(false);
        setTimeout(() => {
            window.print();
            setDispPage(true); 
            setTimeout(()=>{
                inputRef.current.focus();
            })           
        }, 0.1);
        
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
            <button onClick={handlePrint}>Print</button>

            </div>
        )}
    else{
        return(
        <div>
            <p>hi you are {id}</p>
        </div>
        )
    }
    
};
export default IDprintPage;