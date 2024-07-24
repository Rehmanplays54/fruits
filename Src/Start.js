import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
const Start = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View
                style={styles.bask_1}>

                <Image source={require('../assets/f1.png')}
                    style={styles.bask_2}
                />

                <Image source={require('../assets/e1.png')}
                    style={styles.bask_3}
                />

            </View>
            <Text
                style={styles.Tbask_1}>
                Get The Freshest Fruit Salad Combo
            </Text>
            <Text
                style={styles.Tbask_2}>
                We deliver the best and freshest fruit salad in town. Order for a combo today!!!
            </Text>
            <Text
                style={styles.btn_1}
                onPress={()=>navigation.navigate('Login')}
            >
                Let's Continue
            </Text>
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    bask_1: {
        backgroundColor: '#FFA451',
        width:wp('120%'),
       height:hp('60%'),
       
    },
    bask_2:
    {
        width:wp('70%'),
        height:hp('30%'),
        top: 155,
        left: hp('8%'),
        position: 'absolute'
    },
    bask_3: {
        top: hp('55%'),
        left: wp('11%')
    },
    Tbask_1:
    {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        top: hp('6%'),
        left: 25,
        fontSize: hp('4%')
    },
    Tbask_2: {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        top: hp('7%'),
        left: 25,
        fontSize: hp('2%'),
        width: wp('80%'),
        height: hp('9%')
    },
    btn_1: {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        top: hp('5%'),
        left: hp('5%'),
        fontSize: hp('2%'),
        width: wp('80%'),
        height: hp('6%'), color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#FFA451',
        textAlignVertical: 'center',
        borderRadius: 10
    }




})