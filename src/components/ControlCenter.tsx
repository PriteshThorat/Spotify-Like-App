import { Pressable, StyleSheet, View } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { SkipForward, SkipBack, Pause, Play } from 'lucide-react-native'

const ControlCenter = () => {
    const playbackState = usePlaybackState()

    const skipToNext = async() => {
        await TrackPlayer.skipToNext()
    }

    const skipToPrevious = async() => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async(playback: State | undefined) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex()

        if (currentTrack !== null) {
            if (
                playback === State.Paused ||
                playback === State.Ready
            ) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    return (
        <View style={styles.container} >
            <Pressable onPress={skipToPrevious} >
                <SkipBack 
                    color="#FFFFFF"
                    size={40} />
            </Pressable>

            <Pressable onPress={() => togglePlayback(playbackState.state)} >
                {
                    playbackState.state === State.Playing ? (
                        <Pause 
                            color="#FFFFFF"
                            size={40} />
                    ) : (
                        <Play 
                            color="#FFFFFF"
                            size={40} />
                    )
                }
            </Pressable>

            <Pressable onPress={skipToNext} >
                <SkipForward 
                    color="#FFFFFF"
                    size={40} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#FFFFFF'
    },
    playButton: {
        marginHorizontal: 24
    }
})

export default ControlCenter