import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './SignIn.styles';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.error(err)
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            handleChange={this.handleChange}
            value={this.state.email}
            required />

          <FormInput
            type='password'
            name='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required />

          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Google Sign In </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}
