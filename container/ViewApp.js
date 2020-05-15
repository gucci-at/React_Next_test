import {connect} from 'react-redux';
import ViewApp from '../components/ViewApp';

function mapStateToProps({person}) {
    console.log(person);
  return {person};
}

export default connect(mapStateToProps)(ViewApp);