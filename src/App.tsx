import { useEffect, useState } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { setupPlayer, addTrack } from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer'

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (
      async() => {
        setError(null)
        setIsPlayerReady(false)

        try {
          const isSetup = await setupPlayer()

          if (!isSetup) { 
            setError('Player failed to initialise. Check the Metro console.');
            return 
          }

          await addTrack()

          setIsPlayerReady(true)
        } catch (e) {
          setError(e instanceof Error ? e.message : String(e))
        }
        /*const isSetup = await setupPlayer()

        if (isSetup) {
          await addTrack()
        }

        setIsPlayerReady(isSetup)*/
      }
    )()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        {error && <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{error}</Text>}
      </SafeAreaView>
    )
  }

  return (
   
     
      <View style={styles.container}>
        <MusicPlayer />
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;