
import React, { createContext, useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

const Iccon = <Icon
    name='heart'
    size={30}
    color='#ffa451'
/>

const MyContext = createContext();


const DataProvider = ({ children }) => {
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
  ]);

  return (
    <MyContext.Provider value={{ data }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, DataProvider };
