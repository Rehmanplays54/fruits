// MainScreen.js
import React, { useState } from 'react';
import { View, Button, TouchableOpacity, ScrollView, Text, Image, StyleSheet, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomPopup from './DeliveryPopup';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Catagories, { Catagories1 } from '../Components/Catagories';


const ListCatagories = () => {
    const navigation = useNavigation();
    return (
        <View

        >
            {
                Catagories.map((catagory) => (
                    <View style={{
                        hp: '70%', height: '80%'
                    }}>
                        <Image
                            source={catagory.image}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 50,
                                marginLeft: 30,
                                alignContent: 'space-between',
                                backgroundColor: '#F4F4F4',
                                marginTop: 5
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                left: 100,
                                top: -50
                            }}
                        >
                            {catagory.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                left: 100,
                                top: -50
                            }}
                        >
                            {catagory.packs}
                        </Text>
                        <Image
                            style={{
                                left: 270,
                                top: -75
                            }}
                            source={catagory.c_btn}
                        />
                        <Text
                            style={{
                                left: 300,
                                top: -95,
                                fontSize: 16
                            }}
                        >
                            {catagory.price}
                        </Text>
                    </View>


                ))
            }

        </View>
    )
}


const Basket = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    const navigation = useNavigation();
    return (
        <View >
            <View
                style={{
                    backgroundColor: '#FFA451',
                    width: '100%',
                    height: '26%'
                }}>

                <View
                    style={{
                        backgroundColor: '#fff',
                        width: 100,
                        height: 39,
                        borderRadius: 55,
                        top: 30,
                        left: 10
                    }}>

                    <Icon
                        onPress={() => navigation.navigate('Home')}
                        name='arrow-left'
                        size={30}
                        color='#000'
                        style={{ top: 7 }}
                    />

                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            left: 37,
                            top: -14
                        }}>
                        GO back

                    </Text>

                    <Text
                        style={{
                            color: '#fff',
                            left: 140,
                            fontSize: 24,
                            top: -40,
                            width: 130
                        }} >
                        My Basket</Text>
                </View>
            </View>
            <ListCatagories />
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


