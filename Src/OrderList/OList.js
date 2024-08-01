import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const OList = ({ text, image,number,price }) => {
  
  
    return (
      <View>
        <ScrollView style={{top:hp('4')}}>
          
         <View style={{backgroundColor:'#FFFAEB',padding:10,left:35,width:60,top:9,borderRadius:12}}> 
           <Image source={image} style={{width:40,height:40,}}/> 
           </View>
           <Text style={{left:100,top:-39,fontWeight:600}}>{text}</Text>
           <Text style={{left:100,top:-32}}>{number}  Packs</Text>
           <Image source={require('../../assets/curreny.png')}  style={{left:265,top:-55,fontSize:22}}/>
           <Text style={{left:290,top:-75,fontSize:22}}>{price}</Text>
        </ScrollView>
        <View style={{top:hp('38'),left:30}}>
        <Text
                    style={{
                        fontSize: 19
                    }}
                >
                    Total
                </Text>
                <Image
                    source={require('../../assets/curreny.png')}
                    style={{
                        width: 15,
                        height: 15,
                        top: 7,
                        left: 2,
                    }}
                />
                <Text
                    style={{
                        fontSize: 26,
                        left: 23,
                        top: -18
                    }}
                >
                  {price}
                </Text>
                </View>
        </View>
    );
};



export default OList;
