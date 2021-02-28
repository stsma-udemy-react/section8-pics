import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends  React.Component{

    onSearchSubmit(term){
        console.log(term + 'test')
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