import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const apiKey = 'AIzaSyDYmazFPU7wfS9E98ASKbDX-MKQH0_nAdQ';

class App extends Component {
    // every time we want to use the state object, we will have to create a constructor function
    // and call the super constructor with the props object.
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('node.js')
    }

    videoSearch(term) {
        YTSearch({key: apiKey, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {

        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);
        return (<div>
            <h1>AK93</h1>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
        </div>);
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));