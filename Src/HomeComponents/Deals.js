import React, { useContext, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CatagoriesData from '../../Components/Catagories';
import Icon from 'react-native-vector-icons/EvilIcons';



const ListCatagories = () => {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState('#FFA451');
  const [bgColor, setBgColor] = useState('transparent');
  const [activeId, setActiveId] = useState(-1);

  const handlePress = (id) => {
    setActiveId((pid) => pid === id ? -1 : id)

    //setIconColor(iconColor === '#FFA451' ? '#fff' : '#FFA451');
    // setBgColor(bgColor === 'transparent' ? '#FFA451' : 'transparent');
  };


  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      horizontal
      contentContainerStyle={styles.scrollViewContent}
    >

      {
        CatagoriesData.map((item, index) => (
          <View key={item.id} style={[
            styles.box,
            index <= CatagoriesData.length - 1 && styles.boxWithMargin,
          ]}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
              <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={{
                  backgroundColor: item.id === activeId ? '#FFA451' : 'transparent',
                  color: '#fff',
                  width: wp('10'),
                  borderRadius: 50,
                  left: hp('12%'),
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
                  left: hp('2')
                }}
                source={item.image}

              />
              <Text
                style={{
                  fontWeight: 900,
                  fontSize: 17
                }}
              >{item.name}</Text>
              <Image
                style={{
                  left: hp('-22%'),
                  top: hp('2%')
                }}
                source={item.c_btn} />
              <Text
                style={{
                  fontWeight: 900,
                  fontSize: 17,
                  color: '#FFA451',
                  left: hp('2.8%'),
                  top: hp('-0.3%')
                }}
              >{item.price}</Text>
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
  );
};

const Deals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ListCatagories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: '#fff',
    top: hp('3%'),
    left: hp('1%')
  },
  box: {
    backgroundColor: 'rgba(255, 250, 235, 1)',
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

export default Deals;
