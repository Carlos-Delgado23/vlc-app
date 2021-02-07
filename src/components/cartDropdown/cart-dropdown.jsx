import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cartItem/cartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

import { CartDropdownContainer, CartItemsStyle, CartDropdownButton, EmptyMessageStyle } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsStyle>
      {
        cartItems.length
          ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : (<EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>)
      }
    </CartItemsStyle>
    <CartDropdownButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden)
    }}>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))