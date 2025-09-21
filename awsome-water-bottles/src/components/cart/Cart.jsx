import React from 'react';
import './cart.css'

const Cart = ({cart, removeFromCart}) => {
    console.log(cart)
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div  key={bottle.id}>
                   <img src={bottle.img} alt="" />

                   <button onClick={()=>removeFromCart(bottle.id)}>x</button>

                </div>)
            }
        </div>
    );
};

export default Cart;