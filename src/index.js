//index is the root of the application
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
//Npm packages to fetch comments, not currently used. YTComments is hte one I was trying to create
//import YTAPI from 'youtube-api';
//import YTComments from "/Users/zonev/Desktop/Projects/Javascript/npm/youtube-api-comments";

//The API key allows us to make requests to youtube 
const API_KEY = 'AIzaSyDmTNUsM0dyOnRbbe5dbfjoy-hk8MHjMgA';


//Create a new component tha produces some HTML. 
class App extends Component {
    constructor(props){
        super(props);

        this.state= {videos:[]};

        YTSearch({key:API_KEY, term:'asmr'},(data)=>{
        this.setState({videos: data});
        });
    }

    render(){
        return (
        <div>
            <SearchBar />
            {/* prop videos */}
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}
//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));