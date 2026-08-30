import { useEffect, useState } from "react"
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { setupPlayer, addTrack } from "../musicPlayerServices"
import MusicPlayer from "./screens/MusicPlayer"

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  useEffect(() => {
    (
      async() => {
        const isSetup = await setupPlayer()

        if (isSetup) {
          await addTrack()
        }

        setIsPlayerReady(isSetup)
      }
    )()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <MusicPlayer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App