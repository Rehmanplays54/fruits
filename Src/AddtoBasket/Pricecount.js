import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Text1 from './Text1';
import BottomSection from './BottomSection';

const Pricecount = ({text1}) => {
  

    const [number,setnumber]=useState(1);
    const [price,setprice]=useState(text1);
  
    const ptext=number;
    const CountAdd =()=>{
      const newNumber = number + 1;
      setnumber(newNumber);
      setprice(newNumber * text1);
     
    }
    const CountMinus =()=>{
      
      const newNumber = number - 1;
      if(number<=1){
        Alert.alert('Minimum order should be 1 ')
          const num=0;
          setnumber(num);
          
      }
      else{
        setnumber(newNumber)
      }
      
      setprice(newNumber * text1);

    
      
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
       <BottomSection number={number} price={price}/>
    </View>
  )
}

export default Pricecount