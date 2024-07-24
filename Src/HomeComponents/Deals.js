import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Deal1 from './Dealsdata/Deal1';
import Deal2 from './Dealsdata/Deal2';
import Deal3 from './Dealsdata/Deal3';

const Deals = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.dealContainer}><Deal1 /></View>
        <View style={styles.dealContainer}><Deal2 /></View>
        <View style={styles.dealContainer}><Deal3 /></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: '#fff',
  top:hp('-15%')  
  ,left:hp('0%')
  
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  dealContainer: {
    right:hp('-1%'),
    width: wp('53%'), // Adjust this percentage based on your needs
    marginRight: wp('1%'), // Optional: Add some spacing between deals
  },
});

export default Deals;
