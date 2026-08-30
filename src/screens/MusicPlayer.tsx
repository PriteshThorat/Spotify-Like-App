import { useEffect, useState } from "react"
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native"
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from "react-native-track-player"
import playlistData from "../constants"
import SongInfo from "../components/SongInfo"
import SongSlider from "../components/SongSlider"
import ControlCenter from "../components/ControlCenter"

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>(null)
 
    const { width } = Dimensions.get('window')

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async(event) => {
        if (event.track) {
            setTrack(event.track)
        } else {
            setTrack(null)
        }
    })

    useEffect(() => {
        let mounted = true

        TrackPlayer.getActiveTrack().then((t) => {
            if (mounted) setTrack(t ?? playlistData[0])
        }).catch(() => {})
    
        return () => { mounted = false }
    }, [])

    const renderArtwork = () => {
        return (
            <View style={[styles.listArtWrapper, { width }]}>
                <View style={styles.albumContainer}>
                    {
                        track?.artwork && (
                            <Image
                                style={styles.albumArtImg}
                                source={{ uri: track.artwork }} />
                        )
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playlistData}
                renderItem={renderArtwork}
                showsHorizontalScrollIndicator={false}
                keyExtractor={song => song.id.toString()} />

            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23'
    },
    listArtWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    albumContainer: {
        width: 300,
        height: 300
    },
    albumArtImg: {
        width: '100%',
        height: '100%',
        borderRadius: 4
    }
})

export default MusicPlayer