import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Dimensions } from 'react-native'
import { Text, Image } from 'react-native-elements'
import InputTag from '../component/Input'
import Spacer from '../component/Spacer'
// import { DateInput } from 'react-native-date-input';
// import dayjs from 'dayjs';
const { height, width } = Dimensions.get('window')
const QrCodeCard = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('');
    // let dateInput = null;
    // const handleChange = (date) => {
    //     setDate(date);
    // };

    // const focus = () => {
    //     if (!dateInput) {
    //         return;
    //     }

    //     dateInput.focus();
    // };

    return (
        <View style={styles.FullScreen}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/Save.png')}
                        style={{ resizeMode: 'contain', height: height / 17.2, width: width / 16.3,marginLeft:310,marginTop:-10 }}
                    />
                    <Image
                        source={require('../../assets/Qr_Code_Green.png')}
                        style={{ resizeMode: 'contain', height: height / 6, width: width / 2.8 }}
                    />
                </View>
                <Spacer />
                <InputTag
                    label='اسم المستخدم'
                    value={name}
                    onChange={setName}
                    keyboardType='default'
                />
                <Spacer />
                <Spacer />
                <InputTag
                    label='جوال'
                    value={phone}
                    onChange={setPhone}
                    keyboardType='numeric'
                />
                <Spacer />
                <Spacer />
                <View style={styles.date}>
                    <Text style={{ fontSize: 13, color: '#9E9E9E', fontFamily: 'cairo-bold' }}>تارخ الدخول</Text>
                    <TextInput
                        value={date}
                        onChangeText={setDate}
                        style={styles.InputData}
                    // keyboardType=''
                    />
                </View>
                {/* <DateInput
                inputProps={{
                    style: {},
                    ...props,
                    // Supports all TextInput props
                }}
                dateFormat={'DD/MM/YYYY'}
                defaultValue={new Date(dayjs().subtract(5, 'year').format('DD/MM/YYYY'))}
                defaultDate={new Date(dayjs().subtract(5, 'year'))}
                minimumDate={new Date(dayjs().subtract(10, 'year'))}
                maximumDate={new Date()}
                handleChange={handleChange}
                onRef={(input) => (dateInput = input)}
            /> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    InputData: {
        borderColor: '#707070',
        borderBottomWidth: 1,
        width: 256.64,
        marginLeft: 50
    },
    container: {
        height: height / 1.4,
        width: width / 1.12,
        justifyContent: 'center'
    },
    date: {
        marginHorizontal: 30
    },
    FullScreen:{
        // backgroundColor:'#94C422',
        borderRadius:22
    }
})
export default QrCodeCard