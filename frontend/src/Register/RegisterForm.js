import React, { useRef, useState } from 'react';
import { baseURL, eventURL } from '../constant/url.js';
import toast from 'react-hot-toast'

const RegisterForm = ({eventID}) => {
    const [isRegistered, setIsRegistered] = useState(false); // Track registration status

    // Create refs for each form input field
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const collegeRef = useRef('');
    const regnoRef = useRef('');
    const genderRef = useRef('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        

        // Collect data only when the submit button is clicked
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            college: collegeRef.current.value,
            regno: regnoRef.current.value,
            gender: genderRef.current.value,
        };
        if(!data.name){
            toast.error('name missing')
            nameRef.current.focus();
            return
        }else if(!data.email){
            toast.error('email missing')
            emailRef.current.focus();
            return
        }else if(!data.phone){
            toast.error('phone missing')
            phoneRef.current.focus();
            return
            
        }else if(!data.college){
            toast.error('college missing')
            collegeRef.current.focus();
            return
            
        }else if(!data.regno){
            toast.error('regno missing')
            regnoRef.current.focus();
            return
        
        }

        try {
            const res = await fetch(`${baseURL}/api/participant/${eventID || eventURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send the collected data
            });

            const responseData = await res.json();

            if (!res.ok) {
                throw new Error(responseData.error || 'Something went wrong');
            }

            // Set the registration status to true on success
            toast.success('Registeration success')
            setIsRegistered(true);
        } catch (err) {
            // console.error('Error during registration:', err.message);
            toast.error(err.message)
            switch (err.message){
                case 'invalid email format' :
                case 'email already exists' :
                    emailRef.current.focus();
                    break;
                case 'regno already exists' :
                    regnoRef.current.focus();
                    break;
                case 'invalid phone number' :
                    phoneRef.current.focus();
                    break;        
            }
        }
    };

    // Render success component if registration is successful
    if (isRegistered) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-green-600 text-xl font-bold">Thank you! Your registration has been completed successfully.</h1>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-green-500 to-teal-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registration Form</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              ref={nameRef}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="abc@example.com"
              ref={emailRef}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="1234567890"
              ref={phoneRef}
              pattern="[0-9]{10}"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">College Name:</label>
            <input
              type="text"
              id="college"
              placeholder="Your college name"
              ref={collegeRef}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              id="gender"
              ref={genderRef}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="regno" className="block text-sm font-medium text-gray-700">Register Number:</label>
            <input
              type="text"
              id="regno"
              placeholder="Your register number"
              ref={regnoRef}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:ring focus:ring-green-300 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default RegisterForm;
