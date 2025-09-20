import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, hadleCart}) => {
    // ekhane disruct kore use kore kaj korte sunidh ejonno eta korlam
    const {img, name, price, stock} = bottle;
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <h5> Available : {stock}</h5>
            <button onClick={()=> hadleCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;