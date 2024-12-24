import React, { useState, useRef } from 'react';
import { baseURL ,eventURL} from '../constant/url';
import {BiQrScan} from 'react-icons/bi'
import { scanner } from '../util/Functionalities';
import toast from 'react-hot-toast'





const IDprintPage = ({eventID}) => {
    const [id, setId] = useState('');
    const [QRimg,setQRimg] = useState('')
    const [detail,setDetail] = useState({})
    const [isThere,setIsThere] = useState('')
    
    const [dispPage, setDispPage ] =useState(true)
    const inputRef = useRef();

    const scannerRef = useRef('null')
    const qrCodeRegionId = "qr-reader";
    
    
    const handleSearch = async () => {
      if(!id){
        toast.error('no id entered')
        setIsThere('')
        return;
      }
        try {
            console.log("search click")
            // console.log(baseURL)
            const res = await fetch(`${baseURL}/api/provider/${eventID || eventURL}/printid/${id}`,{
                method : "GET",
                credentials : 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
            })
            
            const participant = await res.json();
            if(!res.ok){
              
              console.log(participant.error)
              throw new Error(participant.error || "data not found")

            }
            setDetail(participant)
            setIsThere(participant.name)
            const img = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`;
            setQRimg(img);
            
            
            // console.log("Search :" , detail);
          } catch (err) {
            toast.error('data not found')
            setIsThere('')
            
        }
        
    };
    
    const handleScan = ()=> {  
      scanner(scannerRef,qrCodeRegionId , setId);
    };

    const handlePrint = async () => {
        // Check if there's nothing to print
        if (isThere === '') {
          toast("Nothing to print");
          return;
        }
      
        try {
          
          
      
          
          // await new Promise((resolve) => setTimeout(resolve, 100));
      
          
          setDispPage(false);
      
          
          await new Promise((resolve) => setTimeout(resolve, 500));
      
          
          window.print();
      
          
          await new Promise((resolve) => setTimeout(resolve, 500)); 
          
          setDispPage(true);
          
          
          toast.success('done ✔')
          setId('');
          setQRimg('');
          setDetail({});
          setIsThere('')
          await new Promise((resolve) => setTimeout(resolve, 500)); 
          inputRef.current.focus();
      
        } catch (err) {
          toast.error(err.message)
        }
      };
      
      
      
    
      if (dispPage) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg ">
                    <div className="mb-6">
                        <label htmlFor="Printid" className="block text-lg font-semibold text-gray-700">
                            Enter ID:
                        </label>
                        <div className="flex items-center gap-3 mt-3">
                            <input
                                type="text"
                                id="Printid"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                ref={inputRef}
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter ID"
                            />
                            <button
                                onClick={handleScan}
                                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <BiQrScan size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handleSearch}
                            className="w-1/2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Search
                        </button>
                        <button
                            onClick={handlePrint}
                            className="w-1/2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 ml-3"
                        >
                            Print
                        </button>
                    </div>

                    <p className="text-center text-gray-600 font-medium mt-4">{isThere}</p>
                    <div
                        ref={scannerRef}
                        id={qrCodeRegionId}
                        className="mt-6 aspect-square h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto"
                    >
                        
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Participant Details</h2>
                <img src={QRimg} alt={id} className="w-32 h-32 mb-4" />
                <p className="text-gray-700">Name: {detail.name}</p>
                <p className="text-gray-700">Reg No: {detail.regno}</p>
                <p className="text-gray-700">Phone: {detail.phone}</p>
                <p className="text-gray-700">College: {detail.college}</p>
                <p className="text-gray-700">Email: {detail.email}</p>
            </div>
        );
    }
    
};
export default IDprintPage;