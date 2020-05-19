import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Modal } from 'react-native'
import { Text, Image } from 'react-native-elements'
import Header from '../component/Header'
import { BarCodeScanner } from 'expo-barcode-scanner';
const { height, width } = Dimensions.get('window')
const QrCodeScane = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <Text>{data}</Text>
                <Text>{type}</Text>
            </Modal>
        )
    };

    if (hasPermission === null) {
        return (
            <>
                <Header />
                <Text style={{ fontSize: 31, fontFamily: 'cairo-bold', alignSelf: 'center', width: 202, textAlign: 'center', color: '#262626' }}>مسح رمز الكود الخاص بك</Text>
            </>
        )
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Text style={{ fontSize: 31, fontFamily: 'cairo-bold', alignSelf: 'center', width: 202, textAlign: 'center', color: '#262626' }}>مسح رمز الكود الخاص بك</Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: height / 2, width: width, alignSelf: 'center' }}
            />

            {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
        </View>
    )
}
const styles = StyleSheet.create({})
export default QrCodeScane