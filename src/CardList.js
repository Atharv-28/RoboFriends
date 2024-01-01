import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return(
    <div className='cards'>
        {
            robots.map((user, i) => {
                return (
                    <Card 
                        key={i}
                        name={robots[i].username}
                        rname={robots[i].name}
                        em={robots[i].email}
                    />
                )
            })
        }
   </div>
    )
}




export default CardList;