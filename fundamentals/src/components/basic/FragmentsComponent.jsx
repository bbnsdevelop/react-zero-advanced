import React from "react";

export default function frag(){
    /* has error because in react you need to involve when you have multiple tags, to solve this you should use
       1 - user React.Fragment
       2 - <></>
    return (
        <h1>Test 1 Fragment</h1>
        <h1>Test 2 Fragment</h1>
    );
    */

    /*
     Option 1
    */
     return (
        <React.Fragment>
            <h1>Test 1 Fragment</h1>
            <h1>Test 2 Fragment</h1>
        </React.Fragment>
    );


    /*
     In option 2 you can pass props in the component
    
    return (
        <>
        <h1>Test 1 Fragment</h1>
        <h1>Test 2 Fragment</h1>
        </>
    );

    */
}