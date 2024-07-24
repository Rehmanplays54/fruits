import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Searchbar = () => {
    return (
        <View
            style={{
                left: hp('2%'),
                top: hp('1.5%'),
            }}
        >
            <TextInput placeholder='Kuch bhi likh da'
                style={{
                    backgroundColor: '#F3F4F9',
                    paddingLeft: hp('5.9%'),
                    borderRadius: 24,

                    width: wp('65%'),

                }}
            />


            <Image
                style={{
                    top: -33,
                    left: 22
                }}
                source={require('../../assets/search.png')} />

            <Image
                style={{
                    left: hp('40%'),
                    top: hp('-6%')
                }}
                source={require('../../assets/bar2.png')}
            />
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({})