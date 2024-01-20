import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import FirstComponent from './components/basic/FirstComponent';
import ComponentWithParam from './components/basic/ComponentWithParam';


const root = ReactDOM.createRoot(document.getElementById('root'));

const tag = <strong>Welcome</strong>
const message = 
  <div>
    <h1>Hello world react</h1>
    { tag }
    <FirstComponent></FirstComponent>
    <ComponentWithParam 
      title="School results"
      student="Pedro" 
      note={9.5}>        
    </ComponentWithParam>
    <ComponentWithParam 
      title="School results"
      student="Jhon" 
      note={5}>        
    </ComponentWithParam>

  </div>




root.render(message, root);
