import React from "react"

let propsFunc = null;
const ComFunc = function(props) {
    if(!propsFunc){
        propsFunc = props;
    }else{
        console.log(propsFunc, props);
        console.log(propsFunc == props);
    }
    return (
        <div>{props.name}</div>
    );
}

let propsClass = null;
class ComClass extends React.Component {
    constructor(props) {
        super(props);
        propsClass = props;
    }
    componentDidUpdate() {
        console.log(propsClass, this.props);
        console.log(propsClass == this.props);
    }
    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}

class DemoClassFunc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "name",
            count: 1,
        };
    }

    changeName = () => {
        this.setState({ name: "Jack" });
    }

    handleClick = () => {
        this.setState({
            count: this.state.count ++,
        }, (a, b) => {
            console.log(a, b);
            console.log(this.state.count);
        });
    }

    componentDidMount(){
        setTimeout(() => {
            this.changeName();
        }, 3000);
    }

    componentDidUpdate() {
        console.log("did update");
    }

    render() {
        return (
            <div>
                <h2>func and class</h2>
                <ComFunc name={this.state.name} />
                <ComClass name={this.state.name} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export {
    DemoClassFunc
};