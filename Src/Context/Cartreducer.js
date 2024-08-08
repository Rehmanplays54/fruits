const Cartreducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { price, number, id, name, image } = action.payload;
        let cartProduct = {
            price: price,
            id: id,
            number: number,
            name: name,
            image: image,
        };


        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {

        console.log(action.payload);
        
        let updatedCart = state.cart.filter(
            (item) => item.id !== action.payload
        );

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "TOTAL_PRICE") {
        let total_price = state.cart.reduce((initval, item) => {
            let price = parseFloat(item.price); // Ensure price is a number
            let { number } = item;
    
            initval = initval + price * number;
            return initval;
        }, 0);
    
        return {
            ...state,
            total_price,
        };
    }
    

    // if (action.type === "TOTAL_PRICE") {
    //     let total_price = state.cart.reduce((initval, item) => {
    //         let { price, number } = item;

    //         initval = initval + price * number;
    //         return initval;
    //     }, 0);

    //     return {
    //         ...state,
    //         total_price,
    //     };
    // }

    return state;
};

export default Cartreducer;
