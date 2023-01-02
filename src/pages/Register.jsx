import React from 'react'
import add from '../asset/addAvatar.png'
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Krishna Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file"><img src={add} alt="image" /> Add an avatar </label>
                <button>Sign Up</button>
            </form>
            <p>Already Have an Account ? Login </p>
        </div>
    </div>
  )
}

export default Register