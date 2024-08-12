import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CatagoriesData from '../../Components/Catagories';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MyContext, usecartcontext } from '../Context/FContext';
import OList from '../OrderList/OList';





const Iccon = <Icon
name='heart'
size={30}
color='#ffa451'
/>



const Combo1 = () => {

  const navigation = useNavigation();
  const [activeId, setActiveId] = useState(-1);
  const {removeitem}=usecartcontext(MyContext)
const {addtocart}=usecartcontext(MyContext);
  const handlePress = (id) => {
  
    setActiveId((pid) => {
      if (pid === id) {
        removeitem(id); 
        return -1;
      } else {
        return id;
      }
    });

  };
  const number=1;

  return (
    <View style={styles.container}>
    <ScrollView
      showsHorizontalScrollIndicator={true}
      horizontal
      contentContainerStyle={styles.scrollViewContent}
    >

      {
        CatagoriesData.map((item, index) => (
          <View key={item.id} style={[
            styles.box,
      styles.boxWithMargin,
          ]}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
              <TouchableOpacity
                onPress={() =>  [handlePress(item.id),addtocart(item.price,item.id,number,item.name,item.image)]}
                style={{
                  backgroundColor: item.id === activeId ? '#FFA451' : 'transparent',
                  color: '#fff',
                  width: wp('10'),
                  borderRadius: 100,
                  left: hp('11%'),
                  top: hp('1%'),
                  padding: 5
                }}
              ><Icon
              name='heart'
              size={30}
              color={item.id === activeId ? '#fff' : '#FFA451'}
          
            />
              </TouchableOpacity>
              <Image
                style={{
                  width: wp('25%'),
                  height: hp('12%'),
                  borderRadius: 80,
                  left: hp('1')
                }}
                source={item.image}

              />
              <Text
                style={{
                  fontWeight: 900,
                  fontSize: 17,
                  
                }}
              >{item.name}</Text>
             
              <Text
                style={{
                  fontWeight: 900,
                  fontSize: 17,
                  color: '#FFA451',
                  left: hp('2.8%'),
                  top: hp('1.3%'),
                }}
              >{item.price}</Text>
                 <Image
                style={{
                  left: hp('-1%'),
                  top: hp('-1%')
                }}
                source={item.c_btn} />
              <Image
                style={{

                  left: hp('12.8%'),
                  top: hp('-3%')
                }}
                source={item.add} />
                
            </TouchableOpacity>
          </View>
        ))
      }

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: '#fff',
    top: hp('2%'),
    left: hp('1%')
  },
  box: {
    backgroundColor: '#f2f4f6',
    width: wp('43%'),
    alignItems: 'center',
    height: hp('25%'),
    elevation: 2,
    left: hp('-1%'),
    borderRadius: 20,
  },
  boxWithMargin: {
    marginLeft: hp('1.5'),
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  dealContainer: {
    right: hp('-1%'),
    width: wp('53%'), // Adjust this percentage based on your needs
    marginRight: wp('1%'), // Optional: Add some spacing between deals
  },
});

export default Combo1;
