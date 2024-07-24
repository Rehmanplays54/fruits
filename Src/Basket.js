// MainScreen.js
import React, { useState } from 'react';
import { View, Button, TouchableOpacity, ScrollView, Text, Image, StyleSheet, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomPopup from './DeliveryPopup';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Catagories, { Catagories1 } from '../Components/Catagories';
import Navbar from './OrderList/Navbar';


const Basket = () => {
 
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    const navigation = useNavigation();
    return (
        <View >
          <Navbar/>
          
            <View
                style={{
                    top: 250,
                    left: 20
                }}>
                <Text
                    style={{
                        fontSize: 19
                    }}
                > Total

                </Text>
                <Image
                    source={require('../assets/curreny.png')}
                    style={{
                        width: 15,
                        height: 15,
                        top: 7, left: 7,
                    }}
                />
                <Text
                    style={{
                        fontSize: 26, left: 22, top: -20
                    }}
                > 23000

                </Text>
                <TouchableOpacity style={{ left: 120, top: -60 }} onPress={togglePopup} >
                    <CustomPopup visible={isPopupVisible} onClose={togglePopup} />
                    <Text
                        style={{
                            fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                            top: -10,
                            backgroundColor: '#FFA451',
                            borderRadius: 12,
                            width: 157,
                            height: 49,
                            left: 60,
                            fontSize: 24,
                            textAlign: 'center', paddingTop: 9, color: '#fff'
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
})


