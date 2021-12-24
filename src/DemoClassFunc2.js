import React from "react";

class DemoClassFunc2 extends React.Component{
    state = {
      user: 'Dan',
    };
    render() {
        return (
            <div>
                <h2>func and class 2</h2>
                <select
                value={this.state.user}
                onChange={e => this.setState({ user: e.target.value })}
                >
                <option value="Dan">Dan</option>
                <option value="Sophie">Sophie</option>
                <option value="Sunil">Sunil</option>
                </select>
                <p>
                    <ComFunc2 user={this.state.user} />
                    <b> (function)</b>
                </p>
                <p>
                    <ComClass2 user={this.state.user} />
                    <b> (class)</b>
                </p>
            </div>
        );
    }
}

function ComFunc2(props) {
    const showMessage = () => {
      alert('Followed ' + props.user);
    };
  
    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };
  
    return (
      <button onClick={handleClick}>Follow</button>
    );
}

class ComClass2 extends React.Component{
    showMessage = () => {
      alert('Followed ' + this.props.user);
    };
  
    handleClick = () => {
      setTimeout(this.showMessage, 3000);
    };
  
    render() {
      return <button onClick={this.handleClick}>Follow</button>;
    }
}

export { DemoClassFunc2 };