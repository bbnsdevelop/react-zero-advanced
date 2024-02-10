import React from "react";

const EvenOrOdd = (props) =>{
    const isEven = props.number % 2 === 0;

    return (
        <div>
            <span>The number {props.number} is: </span>
            {isEven ? <span>Even</span>: <span>Odd</span>}            
        </div>
    );
}


export default EvenOrOdd;