import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import './SignIn.styles.scss'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
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

          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}