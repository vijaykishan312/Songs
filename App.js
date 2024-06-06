import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => {router.push({pathname : "/SongsList" , params : {destination : ""}})}}
          style={{ height: 55, width: 150, backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
          <Text>
            Hello
          </Text>
        </TouchableOpacity>
        {/* <Stack>
          <Stack.Screen name="SongsList" />
        </Stack> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
