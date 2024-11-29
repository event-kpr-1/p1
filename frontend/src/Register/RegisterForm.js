import React ,{useState} from 'react'
import {baseURL} from '../constant/url.js'

const RegisterForm = () => {
    const [data, setData] = useState({
        email : "",
        name : "",
        college : "",
        regno : "",
        gender : "",
        phone : ""
    })

    const handleChange = (e) => {
        setData({...data,[e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch(`${baseURL}/api/participant/register`,{
                method : "POST",
                
                headers : {
                    "content-Type" : "application/json",
                    
                },
                body : JSON.stringify({email : data.email,gender : data.gender,phone : data.phone,college : data.phone,regno : data.regno,name : data.name})

            })
            const datas = await res.json();

            if(!res.ok){
                throw new Error(data.error || "something went wrong");
            }
            console.log(datas)

        } catch (err) {
            console.log(err)
            throw err;
        }
        console.log(data)
        alert("regesteration successful")
    }
  return (
    <div className="max-w-lg mx-auto  p-6 h-screen bg-green-500 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        <form action=""  className="space-y-5  border-2 p-4 rounded-2xl">
            
            {/* Name Input */}
            <div>
            <label htmlFor="Name" className="block text-sm font-medium text-black">
                Name:
            </label>
            <input
                type="text"
                name="name"
                id="Name"
                placeholder="Your name"
                autoComplete="on"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            />
            </div>

            {/* Email Input */}
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
                Email:
            </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com"
                onChange={handleChange}
                autoComplete="on"
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            />
            </div>

            {/* Phone Number Input */}
            <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium text-black">
                Mobile:
            </label>
            <input
                type="tel"
                name="phone"
                id="phonenumber"
                placeholder="1236547890"
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
                autoComplete="on"
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            />
            </div>

            {/* College Name Input */}
            <div>
            <label htmlFor="college_name" className="block text-sm font-medium text-black">
                College Name:
            </label>
            <input
                type="text"
                name="college"
                id="college_name"
                placeholder="Your college name"
                onChange={handleChange}
                autoComplete="on"
                required
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit "
            />
            </div>

            {/* Subject Select */}
            <div>
            <label htmlFor="select" className="block text-sm font-medium text-black">
                Gender:
            </label>
            <select
                name="gender"
                id="select"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            >
                <option value="M">MALE</option>
                <option value="F">FEMALE</option>
                <option value="O">OTHERS</option>
            </select>
            </div>

            {/* Register Number Input */}
            <div>
            <label htmlFor="Register_no" className="block text-sm font-medium text-black">
                Register Number:
            </label>
            <input
                type="text"
                name="Regno"
                id="Register_no"
                placeholder="Your register number"
                onChange={handleChange}
                autoComplete="on"
                required
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            />
            </div>

            {/* Submit Button */}
            <div className="text-center">
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 p-2  border focus:ring-offset-2"
                onClick={(e)=>handleSubmit(e)}
            >

                Submit
            </button>
            </div>
        </form>
    </div>

  )
}

export default RegisterForm