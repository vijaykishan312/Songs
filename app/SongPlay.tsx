import * as React from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import { ScreenRatio } from '../Utils/ScreenRatio';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/Images';
import { router, useLocalSearchParams } from 'expo-router';
import { Audio } from "expo-av";
import { Waveform, type IWaveformRef } from '@simform_solutions/react-native-audio-waveform';
import { Marquee } from '@animatereactnative/marquee';

// const sound = new Audio.Sound()
const SongList = () => {
  const item: any = useLocalSearchParams();
  console.log(" This is item -=-=-=-=-=-=-=-=- " + JSON.stringify(item));

  const path = require('../Songs/song2.mp3'); // path to the audio file for which you want to show waveform
  const ref = React.useRef<IWaveformRef>(null);

  return (
    <ImageBackground resizeMode='cover' style={{ flex: 1, paddingHorizontal: ScreenRatio(1) }} source={Images.wallpaper1_image}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <View style={{ flex: 1 }}>
          <View style={{flexDirection:"row",justifyContent: "space-between", width:'100%'}}>
          <TouchableOpacity onPress={() => { router.back() }} style={{ height: ScreenRatio(5), width: ScreenRatio(5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
            <Image source={Images.icon_back} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={async () => {}}
              style={{ height: ScreenRatio(5), width: ScreenRatio(5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
              <Image source={Images.icon_downloads} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
            </TouchableOpacity>
         </View>

          <TouchableOpacity style={{ height: ScreenRatio(35), width: ScreenRatio(35), borderRadius: ScreenRatio(50), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0, }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: ScreenRatio(5) }}>
            <Image source={item?.image} style={{ height: ScreenRatio(34), width: ScreenRatio(34), resizeMode: "cover", borderRadius: ScreenRatio(50) }} />
          </TouchableOpacity>

          <View style={{ marginTop: ScreenRatio(3) }}>
            <Text style={{ fontSize: ScreenRatio(3), color: Colors.orange8, fontWeight: "700", textAlign: "center" }}>
              {item?.songName}
            </Text>
            
          </View>
         
        </View>
        <View style={{height:ScreenRatio(25), width:"90%", backgroundColor:Colors.gray20, alignSelf:"center", borderRadius:ScreenRatio(1),shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10,marginBottom:ScreenRatio(10) }}>
          <View style={{ height: ScreenRatio(14) }}>
          {/* <Waveform
            mode="static"
            ref={ref}
            path={path}
            candleSpace={2}
            candleWidth={4}
            scrubColor="white"
            onPlayerStateChange={playerState=>console.log(playerState)}
            onPanStateChange={isMoving=>console.log(isMoving)}
        /> */}
            {/* <WaveForm
              waveFormStyle={{waveColor:'red', scrubColor:'white'}}
              // source={{ uri: 'https://url/path/to/the/file.mp3' }}
              source={)}
            /> */}
            {/* ../Songs/song1.mp3 */}
            <Marquee spacing={20} speed={2}>
              <Text style={{ fontSize: ScreenRatio(3), color: Colors.orange8, fontWeight: "700", textAlign: "center" }}>
                {"Vijay kishan vyas"}
              </Text>
            </Marquee>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: ScreenRatio(3) }}>
            <TouchableOpacity onPress={async () => {}}
                style={{ height: ScreenRatio(5.5), width: ScreenRatio(5.5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
                <Image source={Images.icon_previous} style={{ height: ScreenRatio(2.5), width: ScreenRatio(2.5), resizeMode: "contain", tintColor: Colors.gray005 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => {}}
                style={{ height: ScreenRatio(5.5), width: ScreenRatio(5.5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
                <Image source={Images.icon_play} style={{ height: ScreenRatio(2.5), width: ScreenRatio(2.5), resizeMode: "contain", tintColor: Colors.gray005 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => {}}
              style={{ height: ScreenRatio(5.5), width: ScreenRatio(5.5), borderRadius: ScreenRatio(15), backgroundColor: Colors.gray20, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 1, shadowRadius: 7, elevation: 3, shadowColor: Colors.orange10, alignItems: "center", justifyContent: "center" }}>
              <Image source={Images.icon_next} style={{ height: ScreenRatio(2.5), width: ScreenRatio(2.5), resizeMode: "contain", tintColor: Colors.gray005 }} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default SongList


  // const { sound } = await Audio.Sound.createAsync(require('../Songs/song2.mp3'))
              // console.log('Playing Sound');
              // await sound.playAsync();
              // setSound(sound);


// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import TrackPlayer, {
//   Capability,
//   State,
//   Event,
//   usePlaybackState,
//   useProgress,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';
// import Images from '../assets/Images';
// import { ScreenRatio } from '../Utils/ScreenRatio';
// import Colors from '../assets/Colors';
// // import podcasts from './assets/data';

// function MusicPlayer() {
  
//   // const podcastsCount = podcasts.length;
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [trackTitle, setTrackTitle] = useState();
//   const [trackArtist, setTrackArtist] = useState();
//   const [trackArtwork, setTrackArtwork] = useState();
  
//   const playBackState = usePlaybackState();
//   const progress = useProgress();

//   const setupPlayer = async () => {
//     try {
//       await TrackPlayer.setupPlayer();
//       await TrackPlayer.updateOptions({
//         capabilities: [
//           Capability.Play,
//           Capability.Pause,
//           Capability.SkipToNext,
//           Capability.SkipToPrevious
//         ],
//       });
//       // await TrackPlayer.add(podcasts);
//       await gettrackdata();
//       await TrackPlayer.play();
//     } catch (error) { console.log(error); }
//   };

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
//     if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
//       const track = await TrackPlayer.getTrack(event.nextTrack);
//       const {title, artwork, artist} = track;
//       console.log(event.nextTrack);
//       setTrackIndex(event.nextTrack);
//       setTrackTitle(title);
//       setTrackArtist(artist);
//       setTrackArtwork(artwork);
//     }
//   });

//   const gettrackdata = async () => {
//     let trackIndex = await TrackPlayer.getCurrentTrack();
//     let trackObject = await TrackPlayer.getTrack(trackIndex);
//     console.log(trackIndex);
//     setTrackIndex(trackIndex);
//     setTrackTitle(trackObject.title);
//     setTrackArtist(trackObject.artist);
//     setTrackArtwork(trackObject.artwork);
//   };

//   const togglePlayBack = async playBackState => {
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack != null) {
//       if ((playBackState == State.Paused) | (playBackState == State.Ready)) {
//           await TrackPlayer.play();
//         } else {
//           await TrackPlayer.pause();
//         }
//       }
//     };

//   const nexttrack = async () => {
//     // if (trackIndex < podcastsCount-1) {
//       await TrackPlayer.skipToNext();
//       gettrackdata();
//     // };
//   };

//   const previoustrack = async () => {
//     if (trackIndex > 0) {
//       await TrackPlayer.skipToPrevious();
//       gettrackdata();
//     };
//   };
  
//   useEffect(() => {
//     setupPlayer();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.mainContainer}>
//         <View style={styles.mainWrapper}>
//           <Image source={trackArtwork} style={styles.imageWrapper} />
//         </View>
//         <View style={styles.songText}>
//           <Text style={[styles.songContent, styles.songTitle]} numberOfLines={3}>{trackTitle}</Text>
//           <Text style={[styles.songContent, styles.songArtist]} numberOfLines={2}>{trackArtist}</Text>
//         </View>
//         <View>
//           <Slider
//             style={styles.progressBar}
//             value={progress.position}
//             minimumValue={0}
//             maximumValue={progress.duration}
//             thumbTintColor="#FFD369"
//             minimumTrackTintColor="#FFD369"
//             maximumTrackTintColor="#fff"
//             onSlidingComplete={async value => await TrackPlayer.seekTo(value) }
//           />
//           <View style={styles.progressLevelDuraiton}>
//             <Text style={styles.progressLabelText}>
//               {new Date(progress.position * 1000)
//                 .toLocaleTimeString()
//                 .substring(3)}
//             </Text>
//             <Text style={styles.progressLabelText}>
//               {new Date((progress.duration - progress.position) * 1000)
//                 .toLocaleTimeString()
//                 .substring(3)}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.musicControlsContainer}>
//           <TouchableOpacity onPress={previoustrack}>
//           <Image source={Images.icon_downloads} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => togglePlayBack(playBackState) }>
//           <Image source={Images.icon_downloads} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={nexttrack}>
//           <Image source={Images.icon_downloads} style={{ height: ScreenRatio(2.2), width: ScreenRatio(2.2), resizeMode: "contain", tintColor: Colors.gray005 }} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MusicPlayer;

// const {width, height} = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#222831',
//   },
//   mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mainWrapper: {
//     width: width,
//     height: width,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageWrapper: {
//     alignSelf: "center",
//     width: '90%',
//     height: '90%',
//     borderRadius: 15,
//   },
//   songText: {
//     marginTop:2,
//     height: 70
//   },
//   songContent: {
//     textAlign: 'center',
//     color: '#EEEEEE',
//   },
//   songTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   songArtist: {
//     fontSize: 16,
//     fontWeight: '300',
//   },
//   progressBar: {
//     alignSelf: "stretch",
//     marginTop: 40,
//     marginLeft:5,
//     marginRight:5
//   },
//   progressLevelDuraiton: {
//     width: width,
//     padding: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   progressLabelText: {
//     color: '#FFF',
//   },
//   musicControlsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//     width: '60%',
//   },
// });