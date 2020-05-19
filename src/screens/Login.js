import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Text } from 'react-native-elements'
import Logo from '../component/Logo'
import Header from '../component/Header'
import ClickButton from '../component/ClickButton'
import Spacer from '../component/Spacer'
import Footer from '../component/Footer'
import { Context } from '../Context/AuthContext'
import Form from '../component/Form'
const Login = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <Header />
            <Form
                onClick={signin}
                // onClick={()=>navigation.navigate('third')}
                State={state.errorMessage}
            />
            <Footer
                TextFooter='من نحن'
                onPress={() => navigation.navigate('seconde')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    login: {
        backgroundColor: '#7DA61C',
        height: 46,
        width: 163.08,
        borderRadius: 20,
        shadowColor: '#ffff',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        elevation: 1.5,
    }
})
export default Login