import React from 'react';
import CartButtons from '../component/cart/CartButtons';
import CartDetails from '../component/cart/CartDetails';
import CartImage from '../component/cart/CartImage';
import CartItem from '../component/cart/CartItem';
import Clearbutton from '../component/cart/Clearbutton';
import { CartContext } from '../CartContext';
import { ProductContext } from '../App';

function Cart() {
  const products = React.useContext(ProductContext);
  const value = React.useContext(CartContext);

  const cart = value.visible.cart || [];

  const getProductInfo = (id) => {
    return products.find((product) => product.id === id);
  };

  const totalSum = cart.reduce((acc, val) => {
    const productInfo = getProductInfo(val.id);
    return acc + val.amount * productInfo.price;
  }, 0);

  const totalAmount = cart.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);

  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <CartImage />
            <Clearbutton />
          </div>
          <div className="content__items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} product={getProductInfo(item.id)} value={value} />
            ))}
          </div>
          <div className="cart__bottom">
            <CartDetails sum={totalSum} amount={totalAmount} />
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
