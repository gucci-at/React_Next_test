import React , {Component} from 'react'
import { connect } from 'react-redux'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.timerAction = this.timerAction.bind(this);
    this.timerAction({ type: 'TICK', ts: Date.now()});
  }

  timerAction(action) {
    return this.props.dispatch(action);
  }

  componentDidMount(){
    setInterval(() => {
      this.timerAction({ type: 'TICK', ts: Date.now()});
    }, 1000);
  }

  render(){
    const {lastUpdate} = this.props.clock;
    return (
      <div>
        {format(new Date(lastUpdate))}
      </div>
    )
  }
}

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => n < 10 ? `0${n}` : n

export default connect((state) => state)(Clock);

