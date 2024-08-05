import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BottomSection from './BottomSection';
import OList from '../OrderList/OList';
import Navbar from '../HomeComponents/Navbar';

const Pricecount = ({text1,id}) => {
  

    const [number,setnumber]=useState(1);
    const [price,setprice]=useState(text1);
  const pri=text1;

    const CountAdd =()=>{
      const newNumber = number + 1;
      setnumber(newNumber);
      setprice(newNumber * text1);
      
     
    }
    const CountMinus =()=>{
      
      const newNumber = number - 1;
      if(number<=1){
        Alert.alert('Minimum order should be 1 ')
          const num=1;
          setnumber(num);
       setprice(pri);
          
      }
      else{
        setnumber(newNumber)
        setprice(newNumber * text1);
     
    
      }
      
   

  
      
    }
   
  return (
    <View>
        <TouchableOpacity onPress={CountMinus}>
      <Image
      style={{
        width:wp('6.5'),
        height:hp('3.1'),
        left:hp('2.7'),
        top:hp('3.5')
    }}
       source=
       {require('../../assets/minus.png')
       }
       />
       </TouchableOpacity>
       <Text 
       style={{
        left:hp('7.5'),
        top:hp('0.6'),
        fontSize:16
       }}>
        {number}
       </Text>
        <TouchableOpacity onPress={CountAdd}>
        <Image
        
          style={{
            
            width:wp('6.5'),
            height:hp('3'),
            marginLeft:hp('11'),
            bottom:hp('2')
        }}
       source=
       {require('../../assets/add.png')
       }
       />
       </TouchableOpacity>
       <Image 
       style={{
        left:hp('32%'),
        bottom:hp('4.5%'),
    }}
       source={require('../../assets/curr.png')}/>
       <Text
       style={{
        fontSize:20,
        left:hp('36%'),
        bottom:hp('7.4%')
       }}

       >
      
        {price}</Text>

        <BottomSection price={price} id={id} number={number}/>
    
    </View>
  )
}

export default Pricecount