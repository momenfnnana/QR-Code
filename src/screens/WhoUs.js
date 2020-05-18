import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Logo from '../component/Logo'

const WhoUs = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Header />
            <Logo />
            <Text style={styles.Text}>من نحن</Text>
            <Text style={styles.TextContent}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، ل
                قد تم توليد هذا النص من مولد النص العربى،
                حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص ا
                لأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع
                على وجه الخصوص، حيث يحتاج العميل فى كثير من ا
                لأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
            </Text>
            <Footer />
        </View>
    )
}
const styles = StyleSheet.create({
    Text: {
        fontSize: 29,
        fontFamily: 'cairo-bold',
        color: '#94C422'
    },
    TextContent: {
        fontSize: 12,
        fontFamily: 'cairo-bold',
        color: '#94C422'
    }
})
export default WhoUs