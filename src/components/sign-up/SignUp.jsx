import React from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignUpContainer, SignUpTitle } from './SignUp.styles'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email Address'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp
