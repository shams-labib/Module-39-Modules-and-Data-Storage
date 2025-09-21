import { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToStoreCart, getStoredCart, removeFromLocalStorage } from "../LocalStorage/storage";
import Cart from "../cart/Cart";

const Bottles = ({bottlesPromise}) => {
    const [count, setCount] = useState([])

    const hadleCart = (bottle)=>{
        // ekhane ekta twist hosce suppose ami jdi kono cart e click kori ar jeta add holo eta count korte cai, tahole eta amar must mathay rakhtei hobe

        const newCount = [...count, bottle]
        setCount(newCount)

        addToStoreCart(bottle.id)
    }


    const bottles = use(bottlesPromise);

      // useEffect 
    useEffect(()=>{
        const storeCartIds = getStoredCart();
        // console.log(storeCartIds, bottles)

        const storeCart = [];

        for(const id of storeCartIds){
            const cartBottles = bottles.find(bottle => bottle.id === id)

            if(cartBottles){
                storeCart.push(cartBottles)
            }

            // console.log('stored cart', storeCart)
            setCount(storeCart)
        }
    }, [bottles])

    const removeFromCart = id =>{
          console.log('remove from cart', id)

          const remainingCart = count.filter(bottle => bottle.id !== id);
          setCount(remainingCart);
          removeFromLocalStorage(id)
    }


    return (
        <div >
            <h1>Bottles : {bottles.length}</h1>
            <p>Cart added : {count.length}</p>

            <Cart removeFromCart={removeFromCart} cart ={count}></Cart>

            <div className="grid">
                {
                bottles.map(bottle => <Bottle hadleCart={hadleCart} key={bottle.id} bottle = {bottle}></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottles;