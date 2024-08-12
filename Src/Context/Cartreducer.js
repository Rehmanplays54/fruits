const Cartreducer = (state, action) => {



    if (action.type === "ADD_TO_CART") {
        let { price, id,number, name, image } = action.payload;
        const existingProduct = state.cart.find((item) => item.id === id);
 
 
        if (existingProduct) {
            const updatedCart = state.cart.map((product) => {
                if (product.id === id) {
                    const newNumber = product.number + id;
                    return {
                        ...product,
                        id: newNumber,
                    };
                }
                return product;
            });

            return {
                ...state,
                cart: updatedCart,
            };
        } 
        else {
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

}


    // Remove item
    if (action.type === "REMOVE_ITEM") {

       
        
        let updatedCart = state.cart.filter(
            (item) => item.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "TOTALCARTPRICE") {
        const totalPrice = state.cart.reduce((sum, item) => sum + item.price, 0);
        return {
          ...state,
          totalPrice,
        };
    }

    return state;
};

export default Cartreducer;
