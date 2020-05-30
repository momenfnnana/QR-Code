import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
// import { Input } from 'react-native-elements'
const InputTag = ({ label, value, Type, onChange, keyboardType }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.Input}
                keyboardType={keyboardType}
                editable={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginHorizontal: 30
    },
    label: {
        fontSize: 14,
        fontFamily: 'cairo-bold',
        color: '#9E9E9E'
    },
    Input: {
        borderColor: '#707070',
        borderBottomWidth: 1,
        width: 256.64,
        textAlign: 'right',
        fontFamily: 'cairo-bold'
    }
})
export default InputTag