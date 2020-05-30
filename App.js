import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResolveScreen from './src/screens/ResolveScreen'
import Login from './src/screens/Login'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import QrCodeScane from './src/screens/QRCodeScan'
import QrCodeCard from './src/screens/QRCodeCard';
import AboutUs from './src/screens/AboutUs';
import { Provider as AuthProvider } from './src/Context/AuthContext'
import { Provider as QrProvider } from './src/Context/QrContext'
import { setNavigate } from './src/component/navigationRef'
const fetchFonts = () => {
  return Font.loadAsync({
    'cairo': require('./assets/Cairo-SemiBold.ttf'),
    'cairo-bold': require('./assets/Cairo-Regular.ttf'),
  });
};

const Nav = createStackNavigator({
  resolve: {
    screen: ResolveScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  aboutus: {
    screen: AboutUs,
    navigationOptions: {
      headerShown: false
    }
  },
  scanner: {
    screen: QrCodeScane,
    navigationOptions: {
      headerShown: false
    }
  },
  scannerresult: {
    screen: QrCodeCard,
    navigationOptions: {
      headerShown: false
    }
  }
})

const App = createAppContainer(Nav)
export default () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false)
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  if (!isReady) {
    return (
      <AppLoading
        startAsync={getImages}
        onFinish={setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  const getImages = async () => {
    const images = [
      require('./assets/Header.png'),
      require('./assets/Logo.png'),
      require('./assets/Nav.png'),
      require('./assets/Qr_Code_Green.png')
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
  return (
    <QrProvider>
      <AuthProvider>
        <App ref={(nav) => setNavigate(nav)} />
      </AuthProvider>
    </QrProvider>
  )
}