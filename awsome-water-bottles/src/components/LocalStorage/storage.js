// ekhane ei function use korar main target holo amra LocalStorage theke data niye ashbo then, getCartFromLocalStorage() theke data take parse e convert korbo then eta niye next e kaj korar jonno eta abar notun kore getItemToCartLocalStorage() e add korbo then data take save korar jonno eta abar localStorage e JSON.stringyfy use kore seta pathay diye save korbo




const getCartFromLocalStorage = ()=>{
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return []
}


const saveCartToLocaStorage = cart =>{
    const cartStrigyFied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrigyFied)
}





const addItemToCartLocalStorage = (id)=>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    saveCartToLocaStorage(newCart)
}


const removeFromLocalStorage = id=>{
      const storedCart = getCartFromLocalStorage();
      const remainingCart = storedCart.filter(storedId => storedId !== id);
      saveCartToLocaStorage(remainingCart);
}

export {getCartFromLocalStorage as getStoredCart, 
    addItemToCartLocalStorage as addToStoreCart,
     removeFromLocalStorage}