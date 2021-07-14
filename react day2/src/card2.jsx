import React from "react";
class Card2 extends React.Component{
    render(){
        return(
            <div className='separateblock'>
             <h1>{this.props.food}</h1>
             <h2>you have consumed {this.props.calories} calories</h2>
             </div>
        )
    }
}
export default Card2;