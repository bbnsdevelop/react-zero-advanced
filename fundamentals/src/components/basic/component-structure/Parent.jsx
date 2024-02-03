import React from "react";

import Child from "./Child"; 


const Parent = (props) =>{
    const children = props.names.map(name => showFamily(name, props.familyName));
    return (
        <div>
            {children}
        </div>
    );
}

function showFamily(name, familyName) {
    return (<Child name={name} familyName={familyName} />);
}


export default Parent;
