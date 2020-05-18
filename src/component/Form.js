import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Logo from './Logo'
import ClickButton from './ClickButton'
import Spacer from './Spacer'
const Form = () => {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    return (
        <View>
            <Logo />
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
    }
})
export default Form