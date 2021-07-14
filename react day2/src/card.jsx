import React from "react" ;
import Card2 from "./card2";
class Componentcard extends React.Component{
    render(){
        return (
            <div>
             <div className='cardcss'>   
            <h1 className="headingline">Calories read only</h1>
            <Card2 food="Burger" calories="295"/>
            <Card2 food="Pizza" calories="266"/>
            <Card2 food="Banana" calories="89"/>
            <Card2 food="Apple" calories="52"/>
            </div>
            </div>
        );
        
    }
}

export default Componentcard;