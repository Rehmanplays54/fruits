import { StyleSheet, Text, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Start');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Animatable.Image
        animation="bounce"
        source={require('../assets/logo.png')}
      />
      <Text
        style={styles.container}
        onPress={() => navigation.navigate('Home')}
      >
        Fruit Hub
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    fontFamily: 'BadScript-Regular',
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#FFA451',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 16,
    shadowOffset: '#202020',
    shadowOpacity: '5%',
    width: 184, height: 40
  }
})


export default SplashScreen