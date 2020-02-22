# Smart Pause Player

### Description
**Smart Pause Player** is a video player that smartly pauses when your not giving it enough attention, so that you don't miss a scene!

![App Intro](/views/imgs/home.PNG)

### Features
- Automated pause/play depending on user's eye contact with the screen.
- Both local and Youtube video support.
- Ability to pause/play from the controllers even while looking to the screen.
- Hoverable web cam view panel.

### Demo
![Demo](/views/imgs/screenrecord.gif)


### How to use
#### For end-users: 
An executable file *(.exe)* is available to download in the [dist folder](https://github.com/ahmedhammad97/Smart-Pause-Player/tree/master/dist/win-unpacked). If you are not running windows, you will need to produce the executable file suitable for your OS. Check the developers guide below.

#### For developers:
- Clone the project.
- Make sure you have Node.js installed (v12.16)+
- Install the dependencies `npm install` or `yarn install`.
- Use the command `npm start` or `yarn start` to run the project.
- Use the command `npm dist` or `yarn dist` to build for production.

### How it works
The player is completely based on *Plyr Media Player*, which is a simple, lightweight player that exposes video control api's. It also provides easy support for both, locally stored videos, and online one's (Youtube, Vimeo, etc.)

The smart pause part is built using the two libraries *Pico.js*, and *Lploc.js* for face detection, and real-time pupils localization, where the web cam feed is constantly processed to find the user's face, and then decide whether there is an eye contact with the screen or not.

### Technologies
- [Electron](https://www.electronjs.org/)
- [Electron Builder](https://github.com/electron-userland/electron-builder)
- [Plyr Media Player](https://github.com/sampotts/plyr)
- [Pico.js](https://github.com/tehnokv/picojs)
- [Lploc.js](https://github.com/tehnokv/picojs#lplocjs)
