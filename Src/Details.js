import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from './AddtoBasket/Navbar'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Pricecount from './AddtoBasket/Pricecount';
import BottomSection from './AddtoBasket/BottomSection';
import Catagories from '../Components/Catagories';





const Details = ({ route }) => {
  const { id } = route.params ?? null;

  return (
    <View>
      {
        Catagories.map(item => (
          item.id === id ? (
            <View key={item.id}>
              <Navbar image={item.image} />

              <View
                style={{
                  height: 900,
                  top: -26,
                  backgroundColor: '#fff',
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <Text style={{
                  fontSize: 28,
                  fontWeight: 600,
                  left: hp('2%'),
                  top: hp('1.8'),

                }}>
                  {item.name}
                </Text>
                <Pricecount text1={item.price} id={item.id} image={item.image} name={item.name}/>
                <View style={{ top: -95 }}>
                <Text style={{backgroundColor:'#000',height:hp('0.07%'),bottom:hp('4%')}}></Text>
                <View style={{
      top:-10
    }}>
      <Text
      style={{
        left:hp('3%'),
        fontSize:22,
      }}
      >One Pack Contains:</Text>
       <Text 
       style={{
        backgroundColor:'orange',
        height:hp('0.2%'),
        width:wp('40%'),
        left:hp('3%'),
        bottom:hp('-1%')}}
        ></Text>
        <Text
        style={{
            fontSize:18,
            left:hp('3'),
            top:hp('2%')
        }}
        >
        Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>
    </View>
    <Text style={{backgroundColor:'#000',height:hp('0.07%'),bottom:hp('-4%')}}></Text>
    <View
     style={{
        top:hp('5%'),
        left:hp('3%'),
        width:hp('40')
        }}>
      <Text
      style={{
        fontSize:15
      }}
      >If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
    </View>
                </View>
                <BottomSection />
              </View>

            </View>
          ) : null
        ))
      }
    </View>
    // <View>


  )
}

export default Details