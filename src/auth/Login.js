import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import SignUpForm from './SignupForm';
import { AlgoState } from '../Context'


const Login = ({ handleClose }) => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = AlgoState();
  console.log(setAlert)

  
  const handleSubmit = async (e) => {

    e.preventDefault(); // prevent default form submission behavior
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the field",
        type: "error"
      })
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      })
      // handleClose();
      history.push('/');

    }
    catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      })
      return;
    }
  }

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign Up Successful , Welcome ${res.user.email}`,
          type: 'success',
        });
        // handleClose();
        history.push('/');
      })

      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: 'error',
        });
        return;
      });
  };


  
  return (
    <>
     
      <div className="my-unique-class">
        <div className="login-container">
          <div className="main-container">
            <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

            <SignUpForm />

            <div className="login">
              <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="chk" aria-hidden="true">
                  Login
                </label>


                <input className="inp" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />


                <input className="inp" type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />


                <button className="btn-btn" onClick={handleSubmit}>Login</button>
                <GoogleButton
                  style={{ width: '70%', height: '50px', outline: 'none', margin: '10px auto' }}
                  onClick={signInWithGoogle}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
