import React from "react";
import ReactDOM from "react-dom";

class Image extends React.Component{
    constructor(props){
        console.log(ReactDOM);
        super(props);
    }
    render() {
        console.log(this.props);
        const domTarget = this.props.nodeTarget.current;
        // return (
        //     <div>image</div>
        // );
        return (
            domTarget ? 
            ReactDOM.createPortal(
                <div>{this.props.data.value}</div>,
                domTarget
            ) : null
        );
    }
}

class DemoPractice2 extends React.Component{
    constructor(props){
        super(props);
        this.par1 = React.createRef();
        this.par2 = React.createRef();

        this.state = {
            isMounted: false,
            keysLeft: [],
        };
    }

    componentDidMount() {
        this.setState({ isMounted: true });
    }

    dataList = [
        { key: 1, value: "valu a" },
        { key: 2, value: "valu b" },
        { key: 3, value: "valu c" },
    ]

    render() {
        const { keysLeft, isMounted } = this.state;
        const imgList = this.dataList.map(data => {
            const isLeft = keysLeft.indexOf(Number(keysLeft)) >= 0;
            const nodeTarget = isLeft ? this.par1 : this.par2;
            return (
                <Image nodeTarget={nodeTarget} key={data.key} data={data} />
            );
        });
        return (
            <div>
                <div className="fake-wrapper">
                    {
                        isMounted ? imgList : null
                    }
                </div>
                <div ref={this.par1}>
                    <div>from</div>
                </div>
                <div ref={this.par2}>
                    <div>back</div>
                </div>
            </div>
        );
    }
}

export {DemoPractice2}