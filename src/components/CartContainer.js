import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../action';

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch({ type: CLEAR_CART })}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(CartContainer);
