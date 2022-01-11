import React from 'react';

function CartDetails(props) {
  const totalSum = props.sum;
  const totalAmount = props.amount;

  return (
    <div className="cart__bottom-details">
      <span>
        {' '}
        Всего пицц: <b>{totalAmount}</b>{' '}
      </span>
      <span>
        {' '}
        Сумма заказа: <b>{totalSum} ₽</b>{' '}
      </span>
    </div>
  );
}

export default CartDetails;
