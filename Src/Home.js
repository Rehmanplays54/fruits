import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Catagories, { Catagories1 } from '../Components/Catagories';
import { COLORS } from '../Components/COLORS';
import Navbar from './HomeComponents/Navbar';
import Text1 from './HomeComponents/Text1';
import Searchbar from './HomeComponents/Searchbar';
import Text2 from './HomeComponents/Text2';
import Combo1 from './HomeComponents/Combo1';
import NewNavigation from './HomeComponents/NewNavigation';
import Deals from './HomeComponents/Deals';

const Home = () => {

    

    return (
        <View 
        style={{
            
            backgroundColor:'#fff'
            }}
            >
         <Navbar/>
         <Text1/>
         <Searchbar/>
         <Text2/>
         <Combo1/>
         <NewNavigation/>
         <Deals/>
        </View>
    )
}

export default Home


// const styles = StyleSheet.create({
  
//     bars: {
//         width: 22,
//         height: 11,
//         top: 37,
//         left: 24,
//     },
//     basket: {
//         left: 280,
//         bottom: 10,
//         width: 41,
//         height: 40,
//         fontSize: 10,
//     },
//     bask_T: {
//         fontSize: 10,
//         bottom: 89,
//         width:90,
//         left: 50,
//     },
//     S_bask: {
//         width: 257,
//         height: 58,
//         color: "#27214D",
//         fontSize: 20,
//         top: 43,
//         left: 24,
//         fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
//     },
//     searchbox: {
//         top: 55,
//         left: 21,
//         borderRadius: 56,
//         backgroundColor:'rgba(243, 244, 249, 1)',
//         width:270,height:48
//     },
//     catagories: {
//         height: 103,
//         width: 142,
//         marginRight: 2,
//         alignItems: 'center',
//     },
//     catagoriresListContainer: {
       
//         top:70, 
//         paddingHorizontal: 10,
//         backgroundColor:'rgba(32, 32, 32, 0.05)',
//         borderRadius:10,
//         left:10
        
//     },
//     categorybtnicon: {
//         width: 65,
//         height: 65,
//         borderRadius: 35,
//         borderRadius:3,
        
//         top: 30
//     },
//     // none
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: '#fff',
//         paddingVertical: 10,
//         top: 20
//     },
//     tab: {
//         alignItems: 'center',
//     },
//     tabText: {
//         fontSize: 14,
//         color: '#938DB5',
//     },
//     activeTabText: {
//         color: '#000',
//         fontsize: 18,
//         fontWeight: 'bold',
//     },
//     activeTabLine: {
//         marginTop: 4,
//         height: 2,
//         backgroundColor: 'orange',
//         width: '40%',
//         right: 10
//     },
//     catagories1: {
//         height: 183,
//         width: 152,
//         marginRight: 7,
//         borderRadius: 30,
//         alignItems: 'center',
//         paddingHorizontal: 5
//     },
//     catagoriresListContainer1: {
//         flexDirection: 'row',
//         top:10,
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         borderRadius:30,
//     },
//     categorybtnicon1: {
//         width: 65,
//         height: 65,
//         borderRadius: 35,
//         backgroundColor: '#ffffff',
//         top: 30
//     },
    
// })

// const navigation = useNavigation();
//     const [selectCatagoryIndex, setselectCatagoryIndex] = React.useState(0);
//     const [activeTab, setActiveTab] = useState('Hottest');
//     const icon = <Icon name='heart' size={30} color={isClicked ? 'white' : '#FFA451'} />
//     const [isClicked, setIsClicked] = useState(false);
    
//     const handlePress = () => {
//         setIsClicked(!isClicked);
//     };


//     const ListCatagories = () => {
//         const icon = <Icon name='heart' size={30} color={isClicked ? 'white' : '#FFA451'} />
//         return (
//             <ScrollView
//                 style={{}}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.catagoriresListContainer}
//             >
//                 {
//                     Catagories.map ((catagory, index) => (
//                         <TouchableOpacity
//                             key={index}

//                             activeOpacity={0.8}
//                             onPress={() => navigation.navigate('Details', { id: catagory.id })} 
//                         >
//                             <View style={{ backgroundColor: selectCatagoryIndex == index ? COLORS.PC : COLORS.SC, ...styles.catagories, }}>
//                                 <View style={styles.categorybtnicon}>
//                                     <TouchableOpacity
//                                         style={[
//                                             {
//                                                 backgroundColor: isClicked ? '#FFA451' : 'transparent',
//                                                 width: 30,
//                                                 height: 30,
//                                                 borderRadius: 45,
//                                                 paddingTop: 3,
//                                                 left: 70,
//                                                 bottom: 23,
//                                             }
//                                         ]}
//                                         onPress={handlePress}
//                                     >
//                                     {icon}
//                                     </TouchableOpacity>
//                                     <Image source={catagory.image} 
//                                         style={{ width: 75, height: 75, top: -29, right: 9,borderRadius:55 }}
//                                     />
//                                     <Text onPress={() => navigation.navigate('Details', { id: catagory.id })}
//                                         style={{ fontSize: 15, fontWeight: 500, width: 140, right: 30, top: -14, fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08', }}>
//                                         {catagory.name}
//                                     </Text>
//                                     <Image source={catagory.c_btn}
//                                         style={{ width: 14, height: 14, right: 28, top: -2 }}
//                                     />
//                                     <Text
//                                         style={{
//                                             color: '#FFA451',
//                                             fontSize: 17,
//                                             top: -20, right: 6,
//                                             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
//                                         }}>{catagory.price}
//                                     </Text>
//                                     <Image
//                                         source={catagory.add}
//                                         style={{ left: 70, top: -43 }} />
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     ))
//                 }
//             </ScrollView>
//         )
//     }

//     const ListCatagories1 = () => {
//         return (
//             <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={true}
//                 contentContainerStyle={styles.catagoriresListContainer1}
//             >
//                 {
//                     Catagories1.map((catagory, index) => (
//                         <TouchableOpacity
//                             key={index}
//                             activeOpacity={0.8}
//                             onPress={() => navigation.navigate('Details', { id: catagory.id })} // Corrected navigation
//                         >
//                             <View style={{ backgroundColor: selectCatagoryIndex == index ? COLORS.PC : COLORS.SC, ...styles.catagories1, }}>
//                                 <View style={styles.categorybtnicon1}    >
//                                     <TouchableOpacity
//                                         style={[
//                                             {
//                                                 backgroundColor: isClicked ? '#FFA451' : 'transparent',
//                                                 width: 30,
//                                                 height: 30,
//                                                 borderRadius: 45,
//                                                 paddingTop: 3,
//                                                 left: 70,
//                                                 bottom: 23,
//                                             }
//                                         ]}
//                                         onPress={handlePress}
//                                     >
//                                        <Icon name='heart' size={30} color={isClicked ? 'white' : '#FFA451'} />
//                                     </TouchableOpacity>
//                                     <Image source={catagory.image}
//                                         style={{ width: 65, height: 65, top: -28, right: 0, borderRadius: 75 }}
//                                     />
//                                     <Text
//                                         style={{ fontSize: 15, fontWeight: 500, width: 140, right: 30, top: -14, fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08', }}>
//                                         {catagory.name}
//                                     </Text>
//                                     <Image source={catagory.c_btn}
//                                         style={{ width: 14, height: 14, right: 28, top: -2 }}
//                                     />
//                                     <Text
//                                         style={{
//                                             color: '#FFA451',
//                                             fontSize: 17,
//                                             top: -20, right: 6,
//                                             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
//                                         }}>{catagory.price}
//                                     </Text>
//                                     <Image
//                                         source={catagory.add}
//                                         style={{ left: 70, top: -43 }} />
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     ))
//                 }
//             </ScrollView>
//         )
//     }
//     const ListCatagories2 = () => {
//         return (
//             <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={true}
//                 contentContainerStyle={styles.catagoriresListContainer1}
//             >
//                 {
//                     Catagories1.map((catagory, index) => (
//                         <TouchableOpacity
//                             key={index}
//                             activeOpacity={0.8}
//                             onPress={() => navigation.navigate('Details', { id: catagory.id })} // Corrected navigation
//                         >
//                             <View style={{ backgroundColor: selectCatagoryIndex == index ? COLORS.PC : COLORS.SC, ...styles.catagories1, }}>
//                                 <View style={styles.categorybtnicon1}    >
//                                     <TouchableOpacity
//                                         style={[
//                                             {
//                                                 backgroundColor: isClicked ? '#FFA451' : 'transparent',
//                                                 width: 30,
//                                                 height: 30,
//                                                 borderRadius: 45,
//                                                 paddingTop: 3,
//                                                 left: 70,
//                                                 bottom: 23,
//                                             }
//                                         ]}
//                                         onPress={handlePress}
//                                     >
//                                        <Icon name='heart' size={30} color={isClicked ? 'white' : '#FFA451'} />
//                                     </TouchableOpacity>
//                                     <Image source={catagory.image}
//                                         style={{ width: 65, height: 65, top: -28, right: 0, borderRadius: 75 }}
//                                     />
//                                     <Text
//                                         style={{ fontSize: 15, fontWeight: 500, width: 140, right: 30, top: -14, fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08', }}>
//                                         {catagory.name}
//                                     </Text>
//                                     <Image source={catagory.c_btn}
//                                         style={{ width: 14, height: 14, right: 28, top: -2 }}
//                                     />
//                                     <Text
//                                         style={{
//                                             color: '#FFA451',
//                                             fontSize: 17,
//                                             top: -20, right: 6,
//                                             fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
//                                         }}>{catagory.price}
//                                     </Text>
//                                     <Image
//                                         source={catagory.add}
//                                         style={{ left: 70, top: -43 }} />
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     ))
//                 }
//             </ScrollView>
//         )
//     }
{/* <View>
<Image
    style={styles.bars}
    source={require('../assets/bars.png')}
/>
<TouchableOpacity

 onPress={()=>navigation.navigate('Basket')}
    style={styles.basket}>

    <Image 
        source={require('../assets/basket.png')}
    />
    <Text
        style={styles.bask_T}>
        My Basket
    </Text>
</TouchableOpacity>
</View >
<Text
style={styles.S_bask}>
Hello Tony, What fruit salad combo do you want today?
</Text>

<View style={styles.searchbox}>
<TextInput
    style={{
        width: 258,
        fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
        height: 48,
        left: 24
    }}
    placeholder='Search for fruit salad combos'
/>
<Image source={require('../assets/search.png')} style={{ top: -31,marginLeft:10 }} />
<Image source={require('../assets/bar2.png')} style={{ left: 287 ,top:-49}} />
</View>

<ListCatagories />
    <ListCatagories2/>
<View style={styles.container}>
<TouchableOpacity onPress={() => setActiveTab('Hottest')} style={styles.tab}>
    <Text style={[styles.tabText, activeTab === 'Hottest' && styles.activeTabText]}>Hottest</Text>
    {activeTab === 'Hottest' && <View style={styles.activeTabLine} />}
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveTab('Popular')} style={styles.tab}>
    <Text style={[styles.tabText, activeTab === 'Popular' && styles.activeTabText]}>Popular</Text>
    {activeTab === 'Popular' && <View style={styles.activeTabLine} />}
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveTab('New combo')} style={styles.tab}>
    <Text style={[styles.tabText, activeTab === 'New combo' && styles.activeTabText]}>New combo</Text>
    {activeTab === 'New combo' && <View style={styles.activeTabLine} />}
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveTab('Top')} style={styles.tab}>
    <Text style={[styles.tabText, activeTab === 'Top' && styles.activeTabText]}>Top</Text>
    {activeTab === 'Top' && <View style={styles.activeTabLine} />}
</TouchableOpacity>
</View>

<ListCatagories1 /> */}