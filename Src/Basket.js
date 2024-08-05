// MainScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomPopup from './DeliveryPopup';

import OList from './OrderList/OList';

import { MyContext } from './Context/FContext';
import Navbar from './OrderList/Navbar';

const Basket = () => {

    
 const route=useRoute();
const {price,id,number}=route.params||null;


  const {data}=useContext(MyContext);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const navigation = useNavigation();
    
    const renderItem = ({ item }) => {
        if (item.id === id) {
            return (
                <View key={item.id}>
                    <Text
                    style={{
                        left:wp('26'),
                        top:hp('4')
                    }}
                    >{item.name}</Text>
                    <Text style={{
                        left:hp('12'),
                        top:hp('4.5')
                    }}>{number}  Packs</Text>
                    <Image
                    style={{
                        width:wp('12.5'),
                        height:hp('6'),
                        left:hp('4'),
                        top:hp('-0.5')
                    }}
                    
                    source={item.image} />

                    <Image 
                    style={{left:hp('36'),
                        bottom:hp('4')
                    }}
                    source={require('../assets/curreny.png')}/>
                    <Text
                    style={{
                        left:hp('39'),
                        fontSize:18,
                        bottom:hp('6.3')   
                        }}
                    >{price}</Text>
                </View>
            );
        }
        return null;
    };

 if (price===0,id===0,number===0){
    return(
        <View>
                  < Navbar/>
        <Text style={
            {
                left:120,
                top:200
            }
        }>No Add to favourrite items</Text>
        </View>
    )
 }
 else{
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
         
            {/* <OList text={text} image={image} number={number} price={price} /> */}
        
            <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />

      
          
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
}
};

export default Basket;

const styles = StyleSheet.create({
    catagoriresListContainer1: {
        width: '100%',
        height: 900
    }
});
