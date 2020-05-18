import React,{useState,useContext} from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Logo from '../component/Logo'
import Header from '../component/Header'
import ClickButton from '../component/ClickButton'
import Spacer from '../component/Spacer'
import Footer from '../component/Footer'
import {Context} from '../Context/AuthContext'
import Form from '../component/Form'
const Login = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    return (
        <View
            style={styles.container}
        >
            <Header />
            <Form />
            {/* <Logo />
            <ClickButton
                title='اسم المستخدم'
                value={name}
                onChangeText={setName}
                state={state.errorMessage}
            />
            <Spacer />
            <ClickButton
                title='كلمة السر'
                value={pass}
                onChangeText={setPass}
                state={state.errorMessage}
            />
            <Spacer />
            <Spacer />
            <TouchableOpacity onPress={signin}>
                <View style={styles.login}>
                    <Text style={{ textAlign: 'center', marginTop: 10, color: '#fff', fontFamily: 'cairo-bold' }}>تسجيل الدخول</Text>
                </View>
            </TouchableOpacity>
             <Spacer /> 
            <Spacer /> */}
            <Footer TextFooter='من نحن' onPress={() => navigation.navigate('seconde')} />
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