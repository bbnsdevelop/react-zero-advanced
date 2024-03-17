import React from "react";

export default props =>{
    const canReturn = props.test;
    if(canReturn){
        return props.children;
    }
    return false;
        

}

export const Else = propos => propos.children;
