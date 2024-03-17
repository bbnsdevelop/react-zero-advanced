import React from "react";
import DirectChildren from "./DirectChildren";

export default props =>{
    return (
        <div>
            <DirectChildren text="Son" number={1} bool = {true} ></DirectChildren>
        </div>
    );
}