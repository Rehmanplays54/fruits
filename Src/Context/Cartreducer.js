const Cartreducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let {  price, number,id,name,image } = action.payload;
        let cartProduct = {
       
            price: price,
            number: number,
            id: id,
            name:name,
            image:image,
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct], 
        };
    }
    if(action.type ==="REMOVE_ITEM"){
        let updatedCart = state.cart.filter((item)=>item.id !== action.payload );
      return{
        ...state,
        cart:updatedCart
      }
    }
    return state;
};

export default Cartreducer;
