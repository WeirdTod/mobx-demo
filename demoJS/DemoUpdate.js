import React from "react";

class DemoUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                <h2>demo update</h2>
                <button onClick={this.handleClick}>change state</button>
                <ChildClassA />
            </div>
        );
    }
}

class ChildClassA extends React.Component{

    componentDidMount(){
        console.log("did mount ChildClassA");
        // const root = document.getElementById('root');
        // console.log(root);
        // debugger;
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate ChildClassA");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate ChildClassA");
    }

    render() {
        console.log(this.props);
        console.log("render ChildClassA");
        return (
            <div>
                ChildClassA
                <ChildClassAA />
            </div>
        );
    }
}

class ChildClassAA extends React.Component{

    componentDidMount(){
        console.log("did mount ChildClassAA");
        // const root = document.getElementById('root');
        // console.log(root);
        // debugger;
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate ChildClassAA");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate ChildClassAA");
    }

    render() {
        console.log("render ChildClassAA");
        return (
            <div>
                ChildClassAA
                <ChildClassAAA />
            </div>
        );
    }
}

class ChildClassAAA extends React.Component{

    componentDidMount(){
        console.log("did mount ChildClassAAA");
        // const root = document.getElementById('root');
        // console.log(root);
        // debugger;
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate ChildClassAAA");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate ChildClassAAA");
    }

    render() {
        console.log("render ChildClassAAA");
        return (
            <div>ChildClassAAA</div>
        );
    }
}

export { DemoUpdate };