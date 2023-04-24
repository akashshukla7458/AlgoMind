import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AlgoState } from '../Context';

const SignUpForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();


  const { setAlert } = AlgoState()


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Password do not match",
        type: "error"
      })
      return
    }


    //wrap functionality in try and catch
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      setAlert({
        open: true,
        message: `Sign up successful. Welcome ${result.user.email}`,
        type: "success"

      })
      // handleClose()
      history.push('/login');

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
    <div className="signup">
      <form method="POST">
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input className="inp" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />


        <input className="inp" type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />


        <input className="inp" type="password" name="pswd" placeholder="Confirm Password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button className="btn-btn" onClick={handleSubmit}>Sign up</button>
        <GoogleButton
                  style={{ width: '70%', height: '50px', outline: 'none', margin: '10px auto' }}
                  onClick={signInWithGoogle}
                />
      </form>
    </div>
  );
};

export default SignUpForm;
