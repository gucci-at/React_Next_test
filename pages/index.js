import Link from 'next/link';
import Counter from '../components/Counter_5_12';
import style from '../static/Style';

export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js!</p>
  <hr />
  <div>
    <Counter />
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </div>
</div>