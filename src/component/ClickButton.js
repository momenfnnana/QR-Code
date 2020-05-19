import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements'

const ClickButton = ({ title, value, onChangeText, state, Type }) => {
    return (
            <View style={styles.Button}>
                <TextInput
                    style={styles.Input}
                    placeholder={title}
                    value={value}
                    onChangeText={onChangeText}
                    textContentType={Type}
                    secureTextEntry
                />
            </View>
    )
}
const styles = StyleSheet.create({
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
export default ClickButton