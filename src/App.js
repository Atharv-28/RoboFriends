import React, { Component} from "react";
import Searchbox from "./Searchbox.js";
import Cardlist from './CardList.js'
import {robots} from './robots.js';
import './page.css'


class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearch = (event) =>{
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="page">
                <h1 className="title">RoboFriends</h1>
                <Searchbox searchChange={this.onSearch} />
                <Cardlist robots={filteredRobots} />    
            </div>
        );
    }
}

export default App;