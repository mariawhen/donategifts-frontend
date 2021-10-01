import React from 'react';
import { CartItemType } from '../../pages/_app';
import CartItem from './CartItem/CartItem';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>My Donation Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map(item => (
          <CartItem>
      ))}
    </div>
  );
};

export default Cart;