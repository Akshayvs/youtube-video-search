import React from 'react';
import VideoListItem from './video_list_item';


//function based component
const VideoList = (props) => {
    const VideoList = props.videos.map((video) => {
        return <VideoListItem
            key={video.etag}
            onVideoSelect={props.onVideoSelect}
            video={video}/>;
    });

    return ( <ul className="list-group">{VideoList}</ul>
    );
};


export default VideoList;
