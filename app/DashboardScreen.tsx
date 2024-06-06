import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../assets/Colors';
import { ScreenRatio } from '../Utils/ScreenRatio';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("screen");

const dataArray =
{
    trading: [
        {
            image: "", songName: "", singerName: '', isFavirate: false, bannerIMage: ''
        }
    ],
    topChart: [
        {
            image: "", type: "", title: ""
        }
    ]
}


const bigHitsDataArray = [
    {}, {}, {}
]

const DashboardScreen = () => {

    const renderItems = () => {
        return (
            <View style={{ padding: ScreenRatio(3), backgroundColor: Colors.orange8, width: ScreenRatio(18), height: ScreenRatio(20), borderRadius: ScreenRatio(1.5), marginRight: ScreenRatio(2) }}>

            </View>
        )
    }

    const listRenderView = ({item, index}) => {
        return (
            <>
                <View style={{ flexDirection: "row", marginBottom: ScreenRatio(1) }}>
                    <Text style={{ fontSize: ScreenRatio(2.6), color: Colors.white, fontWeight: "600" }}>
                        {"Trending Songs"}
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} style={{ position: "absolute", right: 0 }}>
                        <Text style={{ fontSize: ScreenRatio(1.8), color: Colors.white, textDecorationLine: "underline" }}>
                            {"View All"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <FlatList
                        data={bigHitsDataArray}
                        horizontal={true}
                        renderItem={renderItems}
                    />
                </View>
            </>
        )
    }

    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: Colors.black, height }}>
            <LinearGradient
                colors={[Colors.black, Colors.black, Colors.black2, Colors.black2, Colors.black2]}
                style={{ width: '100%', flex: 1, padding: ScreenRatio(2) }}>

                <View style={{ marginTop: ScreenRatio(2), height: ScreenRatio(30) }}>
                    <FlatList data={dataArray?.trading}
                        renderItem={listRenderView} />
                </View>


            </LinearGradient>
        </SafeAreaView>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({})