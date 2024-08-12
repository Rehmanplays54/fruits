const Cartreducer = (state, action) => {



    if (action.type === "ADD_TO_CART") {
        let { price,id,number, name, image } = action.payload;
        const existingProduct = state.cart.find((item) => item.id == id);
         console.log('help me');
        
        if (existingProduct) {
            
            const updatedCart = state.cart.map((product) => {
                if (product.id === id) {
                    const newNumber = product.number + number;
                    const newPrice= price + price;
                    return {
                        ...product,
                        number: newNumber,
                     price:newPrice,
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

    return state;
};

export default Cartreducer;
