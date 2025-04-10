import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Jazzmaster', price: 1050, quantity: 1, img: '/img/featured1.png' },
    { id: 2, name: 'Rose Gold', price: 850, quantity: 1, img: '/img/featured3.png' },
    { id: 3, name: 'Longines Rose', price: 980, quantity: 1, img: '/img/new1.png' },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart" id="cart">
      <i className="bx bx-x cart__close" id="cart-close"></i>

      <h2 className="cart__title-center">My Cart</h2>

      <div className="cart__container">
        {cartItems.map((item) => (
          <article className="cart__card" key={item.id}>
            <div className="cart__box">
              <img src={item.img} alt={item.name} className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">{item.name}</h3>
              <span className="cart__price">${item.price}</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span
                    className="cart__amount-box"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">{item.quantity}</span>

                  <span
                    className="cart__amount-box"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i
                  className="bx bx-trash-alt cart__amount-trash"
                  onClick={() => handleRemoveItem(item.id)}
                ></i>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cart__prices">
        <span className="cart__prices-item">{totalItems} items</span>
        <span className="cart__prices-total">${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;