import { useEffect, useState } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
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
      }
    )()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loading}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color="#1DB954" />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <MusicPlayer />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23'
  },
  container: {
    flex: 1,
    backgroundColor: '#001d23'
  },
  errorText: {
    marginTop: 16,
    paddingHorizontal: 24,
    color: '#ff5252',
    textAlign: 'center'
  }
})

export default App;