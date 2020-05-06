import React, {Component} from 'react';
import { connect } from 'react-redux';


class Counter_5_12 extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 15px"
  }


  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }


  doAction(e){
    if (e.shiftKey){
      return this.props.dispatch({ type:'DECREMENT' });
    } else {
      return this.props.dispatch({ type:'INCREMENT' });
    }
  }


  reset() {
    return this.props.dispatch({ type:'RESET' });
  }


  render () {
    return (
      <div>
        <p>{this.props.counter.message}: {this.props.counter.count}</p>
        <button style={this.style} onClick={this.doAction}>
          Count</button>
        <button style={this.style} onClick={this.reset}>
          Reset</button>
      </div>
    )
  }
}


Counter_5_12 = connect((state)=> state)(Counter_5_12);
export default Counter_5_12;