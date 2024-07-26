import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from './AddtoBasket/Navbar'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Pricecount from './AddtoBasket/Pricecount';
import Line from './AddtoBasket/Line';
import Text1 from './AddtoBasket/Text1';
import Line2 from './AddtoBasket/Line2';
import Text2 from './AddtoBasket/Text2';
import BottomSection from './AddtoBasket/BottomSection';

const Details = ({route}) => {
    const { text, image, text1} = route.params??null;
    
  return (
    <View>
   
      <Navbar image= {image }/>
     
     <View 
     style={{
      height:900,
      top:-26,
      backgroundColor:'#fff',
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
     }}
     >
       <Text style={{
        fontSize:28,
        fontWeight:600,
        left:hp('2%'),
        top:hp('1.8'),

      }}>
      {text}
      </Text>
      <Pricecount text1={text1}/>
      <Line/>
      <Text1/>
      < Line2/>
      <Text2/>
      <BottomSection text1={text1}/>
      </View>
   
    </View>
  )
}

export default Details