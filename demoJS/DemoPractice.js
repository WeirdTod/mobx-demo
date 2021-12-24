import React from "react";

class Item extends React.Component{
    constructor(props){
        super(props);
        console.log("initial");
    }

    componentWillUnmount(){
        console.log("Item will unmount");
    }

    handleClick = () => {
        this.props.func(this.props.data.key);
    }

    render() {
        const { data } = this.props;
        return (
            <div style={{width: 100, background: "#ccc"}} onClick={this.handleClick}>
                <span>{data.text}</span>
            </div>
        );
    }
}

class DemoPractice extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            keys: [],
        };
    }

    addKeys = (key) => {
        const { keys } = this.state;
        const keysNew = [...keys, Number(key)];
        this.setState({
            keys: keysNew,
        });
    }

    render() {
        const { keys } = this.state;
        const dataList = [
            { key: 1, text: "a", },
            { key: 2, text: "b", },
            { key: 3, text: "c", },
        ];
        
        
        const list = dataList.map(data => {
            return <Item key={data.key} data={data} func={this.addKeys} />
        });
        const [a, b, c] = list;
        const isAddA = keys.indexOf(Number(a.key)) >= 0;
        console.log(isAddA);
        return (
            <div style={{textAlign: "left"}}>
                <div>
                    left:{isAddA ? a : null}
                </div>
                <div>
                    right{!isAddA ? a : null}
                </div>
            </div>
        );
    }
}

export { DemoPractice }