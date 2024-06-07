import * as React from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import { ScreenRatio } from '../Utils/ScreenRatio';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/Images';
import { router, useLocalSearchParams } from 'expo-router';


const SongList = () => {

  const item: any = useLocalSearchParams();
  console.log(" This is item -=-=-=-=-=-=-=-=- " + JSON.stringify(item));


  return (
    <ImageBackground resizeMode='cover' style={{ flex: 1, paddingHorizontal: ScreenRatio(1) }} source={Images.wallpaper1_image}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => { router.back() }} style={{ height: ScreenRatio(5), width: ScreenRatio(5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
            <Image source={Images.icon_back} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { router.back() }} style={{ height: ScreenRatio(35), width: ScreenRatio(35), borderRadius: ScreenRatio(50), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: ScreenRatio(5) }}>
            <Image source={item?.image} style={{ height: ScreenRatio(34), width: ScreenRatio(34), resizeMode: "cover", borderRadius: ScreenRatio(50) }} />
          </TouchableOpacity>

          <View style={{ marginTop: ScreenRatio(3) }}>
            <Text style={{ fontSize: ScreenRatio(3), color: Colors.orange8, fontWeight: "700", textAlign: "center" }}>
              {item?.songName}
            </Text>
            <TouchableOpacity onPress={() => { router.back() }} style={{ height: ScreenRatio(5), width: ScreenRatio(5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
              <Image source={Images.icon_downloads} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default SongList