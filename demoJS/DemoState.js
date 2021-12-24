import React from "react";
class DemoState extends React.Component{
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
            console.log("callback v");
            console.log(a, b);
            console.log(this.state.count);
            console.log("callback ^");
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
        console.log("render");
        return (
            <div>
                <h2>set state</h2>
                <button onClick={this.handleClick}>changeState</button>
            </div>
        );
    }
}

export { DemoState };