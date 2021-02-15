import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument, addCollectinAndDocuments } from './firebase/firebase.utils'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import Header from './components/header/Header'
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp'
import CheckoutPage from './pages/checkout/checkout'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from './redux/shop/shopSelector'


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      addCollectinAndDocuments('collections', collectionsArray)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  setCurrentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
