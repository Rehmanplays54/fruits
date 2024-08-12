import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Cardpopup from './Cardpopup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DeliveryPopup = ({ visible, onClose }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  
  const togglePopup = () => {
    let hasError = false;
    if (address === '') {
      setAddressError(true);
      hasError = true;
    }
    if (phoneNumber === '') {
      setPhoneError(true);
      hasError = true;
    }
    if (!hasError) {
      setPopupVisible(!isPopupVisible);
    }
  };

  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
          <Image source={require('../assets/Cancel.png')} />
        </TouchableOpacity>
        <View style={styles.popupContainer}>
          <Text style={styles.title}>Delivery address</Text>
          <TextInput 
            style={[
              styles.input, 
              addressError && styles.inputError
            ]}
            placeholder="Address" 
            value={address}
            onChangeText={text => {
              setAddress(text);
              setAddressError(false);
            }}
          />
          {addressError && <Text style={styles.errorText}>Please enter your address</Text>}
          
          <Text style={styles.subtitle}>Number we call</Text>
          <TextInput 
            style={[
              styles.input, 
              phoneError && styles.inputError
            ]}
            placeholder="Call number" 
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
              setPhoneError(false);
            }}
          />
          {phoneError && <Text style={styles.errorText}>Please enter your phone number</Text>}
          
          <TouchableOpacity
           style={styles.payButton} 
           onPress={togglePopup}>
            <Text style={styles.payButtonText}>Pay Online</Text>
          </TouchableOpacity>
          <Cardpopup visible={isPopupVisible} onClose={togglePopup} />
          
          <TouchableOpacity style={styles.cashButton} onPress={() => navigation.navigate('PayDone')}>
            <Text style={styles.cashButtonText}>Cash Delivery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeliveryPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeIcon: {
  bottom:hp('3')
  },
  popupContainer: {
    width: wp('100%'),
    height: hp('45%'),
    backgroundColor: 'white',
    padding: hp('4%'),
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: hp('1%'),
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 20,
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#F3F1F1',
    width: wp('80%'),
    height: hp('6%'),
    paddingLeft: hp('1%'),
    right:hp('1'),
    borderRadius: 12,
    marginBottom: hp('1%'),
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: hp('1%'),
    alignSelf: 'flex-start',
  },
  payButton: {
    marginTop: hp('1%'),
    backgroundColor: '#FFA451',
    borderRadius: 12,
    width: wp('36%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    right:hp('11')
  },
  payButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  cashButton: {
  
    borderColor: '#FFA451',
    backgroundColor: '#fff',
    borderRadius: 12,
    width: wp('40%'),
    top:hp('-6'),
    left:hp('9'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  cashButtonText: {
    fontSize: 20,
    color: '#FFA451',
  },
});
