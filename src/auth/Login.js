import React from 'react'
import './Login.css'
import { useState } from "react";
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  })


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      setAlert({
        open: true,
        message: `Sign Up Successful , Welcome ${res.user.email}`,
        type: "success"

      })
      handleClose();
    })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error"
        })
        return;
      })
  }


  return (

    <body class="my-unique-class">
      <div className='login-container'>
        <div className="main-container">
          <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input className='inp' type="text" name="txt" placeholder="User name" required />
              <input className='inp' type="email" name="email" placeholder="Email" required />
              <input className='inp' type="password" name="pswd" placeholder="Password" required />
              <button className='btn-btn' >Sign up</button>
              <GoogleButton
                style={{ width: "70%", height: "50px", outline: "none", margin: "10px auto" }}
                onClick={signInWithGoogle}
              />
            </form>
          </div>

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input className='inp' type="email" name="email" placeholder="Email" required />
              <input className='inp' type="password" name="pswd" placeholder="Password" required />
              <button className='btn-btn'>Login</button>
              <GoogleButton
                style={{ width: "70%", height: "50px", outline: "none", margin: "10px auto" }}
                onClick={signInWithGoogle}
              />
            </form>
          </div>
        </div>
      </div>
    </body>

  )
}

export default Login
