//use local storage to manage cart data
const addToDb = id => {

    const shoppingCart = {}



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
export { addToDb }