import React from "react";

const VideoComponent = ({ src }) => {
    return (
        <video
            width="1296"
            height="640"
            muted
            autoPlay
            loop
            playsInline
            preload="none"
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoComponent;
