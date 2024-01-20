import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import FirstComponent from './components/basic/FirstComponent'


const root = ReactDOM.createRoot(document.getElementById('root'));

const tag = <strong>Welcome</strong>
const message = 
  <div>
    <h1>Hello world react</h1>
    { tag }
    <FirstComponent></FirstComponent>
  </div>




root.render(message, root);
