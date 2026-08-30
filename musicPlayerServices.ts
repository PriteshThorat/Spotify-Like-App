import TrackPlayer, { Event, RepeatMode } from "react-native-track-player"
import playlistData from "./src/constants"

const setupPlayer = async(): Promise<boolean> => {
    try {
        await TrackPlayer.setupPlayer()
        return true
    } catch (error) {
        console.error("[TrackPlayer] setupPlayer failed:", error)
        return false
    }
}

/*const setupPlayer = async() => {
    let isSetup = false

    try {
        await TrackPlayer.getActiveTrackIndex() // TODO: Diff from yt, original is deprecated

        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()

        isSetup = true
    } finally {
        return isSetup
    }
}*/

const addTrack = async() => {
    await TrackPlayer.add(playlistData)

    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

const playbackService = async() => {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}

export {
    playbackService,
    setupPlayer,
    addTrack
}