import React from 'react'
<<<<<<< HEAD
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return (
        <button className="SignOut" onClick={ signOut }>
            Sign Out
        </button>
    )
}

export default SignOut
=======

import './SignOut.css'

const SignOut = ({ signOut }) => {
  return (
    <div className="SignOut">
      <button onClick={signOut}>
        <i className="fa fa-sign-out"></i>
      </button>
    </div>
  )
}

export default SignOut
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
