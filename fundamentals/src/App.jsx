import React from "react";

import "./App.css"

import FirstComponent from "./components/basic/FirstComponent";
import ComponentWithParam from "./components/basic/ComponentWithParam";
import FragmentsComponent from "./components/basic/FragmentsComponent";
import Calc from "./components/basic/CalcNumberRandomBetweenMinAndMax";
import Card from "./components/layout/Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div className="App">
    
    <h1>Hello world react</h1>
    
    <div className="Cards">
      
      <Card title="example of card" color="#080">
        <Calc min={2} max={50}>
          {" "}
        </Calc>
      </Card>

      <Card title="Fragment" color="#FA6900">
        <FragmentsComponent></FragmentsComponent>
      </Card>

      <Card title="Components with params" color="#FDF200">
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

      <Card title="Fisrt component" color="#28ABE3">
        <FirstComponent></FirstComponent>
      </Card>
    </div>
    
  </div>
);
