import React ,{useRef,useState,useEffect} from 'react'
import { scanner } from '../util/Functionalities'


const QrReader = ({setName}) => {
    
    const qrCodeRegionId = "qr-reader";
    const scannerRef = useRef(null);
    

    console.log('started')
    const handleScan = ()=> {
        scanner(scannerRef,qrCodeRegionId , setName);
        
    };
   
    useEffect(() => {
        handleScan()
    },[])
        

  
  return (
    <div className='bg-slate-500 bg-opacity-50 relative top-0 left-0 h-screen w-screen flex justify-center items-center'>
      
      
     

      <div ref={scannerRef} id={qrCodeRegionId} 
      className='bg-red-400 w-1/2 aspect-square border-black border-4   ' />
        
      
    </div>
  )
}

export default QrReader