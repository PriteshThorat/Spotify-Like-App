# SpotifyLikeApp

A Spotify-style music player built with React Native. Dark-themed player screen with album artwork, playback controls, a progress slider, and background/lock-screen controls via `react-native-track-player`.

## Features

- 5-track bundled playlist with remote artwork (see `src/constants.ts`)
- Play / pause, skip next / previous
- Progress slider with elapsed and remaining time
- Queue repeat mode
- Background playback with remote (notification / headset) event handling
- Player initialization error handling with loading state

## Prerequisites

- Node.js >= 22.11.0
- React Native environment setup: [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)
- For iOS: Ruby bundler + CocoaPods

## Project Structure

```
index.js                  # Registers App + TrackPlayer playback service
musicPlayerServices.ts    # Player setup, track loading, remote event handlers
src/
  App.tsx                 # Bootstraps the player, loading/error screen
  constants.ts            # Playlist data (tracks, artwork, audio sources)
  assets/audio/           # Bundled mp3 files
  screens/
    MusicPlayer.tsx       # Player screen layout
  components/
    ControlCenter.tsx     # Previous / play-pause / next buttons
    SongSlider.tsx        # Progress slider + time labels
    SongInfo.tsx          # Title and artist display
patches/                  # patch-package fixes (react-native-track-player)
```

## How It Works

- `index.js` calls `TrackPlayer.registerPlaybackService(() => playbackService)` so playback and remote events keep running when the app is backgrounded.
- `src/App.tsx` calls `setupPlayer()` and `addTrack()` before rendering the player UI, showing a spinner (or an error message) until ready.
- `MusicPlayer` listens to `PlaybackActiveTrackChanged` to keep the displayed track in sync; `ControlCenter` and `SongSlider` read playback state and progress from TrackPlayer hooks.

## Troubleshooting

- **Player fails to initialize**: check the Metro console; `setupPlayer` logs the underlying error.
- **Native module errors after dependency updates**: rerun `npm install` (to reapply patches), then rebuild — on iOS also run `bundle exec pod install`.
- General issues: see the React Native [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

## License

Copyright (c) 2025 Pritesh Thorat. All Rights Reserved.

Source code is available for viewing for educational or evaluative purposes only; use, copying, modification, distribution, or deployment is not permitted without explicit written permission. See [LICENSE](LICENSE) for full terms.
