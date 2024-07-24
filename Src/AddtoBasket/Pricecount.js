import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Pricecount = ({text}) => {
    const [number,setnumber]=useState(0);
    const [text1,settext1]=useState(0);
    const ptext=0;
        
    const CountAdd =()=>{
        setnumber(number+1);
        settext1(text1+text)
    
    }
    const CountMinus =()=>{
      
        if(number>=1){
        setnumber(number-1);
        }

    
        settext1(text1-text);
      
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
       >{text1}</Text>
    </View>
  )
}

export default Pricecount