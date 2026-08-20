import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeToCart, cartTotalAmount, URL } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* eslint-disable-next-line */}
        {food_list.some(item => cartItems[item._id] > 0) ? (
  food_list.map((item) => {
    if (cartItems[item._id] > 0) {
      return (
        <React.Fragment key={item._id}>
          <div className="cart-item-title">
            <img
              className="cart-item-image"
              src={URL + "/images/" + item.image}
              alt=""
            />

            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>${cartItems[item._id] * item.price}</p>

            <p
              className="cross"
              onClick={() => removeToCart(item._id)}
            >
              X
            </p>
          </div>

          <hr />
        </React.Fragment>
      );
    }

    return null;
  })
) : (
  <p className="empty-cart">No items in cart</p>
)}
      </div>

      <div className="cart-buttom">
        <div className="cart-buttom-left">
          <div className="title">
            <h2>Total Cart</h2>
          </div>
          <div className="cart-delivery-list">
            <p>Subtotal</p>
            <p>${cartTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-delivery-list">
            <p>Delivery fee</p>
            <p>${cartTotalAmount()===0 ? 0:49}</p>
          </div>
          <hr />
          <div className="cart-delivery-list">
            <p>Total</p>
            <p>${cartTotalAmount()===0 ? 0:cartTotalAmount() + 49}</p>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-buttom-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="promo-code">
            <input type="text" placeholder='promo code'/>
            <button>Promo code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart