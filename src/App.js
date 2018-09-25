import React, { Component } from 'react';
import Searchbar from './Searchbar';
import PhotoList from './photoList';
import './index.css';
const API_key = '3101e9d526e1828d8802576d4ab7dbde44508f053f63888dc190da84eac04f22';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            photos: [],
            term : '',
            results : 0
         };
    }

    componentDidMount(){
        if (this.state.term !== ''){
            this.fetchPhotos(this.state.term);
        }
        else{
            this.fetchPhotos('piano');
        }
    }

    fetchPhotos = (term) => {
        fetch(`https://api.unsplash.com/search/photos?query=${term}&page=1&client_id=${API_key}`)
        .then(resp => {return resp.json() })
        .then(data => {
            this.setState({
                photos : data.results,
                results: data.total
            })
        })
    }

    changeSearchTermState = (event) => {
        this.setState({
            term : event.target.value
        }, () => {
            this.state.term === ""? this.fetchPhotos('happy') : this.fetchPhotos(this.state.term);
        });
    }

    render() {
        return (
            <div className="Container">
                <Searchbar changeSearchTermState={this.changeSearchTermState} value={this.state.term} results={this.state.results}/>
                <PhotoList photos={this.state.photos} searchText={this.state.term}/>
            </div>
        );
    }
}

export default App;