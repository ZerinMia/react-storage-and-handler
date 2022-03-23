//use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart
    const storeCart = localStorage.getItem('shoping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    }
    //add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart))
}


const removeFromDb = id => {
    const stordCart = localStorage.getItem('shoping-cart')
    if (stordCart) {
        const shoppingCart = JSON.parse(stordCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deteleShopingCart = () => {
    localStorage.removeItem('shoping-cart')
}
export {
    addToDb,
    removeFromDb,
    deteleShopingCart
}