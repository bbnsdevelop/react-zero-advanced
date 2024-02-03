import React from "react";



const ParentByCloneOneElementPropsChildren = (props) =>{
    return (
        <div>
            {React.cloneElement(props.children, {...props})}            
        </div>
    );
}


export default ParentByCloneOneElementPropsChildren;
