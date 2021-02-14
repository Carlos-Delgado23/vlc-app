import React from 'react'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import { SignInAndSignUpContainer } from './SignInSignUp.styles'

const SignInSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInSignUp
