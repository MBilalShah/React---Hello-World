import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet'
import Welcome from  './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
import ParentComponent from './ParentComponent'
function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Greet name="Bilal" heroName="Super Man">
      <p>Hello Bilal</p>
        </Greet>
      <Greet name="Ahmad" heroName="Batman">
      <p>Hello Bilal</p>
        </Greet>
      <Greet name="Abdullah" heroName="Iron Man">
      <p>Hello Bilal</p>
        </Greet>

      <Greet name="Saif" heroName="Flash">
        <p>Hello Bilal</p>
      </Greet> */}
      {/* <Welcome/>
      <Hello/> */}
    </div>
  );
}

export default App;
