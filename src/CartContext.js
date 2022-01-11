import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = React.useState({ cart: [] });

  // console.log(count.cart);

  const addProductToCart = (id) => {
    const productFromCart = count.cart.find((item) => item.id === id);
    if (productFromCart) {
      const newCart = count.cart.map((existedItem) => {
        if (existedItem.id !== id) {
          return existedItem;
        }
        return {
          ...existedItem,
          amount: existedItem.amount + 1,
        };
      });
      setCount(() => ({ cart: newCart }));
    } else {
      const newProduct = { id, amount: 1 };
      setCount((count) => ({ cart: [...count.cart, newProduct] }));
    }
    // console.log(productFromCart);
  };

  const clearCart = () => setCount(() => ({ cart: [] }));

  const addAmount = (id) => {
    const updatedCart = count.cart.map((existedItem) => {
      if (existedItem.id !== id) {
        return existedItem;
      }
      return {
        ...existedItem,
        amount: existedItem.amount + 1,
      };
    });
    setCount({ cart: updatedCart });
  };

  const reduceAmount = (id) => {
    const productFromCart = count.cart.find((item) => item.id === id);
    if (productFromCart.amount > 1) {
      const updatedAmount = count.cart.map((existedItem) => {
        if (existedItem.id !== id) {
          return existedItem;
        }
        return {
          ...existedItem,
          amount: existedItem.amount - 1,
        };
      });
      setCount({ cart: updatedAmount });
    } else {
      const updatedCart = count.cart.filter((existedItem) => existedItem.id !== id);
      setCount({ cart: updatedCart });
    }
  };

  const clearProduct = (id) => {
    const updatedCart = count.cart.filter((existedItem) => existedItem.id !== id);
    setCount({ cart: updatedCart });
  };

  return (
    <CartContext.Provider
      value={{
        visible: count,
        addProductToCart,
        clearCart,
        addAmount,
        reduceAmount,
        clearProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
};
