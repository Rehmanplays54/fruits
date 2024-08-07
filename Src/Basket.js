// MainScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomPopup from './DeliveryPopup';



import { DataProvider, MyContext, usecartcontext} from './Context/FContext';
import Navbar from './OrderList/Navbar';
import OList from './OrderList/OList';

const Basket = () => {

    
 const route=useRoute();
const {price,id,number}=route.params||null;


  const {data}=useContext(MyContext);
 const {cart}=usecartcontext();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const navigation = useNavigation();
   
    console.log(cart);
    



    return (
        <View>

            {/* {
                Catagories.map(item=>(
                    item.id===id ?(
                        <View key={item.id} style={item.id===id}>
                                <Image source={item.image}/>
                        </View>
                    ):null
               ))
            } */}
            < Navbar/>
         {cart.map((item)=>{
            return<OList key={item.id} {...item}/>
         })}
            {/* <OList text={text} image={image} number={number} price={price} /> */}
        
         

      
          
            <View style={{top:hp('38'),left:30}}>
        <Text
                    style={{
                        fontSize: 19
                    }}
                >
                    Total
                </Text>
                <Image
                    source={require('../assets/curreny.png')}
                    style={{
                        width: wp('5'),
                        height: hp('2.5'),
                        top: 7,
                        left: 2,
                    }}
                />
                <Text
                    style={{
                        fontSize: 26,
                        left: hp('3.3'),
                        top:hp('-2.7')
                    }}
                >
                  {price}
                </Text>
                </View>
                <TouchableOpacity style={{ left: hp('14'), top: hp('29%'),}} onPress={togglePopup}>
                    <CustomPopup visible={isPopupVisible} onClose={togglePopup} />
                    <Text
                        style={{
                            fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                            backgroundColor: '#FFA451',
                            borderRadius: 12,
                            width: wp('42'),
                            height: hp('6'),
                            left: hp('12'),
                            fontSize: 24,
                            textAlign: 'center',
                            paddingTop: 9,
                            color: '#fff'
                        }}
                    >
                        Checkout
                    </Text>
                </TouchableOpacity>
            
        </View>
    );

};

export default Basket;

const styles = StyleSheet.create({
    catagoriresListContainer1: {
        width: '100%',
        height: 900
    }
});
