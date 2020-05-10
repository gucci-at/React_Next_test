import React, {Component} from 'react';
import Link from 'next/link';
import Counter from '../components/Counter';
import Counter_5_12 from '../components/Counter_5_12';
import Clock from '../components/Clock';
import Districts from '../components/Districts';
import style from '../static/Style';
import Button from '../container/ConnectButton';

export default ()=> <div>
    {style}
    <h1>Next.js</h1>
    <p>Welcome to next.js!</p>
    <hr />
    <div>
      <Clock />
      <Counter />
      <Counter_5_12 />
      <Districts />
      <Link as="/districts" href="/other">
        <button>Go to Other page &gt;&gt;</button>
      </Link>
      <Button />
    </div>
  </div>

