import React from "react";



const ParentByCloneOneElementPropsChildren = (props) =>{
    return (
        <div>
            {/* 
                {...props} this is spread operator javascript
                will pass all properties contained in props for the child
            
            */}
            {React.cloneElement(props.children, {...props})}            
        </div>
    );
}


export default ParentByCloneOneElementPropsChildren;
