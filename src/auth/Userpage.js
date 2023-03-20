import React from 'react'
import { auth } from "../firebase"
import { signOut } from 'firebase/auth';
import { AlgoState } from '../Context';
import Button from '@material-ui/core/Button';

const Userpage = () => {

  const { setAlert } = AlgoState()

  const logOut = () => {
    signOut(auth)
    setAlert({
      open: true,
      type: "success",
      message: "Logout successfull!"
    })
  }
  return (
    <div>
      <p>userpage</p>
      <Button variant="contained" className="logout" onClick={logOut}>
        Logout
      </Button>

    </div>
  )
}

export default Userpage
