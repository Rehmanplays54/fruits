import { createContext, useContext } from "react";


export const FContext = createContext({
    Catagories: [
        {
            id: 1,
            name: 'Honey lime combo',
            price: '4000',
            add: require('../../assets/add.png'),
            image: require('../../assets/1.png'),
            c_btn: require('../../assets/curreny.png'),
            heart: Iccon
        }
    ]
})

export const useFrouits = () => {
    return useContext(useFrouits);
}

export const Froutprovider = FContext.Provider;