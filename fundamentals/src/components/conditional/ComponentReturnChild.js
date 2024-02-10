import React from "react";

const ComponentReturnChild = (props) =>{
    const canReturn = props.test;
    if(canReturn){
        return props.children;
    }
    return false;
        

}

export default ComponentReturnChild;