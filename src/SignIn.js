import React from 'react'
<<<<<<< HEAD
import './SignIn.css'
import { auth, githubProvider } from './base'

const SignIn = () => {

    const authenticate = () => {
        auth.signInWithPopup(githubProvider)
    }

    return (
        <button className="SignIn" onClick={authenticate}>
            Sign In With Github
        </button>
    )
}

export default SignIn
=======

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <button
        className="SignIn"
        onClick={() => authenticate(githubProvider)}
      >
        Sign In With GitHub
      </button>
      <button
        className="SignIn"
        onClick={() => authenticate(googleProvider)}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
