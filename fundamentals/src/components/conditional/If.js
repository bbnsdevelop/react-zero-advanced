import React from "react";

const If =  (props) => {
    const childrenElse = props.children.filter( c =>{
        return c.type && c.type.name === 'Else';
    })[0];

    const childrenFilter = props.children.filter(c =>{
        return c !== childrenElse;
    });

    const canReturn = props.test;
    if(canReturn){
        return childrenFilter
    }else if(childrenElse){
        return childrenElse;
    }
    return false;
        

}

export const Else = propos => propos.children;


export default If;