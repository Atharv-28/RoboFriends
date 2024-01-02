import React, { Component} from "react";
import Searchbox from "./Searchbox.js";
import Cardlist from './CardList.js';
import './page.css';
import Scroll from "./scroll.js";


class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response=> response.json())
        .then( users => this.setState({robots:users}));
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
                <Scroll>
                    <Cardlist robots={filteredRobots} />    
                </Scroll>
            </div>
        );
    }
}

export default App;