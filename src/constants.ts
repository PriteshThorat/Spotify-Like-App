import { Track } from "react-native-track-player"

const playlistData: Track[] = [
    {
        id: 1,
        title: "Constellations",
        artist: "Jade LeMac",
        artwork: "https://i.scdn.co/image/ab67616d00001e029fae113e845ec51e07c8a266",
        url: require('../assets/audio/Constellations.mp3')
    },
    {
        id: 2,
        title: "On The Floor ft. Pitbull",
        artist: "Jennifer Lopez",
        artwork: "https://i.scdn.co/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48",
        url: require('../assets/audio/On_The_Floor.mp3')
    },
    {
        id: 3,
        title: "Show Me Love",
        artist: "Tyla",
        artwork: "https://i.scdn.co/image/ab67616d00001e020f0047bf025ef4edab5bf6c6",
        url: require('../assets/audio/Show_Me_Love.mp3')
    },
    {
        id: 4,
        title: "Moth To A Flame",
        artist: "Swedish House Mafia and The Weeknd",
        artwork: "https://i.scdn.co/image/ab67616d00001e02d82b40be0627a65b2d557847",
        url: require('../assets/audio/Moth_To_A_Flame.mp3')
    },
    {
        id: 5,
        title: "august",
        artist: "Taylor Swift",
        artwork: "https://i.scdn.co/image/ab67616d00001e0295f754318336a07e85ec59bc",
        url: require('../assets/audio/august.mp3')
    }
]

export default playlistData