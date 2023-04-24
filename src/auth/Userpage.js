import React from 'react'
import { auth } from "../firebase"
import { signOut } from 'firebase/auth';
import { AlgoState } from '../Context';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom';
import { Avatar } from '@material-ui/core';
import './Userpage.css'
const Userpage = () => {
  const history = useHistory();
  const { setAlert,user } = AlgoState()

  const logOut = () => {

    signOut(auth)
    setAlert({
      open: true,
      type: "success",
      message: "Logout successfull!"
    })
    history.push('/');
  }
  return (
    <div>
      <Navbar />
      <div className="sidebar">
      <Avatar
        className="avatar__userr"
        src={user.photoURL}
        alt={user.displayName || user.email}
      />
          <h2> { user.displayName}</h2>
      <Button  variant="contained" className="logout" onClick={logOut}>
        Logout
      </Button>
      </div>
      <Bottom />

    </div>
  )
}

export default Userpage
