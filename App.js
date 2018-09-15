/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,ImageBackground, StatusBar,Dimensions
} from 'react-native';

import { Container, Button, H3, Text } from "native-base";

// Code related to  GoogleAnalyticsBridge

// You have access to three classes in this module:




//GoogleAnalyticsBridge




import styles from "./styles";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            /*
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
          </View>

          */




            <Container>
                <StatusBar barStyle="light-content"/>


                    <View
                        style={{
                            alignItems: "center",
                            marginBottom: 50,
                            backgroundColor: "transparent"
                        }}
                    >
                        <H3 style={styles.text}>App to showcase</H3>
                        <View style={{marginTop: 8}}/>
                        <H3 style={styles.text}>NativeBase components</H3>
                        <View style={{marginTop: 8}}/>
                    </View>
                    <View style={{marginBottom: 80}}>
                        <Button
                            style={{backgroundColor: "#6FAF98", alignSelf: "center"}}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            title="Will not be visible or rendered but added as required rule by arefin"
                        >
                            <Text>Lets Go!</Text>
                        </Button>
                        <Button
                            style={{backgroundColor: "crimson", alignSelf: "center"}}
                            onPress={() => this.props.navigation.navigate("Arefin")}
                            title="Will not be visible or rendered but added as required rule by arefin"
                        >
                            <Text>Go To Arefin(custom)</Text>
                        </Button>

                        <Button
                            style={{backgroundColor: "#6FAF98", alignSelf: "center", marginBottom: 10}}
                            onPress={() => this.props.navigation.navigate("ArefinWebView")}
                            title="Will not be visible or rendered but added as required rule by arefin" sy
                        >
                            <Text>Arefin WebView</Text>
                        </Button>

                        <Button
                            /* onPress={() => console.log('2nd')}*/

                            onPress={() => _cat2()}
                            title="Learn More"
                            color="crimson"
                        >
                            <Text>Device Info</Text>
                        </Button>

                        {/*<Greeting name='Jaina'/>*/}
                        {/*<Greeting name='Valeera'/>*/}

                    </View>



            </Container>
        );


    };

}


let _cat2 = () => {

    console.log("Platform OS:",Platform.OS);

    console.log("Platform OS (Version):",Platform.Version);

    // console.log("DeviceInfo.name: ",DeviceInfo.name);
    // console.log("DeviceInfo.model: ",DeviceInfo.model());

    let DeviceInfo = require('react-native-device-info');

    console.log("DeviceInfo.getModel: ",DeviceInfo.getModel());

    console.log("getDeviceName(): ",DeviceInfo.getDeviceName());


    console.log("getUniqueID(): ",DeviceInfo.getUniqueID());
    console.log("isEmulator(): ",DeviceInfo.isEmulator());

    console.log("Window Dimensions is: ",Dimensions.get("window"));

    console.log("Screen Dimensions is: ",Dimensions.get("screen"));



    console.log("a: ",122211);
    let OS_app;

    if(Platform.OS === 'ios'){
        OS_app ="ios";
    }
    else OS_app ="Android";

}




// contentComponent at src/App.js



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
