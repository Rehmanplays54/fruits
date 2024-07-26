import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Basket from '../Basket';
const Combo1 = () => {
    // const obj = {
    //     name:'',
    //     price:'',
    //     image:require('../../assets/p.png')
    // }
    const name = 'Honey combo lambo';
    const price = 8000;
    const pricee = 2000;
    const pima = require('../../assets/p.png');
    const pimaa = require('../../assets/1.png');
    const navigation = useNavigation();
    const [iconColor, setIconColor] = useState('#FFA451');
    const [bgColor, setBgColor] = useState('transparent');
    const [icColor, setIcColor] = useState('#FFA451');
    const [data, setData]= useState()
    const [bgColr, setBgColr] = useState('transparent');

    const handlePress = () => {
       
        setIconColor(iconColor === '#FFA451' ? '#fff' : '#FFA451'); // Toggle between black and red
        setBgColor(bgColor === 'transparent' ? '#FFA451' : 'transparent'); // Toggle between white and grey
    };
    const handlePres = () => {
        setData(obj)
        setIcColor(icColor === '#FFA451' ? '#fff' : '#FFA451'); // Toggle between black and red
        setBgColr(bgColr === 'transparent' ? '#FFA451' : 'transparent'); // Toggle between white and grey
    };
    return (
        <View
            style={{
                top: hp('2%'),
                left: hp('2%'),
                width: wp('90%')
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { text: name, image: pima, text1: price })}
                style={{
                    backgroundColor: '#F2F4F6',
                    width: wp('45%'),
                    alignItems: 'center',
                    height: hp('25%'),
                    elevation: 5,
                    borderRadius: 13,


                }}>

                <TouchableOpacity

                    style={{
                        backgroundColor: bgColor,
                        borderRadius: 30,
                        left: hp('7%'),
                        top: hp('1%'),
                        padding: 5

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
                        width: wp('24%'),
                        height: hp('12%'),
                        borderRadius: 30
                    }}
                    source=
                    {
                        pima
                    }
                />

                <Text
                    style={{
                        fontWeight: 900,
                        fontSize: 17
                    }}
                >
                    {name}
                </Text>
                <Image
                    style=
                    {{
                        left: hp('-7.5%'),
                        top: hp('2%')
                    }}

                    source={require('../../assets/curreny.png')} />
                <Text
                    style={{
                        fontWeight: 900,
                        fontSize: 17,
                        left: hp('-2.8%'),
                        top: hp('-0.3%')
                    }}>
                    {price}
                </Text>
                <Image
                    style={{

                        left: hp('6.8%'),
                        top: hp('-3%')
                    }}
                    source={
                        require('../../assets/add.png')
                    }
                />
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { text: name, image: pimaa, text1: pricee })}
                style={{
                    backgroundColor: '#F2F4F6',
                    width: wp('45%'),
                    alignItems: 'center',
                    height: hp('25%'),
                    elevation: 5,
                    borderRadius: 13,
                    left: hp('23%'),
                    top: hp('-25%')

                }}>

                <TouchableOpacity
                    style={{
                        backgroundColor: bgColr,
                        borderRadius: 30,
                        left: hp('7%'),
                        top: hp('1%'),
                        padding: 5

                    }}
                    onPress={handlePres}
                >

                    <Icon
                        name='heart'
                        size={30}
                        color={icColor}

                    />
                </TouchableOpacity>

                <Image
                    style=
                    {{
                        width: wp('24%'),
                        height: hp('12%'),
                        borderRadius: 30
                    }}
                    source=
                    {
                        pimaa
                    }
                />

                <Text
                    style={{
                        fontWeight: 900,
                        fontSize: 17
                    }}
                >
                    {name}
                </Text>
                <Image
                    style=
                    {{
                        left: hp('-7.5%'),
                        top: hp('2%')
                    }}

                    source={require('../../assets/curreny.png')} />
                <Text
                    style={{
                        fontWeight: 900,
                        fontSize: 17,
                        left: hp('-2.8%'),
                        top: hp('-0.3%')
                    }}>
                    {pricee}
                </Text>
                <Image
                    style={{

                        left: hp('6.8%'),
                        top: hp('-3%')
                    }}
                    source={
                        require('../../assets/add.png')
                    }
                />
            </TouchableOpacity>
        </View>
    )
}

export default Combo1