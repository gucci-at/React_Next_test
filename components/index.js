import React, {Component} from 'react';
import Link from 'next/link';
import Counter from './Counter';
import Clock, {startClock} from './Clock';
import Districts from './Districts';
import style from '../static/Style';

class App extends Component{

  render () {
    const { Component, pageProps } = this.props;
    return (
      <div>
        {style}
        <h1>Next.js</h1>
        <p>Welcome to next.js!</p>
        <hr />
        <div>
          <Counter />
          <Clock {...pageProps}/>
          
          <Link as="/districts" href="/other">
            <button>Go to Other page &gt;&gt;</button>
          </Link>
        </div>
      </div>
    )
  };
}

export default App;