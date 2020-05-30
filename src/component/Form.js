import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Logo from './Logo'
import * as WebBrowser from 'expo-web-browser'
import {makeRedirectUri,useAuthRequest} from 'expo-auth-session'
import { Input } from 'react-native-elements'
import ClickButton from './ClickButton'
import Spacer from './Spacer'
import { Context } from '../Context/AuthContext'
const Form = ({onClick}) => {


//     WebBrowser.maybeCompleteAuthSession();
//     // In a functional component...


// // Endpoint
// const discovery = useAutoDiscovery('https://<OKTA_DOMAIN>.com/oauth2/default');
// // Request
// const [request, response, promptAsync] = useAuthRequest(
//   {
//     clientId: 'CLIENT_ID',
//     scopes: ['openid', 'profile'],
//     // For usage in managed apps using the proxy
//     redirectUri: makeRedirectUri({
//       // For usage in bare and standalone
//       native: 'com.okta.dev-106054:/callback',
//       useProxy,
//     }),
//   },
//   discovery
// );


    const { state, signin, clearErrorMessage } = useContext(Context);
    const [name, setName] = useState('admin')
    const [pass, setPass] = useState('123123')
    return (
        <View>
            <Logo />
            <View style={styles.Button}>
                <TextInput
                    style={styles.Input}
                    placeholder='اسم المستخدم'
                    value={name}
                    onChangeText={setName}
                    autoCapitalize='none'
                />
            </View>
            <Spacer />
            <View style={styles.Button}>
                <TextInput
                    style={styles.Input}
                    placeholder='كلمة السر'
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry
                    autoCapitalize='none'
                />
            </View>
            {/* <ClickButton
                title='اسم المستخدم'
                value={name}
                onChangeText={setName}
                state={state.errorMessage}
                Type='name'
            /> */}
            {/* <ClickButton
                title='كلمة السر'
                value={pass}
                onChangeText={setPass}
                state={state.errorMessage}
                Type='password'
            /> */}
            {/* <Spacer /> */}
            {/* <Spacer /> */}
            {state.errorMessage ? <Text style={{color:'red',marginVertical:10}}>{state.errorMessage}</Text> :<Spacer />}
            <TouchableOpacity onPress={()=>onClick({name,pass})}>
            
                <View style={styles.login}>
                    <Text style={{ textAlign: 'center', marginTop: 10, color: '#fff', fontFamily: 'cairo-bold' }}>تسجيل الدخول</Text>
                </View>
            </TouchableOpacity>
            {/* <Spacer /> */}
            <Spacer />
            <Spacer />
        </View>
    )
}
const styles = StyleSheet.create({
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
        alignSelf:'center'
    },
    Button: {
        backgroundColor: "#F6F6F6",
        width: 250,
        height: 46,
        borderRadius: 30,
        shadowColor: '#ffff',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 7,
        elevation: 1.5,
        // backgroundColor:'#F6F6F6'
    },
    Input: {
        textAlign: 'center',
        marginTop: 10,
        color: '#716767',
        fontFamily: 'cairo-bold'
    }
})
export default Form