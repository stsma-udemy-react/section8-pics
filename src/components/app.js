import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends  React.Component{

    onSearchSubmit(term){

        console.log('test');
        axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization: 'Client-ID ROUoS9vxMqbYidFrh5NynVg944SVdXXDaByJzKPvsbY'
            } 
        })
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;