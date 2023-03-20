import React from 'react'
import { useHistory } from 'react-router-dom';

const AuthModal = () => {
    const history = useHistory();

    
    const handleLogin = () => {
        history.push('/Login')
      }
  return (
    <div>
      <div className="gpt3__navbar-sign">
                <button className='Login' type='button' onClick={handleLogin}>Login</button>
            </div>
    </div>
  )
}

export default AuthModal
