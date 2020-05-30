import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Dimensions, Modal, Button } from 'react-native'
import { Text } from 'react-native-elements'
import Header from '../component/Header'
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCodeCard from './QRCodeCard'
import { Context as QrContext } from '../Context/QrContext'
const { height, width } = Dimensions.get('window')
const QrCodeScane = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState([])
    const { add_QrCode } = useContext(QrContext);
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        // console.log(data);

        setScanned(true);
        try {
            add_QrCode({
                qr_code: data
            }).then(function (response) {
                if (!response.status) {
                    throw "Status not true";
                }
                var user = response.items;
                user.qr_code = response.qr_code;
                // console.log("********* qrPage **********\n", user.email, user.name, user.mobile);
                setData(user);
            }).catch(e => {
                alert("خطأ \n حدث خطأ في تسجيل المستخدم");
                console.log('Error:', e)
            });
        } catch (error) {
            console.log(error);
        }
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
        <View style={scanned ? styles.noScanned : styles.scanned}>
            <Header />
            <Text style={{ fontSize: 31, fontFamily: 'cairo-bold', alignSelf: 'center', width: 202, textAlign: 'center', color: '#262626' }}>مسح رمز الكود الخاص بك</Text>
            {/* onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} */}
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: height / 2, width: width, alignSelf: 'center' }}
            />
            {scanned && <View style={{ marginTop: -20 }}>
                <QRCodeCard
                    modalVisible={scanned}
                    onClick={() => setScanned(false)}
                    scanned={scanned}
                />
            </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    scanned: {
        flex: 1,
        backgroundColor: '#fff'
    },
    noScanned: {
        flex:1,
        backgroundColor: '#000',
        opacity: 0.6
    }
})
export default QrCodeScane