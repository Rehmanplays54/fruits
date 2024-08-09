
import React, { createContext, useContext,useEffect,useReducer, useState } from 'react';
import Cartreducer from './Cartreducer';
import Icon from 'react-native-vector-icons/EvilIcons';

const Iccon = <Icon
    name='heart'
    size={30}
    color='#ffa451'
/>

const MyContext = createContext();


const DataProvider = ({ children }) => {
  
const initialstate={
  cart:[],
  price:"",
  id:"",
  number:"",
  name:"",
  image:"",
  totalprice:0
}

const [state,disptach]=useReducer(Cartreducer,initialstate)
// const total_price=()=>{
//   disptach({type:"TOTAL_PRICE"})
//  }

const addtocart=(price,id,number,name,image)=>{
disptach({type:"ADD_TO_CART", payload:{price,id,number,name,image}})
}
const removeitem=(id)=>{
  disptach({type:"REMOVE_ITEM",payload:id})
}
// useEffect(() => {
//   disptach({type:"TOTALCARTPRICE"})
// }, [state.cart]);
 
  const [data, setData] = useState([
  {
            id: 1,
        name: 'Honey lime combo',
        price: '4000',
        add: require('../../assets/add.png'),
        image: require('../../assets/1.png'),
        c_btn: require('../../assets/curreny.png'),
        heart: Iccon


    },
    {
        id: 2,
        name: 'Honey lime combo',
        price: '4000',
        add: require('../../assets/add.png'),
        image: require('../../assets/2.png'),
        c_btn: require('../../assets/curreny.png'),
        heart: Iccon

    },
    {
        id: 3,
        name: 'Honey lime combo',
        price: '6000',
        image: require('../../assets/p2.png'),
        c_btn: require('../../assets/curreny.png'),
        add: require('../../assets/add.png'),
        heart: Iccon

    },
    {
        id: 4,
        name: 'Honey lime combo',
        price: '8000',
        add: require('../../assets/add.png'),
        image: require('../../assets/p.png'),
        c_btn: require('../../assets/curreny.png'),
        heart: Iccon

    },

  ],   );

  return (
    <MyContext.Provider value={{ data, cart:state.cart,addtocart,removeitem,}}>
      {children}
    </MyContext.Provider>
  );
};
const usecartcontext=()=>{
  return useContext(MyContext);
}

export { MyContext, DataProvider,usecartcontext };

