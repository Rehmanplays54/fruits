
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Image,Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'; // Replace with your desired icon library
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const Deal2 = () => {
  const pima=require('../../../assets/1.png')
    const [iconColor, setIconColor] = useState('#FFA451');
    const [bgColor, setBgColor] = useState('transparent');
  const navigation=useNavigation();
  const price=10000;
  const name=' Honey fruit combo';
    const handlePress = () => {
      setIconColor(iconColor === '#FFA451' ? '#fff' : '#FFA451'); // Toggle between black and red
      setBgColor(bgColor === 'transparent' ? '#FFA451' : 'transparent'); // Toggle between white and grey
    };
    const [isPressed, setIsPressed] = useState(false);
   
  return (
    <View>
       <TouchableOpacity
       onPress={()=>navigation.navigate('Details',{text:name,  image:pima, text1:price})}
     style={{
        backgroundColor:'rgba(254, 240, 240, 1)',
        width:wp('45%'),
        alignItems:'center',
        height:hp('25%'),
        elevation: 2,
        borderRadius:20,
        left:hp('-2%'),
        
        
       
       
     }}>

         <TouchableOpacity
        style={{backgroundColor:bgColor,
        borderRadius:30,
        left:hp('7%'),
        top:hp('1%'),
        padding:5

 }}
        onPress={handlePress}
 >
                                  
     <Icon 
     name='heart' 
     size={30} 
     color={iconColor} 
     
     />
    </TouchableOpacity>

        <Image 
        style=
        {{
            width:wp('25%'),
            height:hp('12%'),
            borderRadius:80
        }} 
        source=
        {
            require('../../../assets/1.png')
        }
        />

        <Text
        style={{
            fontWeight:900,
            top:hp('0.5%'),
            fontSize:17
        }}
        >
        Tropical fruit salad
        </Text>
        <Image
         style=
         {{
            left:hp('-7.5%'),
            top:hp('2%')
        }}
        
        source={require('../../../assets/curreny.png')}/>
        <Text 
        style={{
            fontWeight:900,
            color:'#FFA451',
            fontSize:17,
            left:hp('-2.8%'),
            top:hp('-0.3%')
        }}>
        {price}
        </Text>
        <Image 
         style={{
           
            left:hp('6.8%'),
            top:hp('-3%')
        }}
        source={
            require('../../../assets/add.png')
            }
            />
     </TouchableOpacity>
    </View>
  )
}

export default Deal2