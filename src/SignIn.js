import React from 'react'
import './SignIn.css'
import { auth, githubProvider } from './base'

const SignIn = ({ authHandler }) => {

    const authenticate = () => {
        authHandler (
            auth
                .signInWithPopup(githubProvider)
                .then((data) => {
                    authHandler(data.user)
                })
        )
    }

    return (
        <button className="SignIn" onClick={authenticate}>
            Sign In With Github
        </button>
    )
}

export default SignIn