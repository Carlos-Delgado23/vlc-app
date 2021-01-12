import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelector'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Header.styles.scss'

const Header = ({ currentUser, hidden }) => {

  return (
    <div className="header">
      <Link className='logo-container' to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/contact'>Contact</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null :
          <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
