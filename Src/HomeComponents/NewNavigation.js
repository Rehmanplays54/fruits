import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const NewNavigation = () => {
    const [activeTab, setActiveTab] = useState('Hottest');
  return (
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
  )
}

export default NewNavigation
 const  styles=StyleSheet.create({
    container: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#fff',
                
                top: -150
            },
            tab: {
                alignItems: 'center',
            },
            tabText: {
                fontSize: 14,
                color: '#938DB5',
            },
            activeTabText: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                bottom:4
            },
            activeTabLine: {
                marginTop: 4,
                height: 2,
                backgroundColor: 'orange',
                width: '40%',
                right: 19
            },
 })