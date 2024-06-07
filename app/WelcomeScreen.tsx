import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../assets/Images'
import { ScreenRatio } from '../Utils/ScreenRatio'
import Colors from '../assets/Colors'
import { router } from 'expo-router'

const { width, height } = Dimensions.get("screen")
 
const home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Image source={Images.splash_image} style={{ flex: 1, width: width, height, resizeMode: "contain", position: "absolute" }} />
            <View style={{ position: "absolute", bottom: 0, height: height / 2, paddingHorizontal: 20, width }}>
                <View style={{ width: ScreenRatio(30) }}>
                    <Text style={{ fontSize: ScreenRatio(6), color: "white", fontWeight: "bold" }}>
                        {"Enjoy your favorite music"}
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>{router.push({ pathname: "/DashboardScreen"})}} style={{ width: '100%', height: ScreenRatio(6.5), backgroundColor: Colors.orange8, borderTopRightRadius: ScreenRatio(3), alignItems: "center", justifyContent: "center", marginTop:ScreenRatio(2) }}>
                    <Text style={{ fontSize: ScreenRatio(2.2), color: Colors.black, fontWeight: "bold" }}>
                        {"Get Started"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: ScreenRatio(6.5), borderWidth: 2, borderColor: Colors.orange8, borderBottomRightRadius: ScreenRatio(3), marginTop: ScreenRatio(1), alignItems: "center", justifyContent: "center"  }}>
                    <Text style={{ fontSize: ScreenRatio(2.2), color: Colors.white, fontWeight: "bold" }}>
                        {"Continue with Email"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default home