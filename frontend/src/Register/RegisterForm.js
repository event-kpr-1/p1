import React from 'react'

const RegisterForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted")
    }
  return (
    <div className="max-w-lg mx-auto  p-6 h-screen bg-green-500 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        <form action="" onSubmit={(e) => handleSubmit(e)} className="space-y-5  border-2 p-4 rounded-2xl">
            
            {/* Name Input */}
            <div>
            <label htmlFor="Name" className="block text-sm font-medium text-black">
                Name:
            </label>
            <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Your name"
                autoComplete="on"
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
                name="phonenumber"
                id="phonenumber"
                placeholder="1236547890"
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
                name="college_name"
                id="college_name"
                placeholder="Your college name"
                autoComplete="on"
                required
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit "
            />
            </div>

            {/* Subject Select */}
            <div>
            <label htmlFor="select" className="block text-sm font-medium text-black">
                Subject:
            </label>
            <select
                name="select"
                id="select"
                className="mt-1 block w-full rounded-md border-white border-2 shadow-sm focus:border-indigo-500 p-2 bg-inherit"
            >
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
                <option value="others">OTHERS</option>
            </select>
            </div>

            {/* Register Number Input */}
            <div>
            <label htmlFor="Register_no" className="block text-sm font-medium text-black">
                Register Number:
            </label>
            <input
                type="text"
                name="Register_no"
                id="Register_no"
                placeholder="Your register number"
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
            >
                Submit
            </button>
            </div>
        </form>
    </div>

  )
}

export default RegisterForm