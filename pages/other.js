import Link from 'next/link';
import Districts from '../components/Districts';
import Clock from '../components/Clock';
import ViewApp from '../container/ViewApp';

const h1 = {
  fontSize:'72pt',
  fontWeight:'bold',
  textAlign:'right',
  letterSpacing:'-8px',
  color:'#f0f0f0',
  margin:'-40px 0px'
}

const p = {
  margin:'0px',
  color:'#666',
  fontSize:'16pt'
}

export default () =><div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>This is Other page.</p>
  <Link href="/">
    <a>&lt;&lt; Back to Index page</a>
  </Link>
  <hr/>
  <div>
   <Clock />
    <Districts />
    <ViewApp />
  </div>
</div>