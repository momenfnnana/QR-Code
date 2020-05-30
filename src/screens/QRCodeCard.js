import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Modal, CameraRoll, ToastAndroid } from 'react-native'
import { Text, Image } from 'react-native-elements'
import InputTag from '../component/Input'
import Spacer from '../component/Spacer'
import { Context as QrContext } from '../Context/QrContext'
import QRCode from 'react-native-qrcode-svg';
// import QRCode from 'react-native-qrcode'
// import RNFS from "react-native-fs"
import { FontAwesome } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window')
const QrCodeCard = (props) => {
    const [QrCodeData,setQRCodeData] = useState('eyJpdiI6Ijd3QkZYVTFhczFZdXhXaXlMR0ZvRFE9PSIsInZhbHVlIjoiZldiOHJrVEVtTkZScDY1dGx1aEUzdz09IiwibWFjIjoiZGI1NWIxNzg3YzRkOGViNDE0MGEyMTNkOWQ0OTc4YzE4Y2E1ZDdiNDA1ZTQzNjEyNzcxY2IwYzhmMDBjYzczZCJ9')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('');
    const { state: { AllData } } = useContext(QrContext)
    return (
        <View style={{backgroundColor:'#fff'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.FullScreen}>
                    <View style={styles.container}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={props.onClick}
                            >
                                <FontAwesome
                                    name="close"
                                    size={24} color="black"
                                />
                            </TouchableOpacity>
                            {/* color="green" */}
                            <QRCode
                                backgroundColor='white'
                                color='green'
                                size={150}
                                value={QrCodeData}
                                // bgColor='#000'
                                // fgColor='#fff'
                            />
                            {/* <QRCode
                            value='https://facebook.com'
                            size={200}
                            bgColor='purple'
                            fgColor='white' /> */}
                        </View>
                        <Spacer />
                        <InputTag
                            label='اسم المستخدم'
                            value={AllData.name}
                            onChange={setName}
                            keyboardType='default'
                        />
                        <Spacer />
                        <Spacer />
                        <InputTag
                            label='جوال'
                            value={AllData.mobile}
                            onChange={setPhone}
                            keyboardType='numeric'
                        />
                        <Spacer />
                        <Spacer />
                        <InputTag
                            label='تاريخ الدخول'
                            value={AllData.updated_at}
                            onChange={setDate}
                            keyboardType='numeric'
                        />
                        {/* <TextInput
                            value={AllData.updated_at}
                            onChangeText={setDate}
                            style={styles.InputData}
                        /> */}
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
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    InputData: {
        borderColor: '#707070',
        borderBottomWidth: 1,
        width: 256.64
    },
    container: {
        height: height / 1.4,
        width: width / 1.12,
        justifyContent: 'space-between'
    },
    date: {
        marginHorizontal: 30
    },
    FullScreen: {
        backgroundColor: '#fff',
        borderRadius: 22,
        alignItems: 'center',
        width: width / 1.12,
        alignSelf: 'center',
        height: height / 1.3,
        marginTop: height / 6
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 15,
        marginTop: 15
    },
    scanned: {
        flex: 1,
        backgroundColor: '#000',
        color:'#000'
    },
    // noScanned: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     opacity: 0.6
    // }
})
export default QrCodeCard