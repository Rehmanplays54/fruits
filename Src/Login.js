import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
  const handlepress = () => {
    if (inputValue === '') {
        setError(true);
    } else {
navigation.navigate('Home')
    }
  };
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'#ffffff'}}>
            <View
                style={styles.bask_1}>

                <Image source={require('../assets/f3.png')}
                    style={styles.bask_2}
                />

                <Image source={require('../assets/e1.png')}
                    style={styles.bask_3}
                />
                <Image source={require('../assets/e2.png')}
                    style={styles.bask_4}
                />
                <Image source={require('../assets/e2.png')}
                style={styles.bask_5}
            />
            <Image source={require('../assets/e2.png')}
            style={styles.bask_6}
        />

            </View>
            <Text
                style={styles.Tbask_1}>
                What is your firstname?
            </Text>
            <TextInput 
             placeholder='Tony' 
             keyboardType='ascii-capable'
             value={inputValue}
             onChangeText={text => {
                setInputValue(text);
                setError(false);
              }}
             style={[styles.InputBox_1, error && styles.inputError]}
             />
             <TouchableOpacity >
             {error ? <Text style={styles.errorText}>Please enter your name</Text> : null}
            <Text 
                style={styles.btn_1}
               onPress={handlepress}
            >
                Start Ordering
            </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    bask_1: {
        backgroundColor: '#FFA451',
        width: wp('100%'),
        height:hp('60%'),
        position: 'absolute'
    },
    bask_2:
    {
        width: wp('70%'),
        height: hp('35%'),
        top: hp('15%'),
        left: 61,
        position: 'absolute'
    },
    bask_3: {
        width: wp('80%'),
        height: hp('1%'),
        top:hp('54%'),
        left:hp('7%'),
         position: 'absolute'
    },
    bask_4: {  
        width: wp('6%'),
        height: hp('1%'),
        top:hp('54.5%'),
        left:hp('11%'),
         position: 'absolute'
    },
    
    bask_5: {  
        width: wp('5%'),
        height: hp('1%'),
        left:hp('35%'),
        top:hp('54.5%')
        
    },
    bask_6: {  
        width: wp('5%'),
        height: hp('1%'),
        left:hp('39%'),
        top:hp('52.5%')
    },
    Tbask_1:
    {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        left:hp('3%'),
        top:hp('65%'),
        fontSize: hp('2.5%'),
        color:'#27214D'
    },
    InputBox_1: {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        left:hp('2.5%'),
        top:hp('67%'),
        fontSize: hp('2.5%'),
        width: wp('90%'),
        height: hp('8%'),
        backgroundColor:'#C2BDBD',
        color:"#F3F1F1",
        paddingLeft:38,
        borderRadius:10,
        borderColor:'#F3F1F1',
        borderWidth:1
    },
    btn_1: {
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        left:hp('5%'),
        top:hp('70.5%'),
        fontSize: hp('2.5%'),
        width: wp('80%'),
        height: hp('7%'), color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#FFA451',
        textAlignVertical: 'center',
        borderRadius: 10
    },
    inputError: {
        borderColor: 'red',
      },
      errorText: {
        color: 'red',

        top:hp('68%'),
        left:hp('3')
      },




})