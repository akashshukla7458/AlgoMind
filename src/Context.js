import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase';

const Algo = createContext();
const Context = ({ children }) => {


  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    })
  }, []);

  return (
    <Algo.Provider value={{ alert, user, setAlert }}>
      {children}
    </Algo.Provider>
  )
}

export default Context
export const AlgoState = () => {
  return useContext(Algo);
}