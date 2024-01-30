import React from "react";

import "./index.css";

import FirstComponent from "./components/basic/FirstComponent";
import ComponentWithParam from "./components/basic/ComponentWithParam";
import FragmentsComponent from "./components/basic/FragmentsComponent";
import Calc from "./components/basic/CalcNumberRandomBetweenMinAndMax";
import Card from "./components/layout/Card";


// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div>
    <h1>Hello world react</h1>
    <Card title="example of card">
      <Calc min={2} max={50}> </Calc>
    </Card>
    
    <Card title="Fragment">
      <FragmentsComponent></FragmentsComponent> 
    </Card>

    <Card title="Components with params">
      <ComponentWithParam
        title="School results"
        student="Pedro"
        note={9.5}
      ></ComponentWithParam>
      
      <ComponentWithParam
        title="School results"
        student="Jhon"
        note={5}
      ></ComponentWithParam>
    </Card>
    
    <Card title="Fisrt component">
      <FirstComponent></FirstComponent>
    </Card>

    

  </div>
);
