import { Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Colors from '../assets/Colors';
import { ScreenRatio } from '../Utils/ScreenRatio';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/Images';
import { router } from 'expo-router';

const { height } = Dimensions.get("screen");

const dataArray =
{
    trading: [{
        headingName: "Trending Songs",
        data: [{ id: 0, image: Images.song1_image, songName: "asdasd", singerName: 'asdas, asdasd, asd', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song2_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },]
    }],
    topChart: [{
        headingName: "Top Chart",
        data: [{ id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },]
    }],
    partySongs: [{
        headingName: "Party Songs",
        data: [{ id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },
        { id: 0, image: Images.song1_image, songName: "", singerName: '', isFavirate: false, bannerIMage: '', typeSong: 1 },]
    }]
}

const DashboardScreen = () => {

    const renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>{router.navigate({ pathname: "/SongPlay", params:item})}} activeOpacity={0.5} style={{ backgroundColor: Colors.black, width: ScreenRatio(18), height: ScreenRatio(23), borderRadius: ScreenRatio(1.5), marginRight: ScreenRatio(0.7), marginLeft: ScreenRatio(1), marginTop: ScreenRatio(1), shadowOffset: { height: 5, width: 5 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange8 }}>
                <Image source={item?.image} style={{ height: ScreenRatio(17), width: ScreenRatio(17), resizeMode: "contain", alignSelf: "center", marginTop: ScreenRatio(0.3) }} />
                <View style={{ paddingHorizontal: ScreenRatio(1), marginTop: ScreenRatio(0.8) }}>
                    <Text style={{ fontSize: ScreenRatio(1.6), color: Colors.orange8, fontWeight: "600" }}>
                        {item?.songName}
                    </Text>
                    <Text style={{ fontSize: ScreenRatio(1.6), color: Colors.orange8 }}>
                        {item?.singerName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const listRenderView = (item: any, index: number) => {
        return (
            <View style={{ height: ScreenRatio(30) }}>
                <View style={{ flexDirection: "row", marginBottom: ScreenRatio(1) }}>
                    <Text style={{ fontSize: ScreenRatio(2.4), color: Colors.orange10, fontWeight: "600" }}>
                        {item?.headingName}
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} style={{ position: "absolute", right: 0 }}>
                        <Text style={{ fontSize: ScreenRatio(1.6), color: Colors.orange10, textDecorationLine: "underline" }}>
                            {"View All"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={item?.data}
                    horizontal={true}
                    renderItem={renderItems} />
            </View>
        )
    }

    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1, height, backgroundColor: Colors.black }}>
            <ImageBackground resizeMode='contain' style={{ flex: 1, paddingHorizontal: ScreenRatio(1) }} source={Images.background_image}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {dataArray?.trading.map((item, index) => { return (listRenderView(item, index)) })}
                        {dataArray?.topChart.map((item, index) => { return (listRenderView(item, index)) })}
                        {dataArray?.partySongs.map((item, index) => { return (listRenderView(item, index)) })}
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default DashboardScreen;