import React from 'react'

const RegisterForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted")
    }
  return (
    <div>
        <form action="">
        <p>
                        
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" id="Name" placeholder="your name" autoComplete="on" required />
        </p>
        <p>
            <label htmlFor="email">Mail:</label>
            <input type="email" name="email" id="email" placeholder="abc@gmail.com" autoComplete="on"  />
        </p>
        <p>
            <label htmlFor="phonenumber">Mobile:</label>
            <input type="tel" name="phonenumber" id="phonenumber" placeholder="1236547890" required pattern="[0-9]{10} " autoComplete="on" />
        </p>
        <p>
                        
            <label htmlFor="college_name">college_name:</label>
            <input type="text"  name="college_name" id="college_name" placeholder="your college_name" autoComplete="on" required />
        </p>
        <p>
            <label htmlFor="select">Subject:</label>
            <select name="select" id="select" placeholder="" >
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
                <option value="others">OTHERS</option>
            </select>
        </p>
        <p>
                        
            <label htmlFor="Register_no">Register_no:</label>
            <input type="text" name="Register_no" id="Register_no" placeholder="your Register_no" autoComplete="on" required />
        </p>
        <button
            onClick={(e) =>handleSubmit(e)}
        >submit</button>

        </form>
    </div>
  )
}

export default RegisterForm