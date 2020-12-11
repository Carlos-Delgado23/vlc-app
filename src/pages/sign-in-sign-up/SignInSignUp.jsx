import React from 'react'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import './SignInSignUp.styles.scss'

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sing-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
