import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='Barangay' />
          <input type="text" placeholder='City'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Province'/>
        </div>
        <input type="text" placeholder='Contact Number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total Amount</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₱{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₱{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₱{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>

          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
