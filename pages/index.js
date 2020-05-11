import React, {Component} from 'react';
import Link from 'next/link';
import '../i18n/i18n';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import Counter_5_12 from '../components/Counter_5_12';
import Clock from '../components/Clock';
import Districts from '../components/Districts';
import style from '../static/Style';
import Button from '../container/ConnectButton';
import ContactForm from '../components/ContactForm';

export default ()=> <div>
    {style}
    <h1>Next.js</h1>
    <p>Welcome to next.js!</p>
    <hr />
    <div>
      <Hello />
      <Clock />
      <Counter />
      <Counter_5_12 />
      <Districts />
      <Link as="/districts" href="/other">
        <button>Go to Other page &gt;&gt;</button>
      </Link>
      <Button />
      <ContactForm />
    </div>
  </div>

