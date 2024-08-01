// CustomPopup.js
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Modal, View, Text, Button, TouchableOpacity,Image,TextInput } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Cardpopup = ({ visible, onClose }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

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
      <View style={{  paddingTop:310 ,height:500,backgroundColor:'rgba(0,0,0,0.2)' }}>
      <TouchableOpacity onPress={onClose}>
      <Image source={require('../assets/Cancel.png')} style={{bottom:20,left:160}} />  
      </TouchableOpacity>
      <View style={{ width:367,height:506,top:30 ,backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text
          style={{
            right:85,
            bottom:7,
            fontSize:20
          }}>
          Card Holder name
          </Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :297,
             height:50,
             paddingLeft:10,
             
             borderRadius:12
            }} 
            placeholder='Name' 
            />
          <Text
          style={{
            right:95,
            top:10,
            fontSize:20
          }}>Card Number</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :297,
             height:50,
             borderRadius:12,
             paddingLeft:10,
             top:20
            }} 
          placeholder='1234 5678 9012 3456' />
          <Text
          style={{
            right:120,
            top:30,
            fontSize:20
          }}>Date</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :137,
             height:50,
             borderRadius:12,
             paddingLeft:10,
             right:75,
             top:35
            }} 
          placeholder='10/30' />
           <Text
          style={{
            right:-32,
            top:-43,
            fontSize:20
          }}>CCV</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :137,
             height:50,
             borderRadius:12,
             paddingLeft:10,
             right:-80,
             top:-39
            }} 
          placeholder='123' />
          <TouchableOpacity  onPress={()=>navigation.navigate('DevliveryPopup2')} style={{
           width:362,
           height:90,
            backgroundColor:'#FFA451',
            top:-20,
            borderRadius:16,
            left:-3
          }}> 
         
         <Text 
         style={{
             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
          
            backgroundColor:'#fff',
           top:12,
             borderRadius: 12,
             width: 150,
             height: 49, 
         left:105,
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
