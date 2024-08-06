// CustomPopup.js
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Modal, View, Text, Button, TouchableOpacity,Image,TextInput } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Cardpopup = ({ visible, onClose }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
const handlepress = () => {
  if (inputValue === '') {
      setError(true);
  } else {
    setError(false);
    
    console.log('Input Value:', inputValue);
  }
};
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
    const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose(); 
      }}
    >
      <View style={{   flex:10,justifyContent:'flex-end',alignItems:'center' ,height:hp('25%'),backgroundColor:'rgba(0,0,0,0.2)' }}>
      <TouchableOpacity onPress={onClose}>
      <Image source={require('../assets/Cancel.png')} style={{bottom:20,left:0}} />  
      </TouchableOpacity>
      <View style={{width:wp('100%'),height:hp('57%'),top:30 ,backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text
          style={{
            right:hp('9'),
            bottom:hp('1'),
            fontSize:20
          }}>
          Card Holder name
          </Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :wp('80'),
             height:hp('6'),
             paddingLeft:hp('2'),
             borderRadius:12
            }} 
            placeholder='Name' 
            />
          <Text
          style={{
            right:hp('11.5'),
            bottom:hp('-1'),
            fontSize:20
          }}>Card Number</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :wp('80'),
            height:hp('6'),
            paddingLeft:hp('2'),
             borderRadius:12,
             
             top:20
            }} 
          placeholder='1234 5678 9012 3456' />
          <Text
          style={{
            right:hp('16'),
            top:hp('3'),
            fontSize:20
          }}>Date</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :wp('35'),
             height:hp('6'),
             borderRadius:12,
             paddingLeft:hp('2'),
             right:hp('10.5'),
             top:hp('4.3')
            }} 
          placeholder='10/30' />
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
             right:hp('-9'),
             top:hp('-4.7')
            }} 
          placeholder='123' />
          <TouchableOpacity  onPress={()=>navigation.navigate('DevliveryPopup2')} style={{
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
         }} onPress={togglePopup}
     >
         Complete Order
     </Text>
    
     </TouchableOpacity>
    
 

        </View>

      </View>
    </Modal>
  );
};

export default  Cardpopup;
