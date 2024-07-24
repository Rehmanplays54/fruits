
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal, View, Text, Button,Image, StyleSheet } from 'react-native';

const PayDone = () => {
  const navigation=useNavigation();
  return (
<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/paytick.png')}/>
<Text style={{fontSize:40}}>Congratulations!!!</Text>
<Text style={{fontSize:18,width:192,textAlign:'center',top:20}}>Your order have been taken and is being attended to</Text>
<Text
style={styles.btn_1}
onPress={()=>navigation.navigate('Torder')}
>
track order
</Text>
<Text
style={styles.btn_2}
onPress={()=>navigation.navigate('Home')}
>
Continue Shopping
</Text>
</View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn_1: {
    fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
    top: 55,
    left: 4,
    fontSize: 16,
    width: 282,
    height: 48, color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#FFA451',
    textAlignVertical: 'center',
    borderRadius: 10
},
btn_2: {
    fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
    top: 95,
    left: 4,
    fontSize: 16,
    width: 282,
    height: 48, color: '#FFA451',
    textAlign: 'center',
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    borderColor:'#FFA451',
    borderWidth:3,
    borderRadius: 10
}
});

export default PayDone;
// <Modal
// transparent={true}
// animationType="slide"
// visible={visible}
// onRequestClose={onClose}
// >
// <View style={styles.modalBackground}>
//   <View style={styles.modalContainer}>
//     <Text style={styles.title}>This is a custom popup</Text>
//     <Button title="Close" onPress={onClose} />
//   </View>
// </View>
// </Modal>