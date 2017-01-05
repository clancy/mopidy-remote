import {connect} from 'react-redux';``
import HomeView from './HomeView';

const mapStateToProps = (state) => {
  return {
    counter: state.home.get('value')
  }
}

export default connect(mapStateToProps)(HomeView);
