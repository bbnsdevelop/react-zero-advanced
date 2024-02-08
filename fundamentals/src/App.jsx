import React from "react";

import "./App.css"

import FirstComponent from "./components/basic/FirstComponent";
import ComponentWithParam from "./components/basic/ComponentWithParam";
import FragmentsComponent from "./components/basic/FragmentsComponent";
import Calc from "./components/basic/CalcNumberRandomBetweenMinAndMax";
import Card from "./components/layout/Card";
import Parent from "./components/basic/component-structure/Parent";
import ParentByCloneOneElementPropsChildren from './components/basic/component-structure/ParentByCloneOneElementPropsChildren';
import ParentByCloneMultElementsPropsChildren from './components/basic/component-structure/ParentByCloneMultElementsPropsChildren';
import Child from "./components/basic/component-structure/Child";
import ListStudent from "./components/basic/ListStudent";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div className="App">
    
    <h1>Hello world react</h1>
    
    <div className="Cards">

      <Card title="List (loop)" color="#b3ffb3" textColor="#000000">
        <ListStudent></ListStudent>
      </Card>

      <Card title="Component parent child by clone multi elements" color="#ccccff" textColor="#000000">
        <ParentByCloneMultElementsPropsChildren familyName="Pereira">
          <Child name="Jessica" />
          <Child name="Elisabeth" />          
          <Child name="Maicon" />
          <Child name="Lincon" />
          <Child name="Marcelo" />
        </ParentByCloneMultElementsPropsChildren>
      </Card>
      
      <Card title="Component parent child by clone element" color="#ff66b3" textColor="#000000">
        <ParentByCloneOneElementPropsChildren familyName="Almeida">
          <Child name="Elisabeth" />
          {/* Error cause just support one child */}
          {/* <Child name="Jessica" /> */}
        </ParentByCloneOneElementPropsChildren>
      </Card>

      <Card title="Component parent child" color="#9999ff">
        <Parent names={['Jhon', 'Maria', 'Max', 'Carlos']} familyName="Silva"></Parent>
      </Card>
      
      <Card title="example of card" color="#080">
        <Calc min={2} max={50}>
          {" "}
        </Calc>
      </Card>

      <Card title="Fragment" color="#FA6900">
        <FragmentsComponent></FragmentsComponent>
      </Card>

      <Card title="Components with params" color="#FDF200" textColor="#000000">
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
