// MainScreen.js
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomPopup from './DeliveryPopup';
import Navbar from './OrderList/Navbar';
import OList from './OrderList/OList';

const Basket = () => {
const route=useRoute();
const {number,price,text,image}=route.params||null;
 
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const navigation = useNavigation();

    return (
        <View>
            <Navbar />
         
            <OList text={text} image={image} number={number} price={price} />
        



            <View
                style={{
                    top: 250,
                    left: 20
                }}
            >
             
                <TouchableOpacity style={{ left: hp('14'), top: -60 }} onPress={togglePopup}>
                    <CustomPopup visible={isPopupVisible} onClose={togglePopup} />
                    <Text
                        style={{
                            fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                            top: 35,
                            backgroundColor: '#FFA451',
                            borderRadius: 12,
                            width: 157,
                            height: 49,
                            left: 40,
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
