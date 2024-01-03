import React, { useState, useEffect } from "react";
import Searchbox from "./Searchbox.js";
import Cardlist from './CardList.js';
import './page.css';
import Scroll from "./scroll.js";


const App = () => {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response=> response.json())
        .then( users => {setRobots(users)});
    },[])

    const onSearch = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
        <div className="page">
            <h1 className="title">RoboFriends</h1>
            <Searchbox searchChange={onSearch} />
            <Scroll>
                <Cardlist robots={filteredRobots} />
            </Scroll>
        </div>
    );
}

export default App;