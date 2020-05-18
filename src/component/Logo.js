import React from 'react'
import {View,StyleSheet,Image} from 'react-native'
import {Text} from 'react-native-elements'

const Logo =  () =>{
    return(
        <View>
            <Image 
                source={require('../../assets/Logo.png')}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
export default Logo