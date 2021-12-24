import logo from './logo.svg';
import React from 'react';
import './App.css';
import { DemoState } from "./DemoState";
import { DemoClassFunc } from "./DemoClassFunc";
import { DemoClassFunc2 } from "./DemoClassFunc2";
import { DemoTest } from "./DemoTest";
import { DemoUpdate } from "./DemoUpdate";
import { DemoPractice } from "./DemoPractice";
import { DemoPractice2 } from "./DemoPractice2";

class Component extends React.Component{
  render() {
    return (
      <div></div>
    );
  }
}

class App extends React.PureComponent{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    // const root = document.getElementById('root');
    // console.log(root);
    // debugger;
  }
  render() {
    const jsx = (
      <div>
        <span>text</span>
      </div>
    );
    console.log(jsx);
    return (
      <div className="App">
        <h1 data-index={12} data="7\8">React</h1>
        {/* <DemoState /> */}
        {/* <DemoClassFunc /> */}
        {/* <DemoClassFunc2 /> */}
        {/* <DemoTest /> */}
        {/* <DemoUpdate /> */}
        <DemoPractice2 />
      </div>
    );
  }
}

export default App;
