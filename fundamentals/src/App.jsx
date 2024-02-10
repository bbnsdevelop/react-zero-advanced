import React from "react";

import "./App.css"

import FirstComponent from "./components/basic/FirstComponent";
import ComponentWithParam from "./components/basic/ComponentWithParam";
import FragmentsComponent from "./components/basic/FragmentsComponent";
import Calc from "./components/basic/CalcNumberRandomBetweenMinAndMax";
import Card from "./components/layout/Card";
import Parent from "./components/component-structure/Parent";
import ParentByCloneOneElementPropsChildren from './components/component-structure/ParentByCloneOneElementPropsChildren';
import ParentByCloneMultElementsPropsChildren from './components/component-structure/ParentByCloneMultElementsPropsChildren';
import Child from "./components/component-structure/Child";
import ListStudent from "./components/loops/ListStudent";
import ProductComponent from "./components/loops/ProductComponent";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div className="App">
    
    <h1>Hello world react</h1>
    
    <div className="Cards">

      <Card title="Conditional redirect" color="#264d00" titleBold="bold">
        <EvenOrOdd number={26}></EvenOrOdd>
        <EvenOrOdd number={15}></EvenOrOdd>
        <EvenOrOdd number={8}></EvenOrOdd>
        <EvenOrOdd number={-1}></EvenOrOdd>
        <br/>
        <UserInfo user={{ name: "Jhon"}} />
        <UserInfo user={{email : "carlos@gmail.com"}} />
      </Card>

      <Card title="Table" color="#3399ff" textColor="#000000" titleBold="bold">
        <ProductComponent></ProductComponent>
      </Card>

      <Card title="List (loop)" color="#b3ffb3" textColor="#000000">
        <ListStudent></ListStudent>
      </Card>

      <Card title="Component parent child by clone multi elements" color="#ccccff" textColor="#000000" titleBold="bold">
        <ParentByCloneMultElementsPropsChildren familyName="Pereira">
          <Child name="Jessica" />
          <Child name="Elisabeth" />          
          <Child name="Maicon" />
          <Child name="Lincon" />
          <Child name="Marcelo" />
        </ParentByCloneMultElementsPropsChildren>
      </Card>
      
      <Card title="Component parent child by clone element" color="#ff66b3" textColor="#000000" titleBold="bold">
        <ParentByCloneOneElementPropsChildren familyName="Almeida">
          <Child name="Elisabeth" />
          {/* Error cause just support one child */}
          {/* <Child name="Jessica" /> */}
        </ParentByCloneOneElementPropsChildren>
      </Card>

      <Card title="Component parent child" color="#9999ff" titleBold="bold">
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
