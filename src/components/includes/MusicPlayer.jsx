import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";

function MusicPlayer() {
    return (
        <AudioPlayer
            autoPlay="false"
            src={require(`../assets/music/Thenmozhi.mp3`)}
            onPlay={(e) => console.log("onPlay")}
            // other props here
        />
    );
}

export default MusicPlayer;
