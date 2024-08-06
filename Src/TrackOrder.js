import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TrackOrder = () => {
  const navigation=useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#FFA451',
        width: hp('100%'),
        height: hp('20%')
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('PayDone')}
        style={{
          backgroundColor: '#fff',
          width: wp('23%'),
          height: hp('5%'),
          borderRadius: 55,
          top: hp('4'),
          left: 10
        }}
      >
        <Icon
          name='arrow-left'
          size={30}
          color='#000'
          style={{ top: hp('1') }}
        />
        <Text
          style=
          {{
            left: hp('3.8'),
            top: -14
          }}
        >GO back

        </Text>

      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          left: hp('19%'),
          top: hp('-0.5%'),
          color: '#fff',
          fontWeight: 600
        }}
      >Delivery Status</Text>
<View style={{backgroundColor:'#fff',top:60,height:900}}>
{/* Rider Component 1 */}
      <View 
      style={{
      
       top:hp('7'),
       left:hp('5')
      }}>
        <Image style={{
        width:wp('1'),
        height:hp('12'),
        position:'absolute',
        top:hp('5'),
        left:hp('4')
        }} 
        source={require('../assets/line.png')}/>
        <View 
        style={{
          justifyContent:'center',
          alignItems:'center' ,
          backgroundColor:'#FFFAED',
          width:65,
          height:64,
          borderRadius:10
          }}>
       <Image 
       style={{
        width:40,height:40,

       }}
       source={require('../assets/Oprepare.png')}
       />
  

</View>
<Text
       style={{
        fontSize:18,
        left:hp('11'),
        top:hp('-6')
       }}
       >Order Prepare</Text>
<Image 
style={{left:hp('34'),
  top:hp('-9')
}}
source={require('../assets/tick.png')}/>


    <Image style={{
        width:wp('1'),
        height:hp('12'),
        position:'absolute',
        top:hp('24'),
        left:hp('4')
        }} 
        source={require('../assets/line.png')}/>

      </View>
{/*Rider component 2 */}
<View 
      style={{
       top:hp('8'),
       left:hp('5')
      }}>
        <View 
        style={{
          justifyContent:'center',
          alignItems:'center' ,
          backgroundColor:'#F1EFF6',
          width:65,
          height:64,
          borderRadius:10
          }}>
       <Image 
       style={{
        width:40,height:40,

       }}
       source={require('../assets/orderTaken.png')}
       />
  

</View>
<Text
       style={{
        fontSize:18,
        left:hp('11'),
        top:hp('-6')
       }}
       >Order Taken</Text>
<Image 
style={{left:hp('34'),
  top:hp('-9')
}}
source={require('../assets/tick.png')}/>


      </View>

      <View 
      style={{
       top:hp('10'),
       left:hp('5')
      }}>
        <View 
        style={{
          justifyContent:'center',
          alignItems:'center' ,
          backgroundColor:'#FEF0F0',
          width:65,
          height:64,
          borderRadius:10
          }}>
       <Image 
       style={{
        width:40,height:40,

       }}
       source={require('../assets/rider.png')}
       />
  

</View>
<Text
       style={{
        fontSize:18,
        left:hp('10'),
        top:hp('-7')
       }}
       >Order is being deliverd</Text>
       <Text
       style={{
        fontSize:14,
        left:hp('10'),
        top:hp('-7')
       }}
       >your deliver agent is coming</Text>
<Image 
style={{left:hp('34'),
  top:hp('-12')
}}
source={require('../assets/calls.png')}/>


      </View>

   <Image style={{left:hp('8'),top:20,width:wp('70'),borderRadius:14}} source={require('../assets/maps.png')}/>

{/*Rider component last */}
<View 
      style={{
      
       top:hp('5'),
       left:hp('5')
      }}>
        <View 
        style={{
          justifyContent:'center',
          alignItems:'center' ,
          backgroundColor:'#F0FEF8',
          width:65,
          height:64,
          borderRadius:10
          }}>
       <Image 
       style={{
        width:40,height:40,

       }}
       source={require('../assets/paytick.png')}
       />

</View>

  
<Text
       style={{
        fontSize:18,
        left:hp('11'),
        top:hp('-6')
       }}
       >Order Taken</Text>
<Image 
style={{left:hp('34'),
  top:hp('-7')
}}
source={require('../assets/odone.png')}/>

      </View>


    </View>
    

    </View>
  )
}

export default TrackOrder