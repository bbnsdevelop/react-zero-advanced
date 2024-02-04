import React, { cloneElement } from "react";



const ParentByCloneMultElementsPropsChildren = (props) =>{
    return (
        <div>
            {/* 
                {...props} this is spread operator javascript
                will pass all properties contained in props for the child
            
            */}
            {React.Children.map(props.children, (element) =>{
                return cloneElement(element, props);
            }) }            
        </div>
    );
}


export default ParentByCloneMultElementsPropsChildren;
