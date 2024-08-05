import { View, Text,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/EvilIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../HomeComponents/Navbar';
const BottomSection = ({price,id,number}) => {
//console.log( number, price, text, image );


    const [iconColor, setIconColor] = useState('#FFA451');
    const [bgColor, setBgColor] = useState('#FFF7F0');
   const navigation=useNavigation();
    const handlePress = () => {
      setIconColor(iconColor === '#FFA451' ? '#fff' : '#FFA451'); 
      setBgColor(bgColor === '#FFF7F0' ? '#FFA451' : '#FFF7F0'); 
    };
    

  return (
    <View style={{top:90}}>
    
       <TouchableOpacity
        style={{
          backgroundColor:bgColor,
        borderRadius:90,
        left:hp('6%'),
        top:hp('20%'),
        width:hp('5'),
        height:hp('5%'),
        paddingTop:hp(1.3),
        paddingLeft:hp(1)
        

 }}
        onPress={handlePress}
 >
                                  
     <Icon  
     name='heart' 
     size={25} 
     color={iconColor} 
     
     />
    </TouchableOpacity>
    <TouchableOpacity >
    <Text
                style={{ 
                    width: wp('60%'),
                    height: hp('6%'), 
                    color: '#ffffff',
                    left:hp('15'),
                    top:hp('15'),
                    textAlign: 'center',
                    backgroundColor: '#FFA451',
                    textAlignVertical: 'center',
                    borderRadius: 10
                }}
                onPress={()=> navigation.navigate('Basket', {price,id,number})}
                
               
            >
            
                Add to favourate
            </Text>
          
            </TouchableOpacity>
            
    </View>
  )
}

export default BottomSection