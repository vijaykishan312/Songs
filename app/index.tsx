

import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'

const index = () => {
    const STATUSBAR_HEIGHT = StatusBar.currentHeight
    return (<Redirect href={"/WelcomeScreen"}/>)
}

export default index

const styles = StyleSheet.create({})

{/* <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: "red" }}>
<StatusBar backgroundColor={"black"} barStyle='dark-content' />
</View> */}

// <View>
// <Text>index</Text>
// <Link href={"/home"}>Go to songs list</Link>
// </View>

{/* <View style={{ flex: 1, backgroundColor: 'black' }}>
<TouchableOpacity onPress={() => { router.push({ pathname: "/home", params: { destination: "" } }) }}
    style={{ height: 55, width: 150, backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
    <Text>
        Hello
    </Text>
</TouchableOpacity>
</View> */}