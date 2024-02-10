import React from "react";

export default props => {

    return (
        <div>
            <span>{props.name}</span> <strong> {props.familyName}</strong>
        </div>
    )
}