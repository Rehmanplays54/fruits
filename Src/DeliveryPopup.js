// CustomPopup.js
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Modal, View, Text, Button, TouchableOpacity,Image,TextInput } from 'react-native';

import Cardpopup from './Cardpopup';


const DeliveryPopup = ({ visible, onClose }) => {
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
      <View style={{  paddingTop:310 ,height:500,backgroundColor:'rgba(0,0,0,0.5)' }}>
      <TouchableOpacity onPress={onClose}>
      <Image source={require('../assets/Cancel.png')} style={{bottom:20,left:160}} />  
      </TouchableOpacity>
      <View style={{ width:367,height:406,top:30 ,backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text
          style={{
            right:90,
            bottom:7,
            fontSize:20
          }}>
          Delivery address
          </Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :297,
             height:50,
             paddingLeft:10,
             
             borderRadius:12
            }} 
            placeholder='Address' 
            />
          <Text
          style={{
            right:90,
            top:10,
            fontSize:20
          }}>Number we call</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :297,
             height:50,
             borderRadius:12,
             paddingLeft:10,
             top:20
            }} 
          placeholder='call number' />
          <TouchableOpacity onPress={()=>navigation.navigate('DevliveryPopup2')} style={{
            right:90,
          }}> 
         
         <Text 
         style={{
             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
            borderColor:'#FFA451',
            backgroundColor:'#fff',
             top:90,
             borderRadius: 12,
             width: 120,
             height: 49, 
           borderWidth:3,
            fontSize: 24,
             textAlign: 'center', paddingTop: 9, color: '#FFA451'
         }} onPress={togglePopup}
     >
         Pay Online
     </Text>
     <Cardpopup visible={isPopupVisible} onClose={togglePopup}/>
     </TouchableOpacity>
     <TouchableOpacity  style={{
        left:70,
        top:-50
      }} >
         
     <Text 
     style={{
         fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        borderColor:'#FFA451',
        backgroundColor:'#fff',
         
         borderRadius: 12,
         width: 120,
         height: 49, 
       borderWidth:3,
       top:90,
        fontSize: 24,
         textAlign: 'center', paddingTop: 9, color: '#FFA451'
     }} onPress={()=>navigation.navigate('PayDone')}
 >
     Cash Delivery
 </Text>
 </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

export default  DeliveryPopup;
