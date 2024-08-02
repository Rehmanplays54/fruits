// CustomPopup.js
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Modal, View, Text, Button, TouchableOpacity,Image,TextInput } from 'react-native';

import Cardpopup from './Cardpopup';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
      <View style={{  flex:10,justifyContent:'flex-end',alignItems:'center' ,height:hp('20%'),backgroundColor:'rgba(0,0,0,0.5)' }}>
      <TouchableOpacity onPress={onClose}>
      <Image source={require('../assets/Cancel.png')} style={{bottom:20,left:0}} />  
      </TouchableOpacity>
      <View style={{ width:wp('100%'),height:hp('45%'),top:30 ,backgroundColor: 'white', padding: hp('4'), borderRadius: 10, alignItems: 'center' }}>
          <Text
          style={{
            right:hp('10%'),
            bottom:hp('1'),
            fontSize:20
          }}>
          Delivery address
          </Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :hp('38%'),
             height:hp('6%'),
             paddingLeft:hp('1'),
             
             borderRadius:12
            }} 
            placeholder='Address' 
            />
          <Text
          style={{
            right:hp('11%'),
            top:hp('1'),
            fontSize:20
          }}>Number we call</Text>
          <TextInput 
          style={{
            backgroundColor:'#F3F1F1',
            width :hp('38%'),
            height:hp('6%'),
             borderRadius:12,
             paddingLeft:hp('1'),
             top:20
            }} 
          placeholder='call number' />
          <TouchableOpacity onPress={()=>navigation.navigate('DevliveryPopup2')} style={{
            right:hp('11'),
            
          
          }}> 
         
         <Text 
         style={{
             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
            borderColor:'#FFA451',
            backgroundColor:'#fff',
             top:hp('9'),
             borderRadius: 12,
             width: hp('16'),
             height: 49, 
           borderWidth:2,
            fontSize: 24,
             textAlign: 'center', padding:hp('1'), color: '#FFA451'
         }} onPress={togglePopup}
     >
         Pay Online
     </Text>
     <Cardpopup visible={isPopupVisible} onClose={togglePopup}/>
     </TouchableOpacity>
     <TouchableOpacity  style={{
        left:hp('9'),
 
      }} >
         
     <Text 
     style={{
         fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        borderColor:'#FFA451',
        backgroundColor:'#fff',
         
         borderRadius: 12,
         width: wp('40'),
         height: hp('5.5'), 
       borderWidth:2,
       top:hp('3.2'),
        fontSize: 24,
         textAlign: 'center', padding:hp('1'), color: '#FFA451'
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
