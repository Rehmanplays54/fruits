import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Cardpopup = ({ visible, onClose }) => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ccv, setCcv] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const validateFields = () => {
    const newErrors = {};
    if (!cardHolderName) newErrors.cardHolderName = 'Enter Name';
    if (!cardNumber) newErrors.cardNumber = 'Enter card Number';
    if (!expiryDate) newErrors.expiryDate = 'Enter expiry date';
    if (!ccv) newErrors.ccv = 'Please enter ccv';
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleCompleteOrder = () => {
    if (validateFields()) {
      navigation.navigate('PayDone');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 10, justifyContent: 'flex-end', alignItems: 'center', height: hp('25%'), backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <TouchableOpacity onPress={onClose}>
          <Image source={require('../assets/Cancel.png')} style={{ bottom: 20, left: 0 }} />
        </TouchableOpacity>
        <View style={{ width: wp('100%'), height: hp('57%'), top: 30, backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ right: hp('9'), bottom: hp('1'), fontSize: 20 }}>Card Holder Name</Text>
          <TextInput
            style={{
              backgroundColor: '#F3F1F1',
              width: wp('80'),
              height: hp('6'),
              paddingLeft: hp('2'),
              borderRadius: 12,
              borderColor: errors.cardHolderName ? 'red' : '#F3F1F1',
              borderWidth: 1,
            }}
            placeholder="Name"
            value={cardHolderName}
            onChangeText={setCardHolderName}
          />
          {errors.cardHolderName && <Text style={{ color: 'red',right:hp('13.7'),top:hp('0.5') }}>{errors.cardHolderName}</Text>}

          <Text style={{ right: hp('11.5'), bottom: hp('-1'), fontSize: 20 }}>Card Number</Text>
          <TextInput
            style={{
              backgroundColor: '#F3F1F1',
              width: wp('80'),
              height: hp('6'),
              paddingLeft: hp('2'),
              borderRadius: 12,
              borderColor: errors.cardNumber ? 'red' : '#F3F1F1',
              borderWidth: 1,
              top: 20,
            }}
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          {errors.cardNumber && <Text style={{ color: 'red',right:hp('11.5%'),top:hp('2.7') }}>{errors.cardNumber}</Text>}

          <Text style={{ right: hp('16'), top: hp('3'), fontSize: 20 }}>Date</Text>
          <TextInput
            style={{
              backgroundColor: '#F3F1F1',
              width: wp('35'),
              height: hp('6'),
              borderRadius: 12,
              paddingLeft: hp('2'),
              borderColor: errors.expiryDate ? 'red' : '#F3F1F1',
              borderWidth: 1,
              right: hp('10.5'),
              top: hp('4.3'),
            }}
            placeholder="10/30"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          {errors.expiryDate && <Text style={{ color: 'red', position: 'absolute', top: hp('39%'), right: wp('62.6%') }}>{errors.expiryDate}</Text>}

         
           <Text
          style={{
            right:hp('-3.5'),
            top:hp('-5.5'),
            fontSize:20
          }}>CCV</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :wp('35'),
            height:hp('6'),
             borderRadius:12,
             paddingLeft:hp('1'),
             borderColor: errors.ccv ? 'red' : '#F3F1F1',
             right:hp('-9'),
             top:hp('-4.7')
            }} 
          placeholder='123'
          value={ccv}
          onChangeText={setCcv}
          />
          {errors.ccv && <Text style={{ color: 'red', position: 'absolute', top: hp('38.9%'), right: wp('21%') }}>{errors.ccv}</Text>}
          <TouchableOpacity  onPress={handleCompleteOrder} style={{
           width:wp('100%'),
           height:('40%'),
            backgroundColor:'#FFA451',
            borderRadius:19,
            flex:1,alignItems:'center',
            justifyContent:'center'
            
          }}> 
         
         <Text 
         style={{
             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
          
            backgroundColor:'#fff',
             borderRadius: 12,
             width: hp('27'),
             height: hp('6'), 
        
            fontSize: 24,
             textAlign: 'center', paddingTop: 9, color: '#FFA451'
         }}    >
         Complete Order
     </Text>
    
     </TouchableOpacity>
    
 

        </View>

      </View>
    </Modal>
  );
};

export default  Cardpopup;
