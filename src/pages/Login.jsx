import React from 'react'
import add from '../asset/addAvatar.png'
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Krishna Chat</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>Don't Have an Account ? Register </p>
        </div>
    </div>
  )
}

export default Login