import { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const [count, setCount] = useState([])

    const hadleCart = (bottle)=>{
        // ekhane ekta twist hosce suppose ami jdi kono cart e click kori ar jeta add holo eta count korte cai, tahole eta amar must mathay rakhtei hobe

        const newCount = [...count, bottle]
        setCount(newCount)
    }

    const bottles = use(bottlesPromise);


    return (
        <div >
            <h1>Bottles : {bottles.length}</h1>
            <p>Cart added : {count.length}</p>

            <div className="grid">
                {
                bottles.map(bottle => <Bottle hadleCart={hadleCart} key={bottle.id} bottle = {bottle}></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottles;