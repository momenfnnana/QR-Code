import React from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
const Footer = ({onPress,TextFooter}) => {
    return (
        <View style={{ height: height * 0.21, width: width }}>
            <Image
                source={require('../../assets/Nav.png')}
                style={{ resizeMode: 'contain', width: width / 0.99, height: height * 0.25 }}
            />
            <TouchableOpacity style={{ position: 'absolute', alignSelf: 'center', marginTop: 75}} onPress={onPress}>
                <Text style={{  fontSize: 29, color: '#fff',fontFamily: 'cairo-bold',flex:1 }}>{TextFooter}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({})
export default Footer
