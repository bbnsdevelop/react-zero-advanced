import React from 'react';


function firstComponent(){
    const msg = hello();
    return (
        <div>
            <h2>First component</h2>
            <p>{msg}</p>
        </div> 
    )
}

function hello() {
    return 'Hello world';
}


export default firstComponent;