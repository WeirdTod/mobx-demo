import React from "react";

class Parent extends React.Component{
    propParent="props from parent"
    render() {
        return (
            <div></div>
        );
    }
}

class DemoTest extends Parent{
    constructor(props) {
        super(props);
        console.log(this.propParent);
    }
    render() {
        const mapper = {
            a: () => <div>aaaa78</div>,
            b: () => <span></span>
        };
        const mapper2 = {
            a: 88,
            b: <div></div>
        };
        const com = () => <div />;
        const Com = () => <div />;
        return (
            <div>
                <mapper.a />
                {/* <mapper2.a /> */}
                {/* <mapper2.b /> */}
                {/* <com>dddd</com> */}
                <Com>dddd2</Com>
            </div>
        );
    }
}

export { DemoTest };