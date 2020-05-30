import React from 'react'
import {View,StyleSheet,Image,Dimensions} from 'react-native'
import {Text} from 'react-native-elements'
const {height,width} = Dimensions.get('window')
const Header =  () =>{
    return(
        <View style={{marginTop:-22}}>
            <Image 
                source={require('../../assets/Header.png')}
                style={{resizeMode:'contain',width:width/0.99,height:height*0.27}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    
})
export default Header