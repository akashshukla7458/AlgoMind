import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { AlgoState } from '../Context';

const SignUpForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAlert } = AlgoState()


  const handleSubmit = async () => {
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
      handleClose()

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



  return (
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input className="inp" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />


        <input className="inp" type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />


        <input className="inp" type="password" name="pswd" placeholder="Confirm Password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button className="btn-btn" onClick={handleSubmit}>Sign up</button>

      </form>
    </div>
  );
};

export default SignUpForm;
