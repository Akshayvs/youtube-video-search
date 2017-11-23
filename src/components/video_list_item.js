import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;

    const uri = video.snippet.thumbnails.default.url;



    return (<li onClick={()=> onVideoSelect(video)} className="list-group-item col-md-4">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src = {uri} />
            </div>
            <div className="media-body">
                <div className="media-heading"> {video.snippet.title}</div>
            </div>
        </div>
    </li>);
};
export default VideoListItem;