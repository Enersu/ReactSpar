import React from 'react';
import { CartContext } from '../CartContext';
import { ProductContext } from '../App';

function PizzaBlock(props) {
  const value = React.useContext(CartContext);
  const products = React.useContext(ProductContext);

  const cart = value.visible.cart || [];

  const getProductInfo = (id) => {
    return products.find((product) => product.id === id);
  };

  // const productAmount = cart.find((item) => {
  //   const productInfo = getProductInfo(item.id);
  //   if (item.id === productInfo.id) {
  //     return item.amount;
  //   }
  //   return 0;
  // });

  // console.log(productAmount);

  const productAmount = cart.map((item) => {
    const productInfo = getProductInfo(item.id);
    if (item.id === productInfo.id) {
      return item.amount;
    }
    return console.log('хрен');
  });

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{props.name}</h4>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {props.price} ₽</div>
        <div className="button button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={() => value.addProductToCart(props.id)}>Добавить</span>
          <i>{productAmount}</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
