import React from "react";

class RefWrapper extends React.Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class DemoRefs extends React.Component{
    constructor(props){
        super(props);

        this.divRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.divRef.current);
    }

    render() {
        return (
            <div>
                <RefWrapper>
                    <div ref={this.divRef}>dddd</div>
                </RefWrapper>
            </div>
        );
    }
}

export { DemoRefs }