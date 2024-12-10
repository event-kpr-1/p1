import React ,{useRef,useState,useEffect} from 'react'
import { scanner } from '../util/Functionalities'


const QrReader = ({qrCodeRegionId,scannerRef}) => {
    
    
    

    console.log('started')
    
   
    
        

  
  return (
    <div className=' absolute top-0 left-0 h-screen w-screen flex justify-center items-center'>
      
      
     

      <div ref={scannerRef} id={qrCodeRegionId} 
      className='bg-red-400 bg-opacity-30 w-1/2 aspect-square border-black border-4   ' />
       {/* < button onClick={handleScan}>scan</button> */}
      
    </div>
  )
}

export default QrReader