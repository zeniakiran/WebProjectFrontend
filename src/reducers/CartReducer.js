const CartReducer = (state,action) =>{
    switch(action.type){
        case 'addCartItem':
            return [...state, {
                id: action.cartItem.id,
                url: action.cartItem.url,
                item: action.cartItem.item,
                price: action.cartItem.price,
                quantity: action.cartItem.quantity
            }]
        case 'removeCartItem':
                return state.filter(cartItem => cartItem.id !== action.id)
        case 'setQuantity':
                return [...state,{
                    quantity: action.cartItem.quantity
                }]
        default:
            return state

    }
}
export default CartReducer;