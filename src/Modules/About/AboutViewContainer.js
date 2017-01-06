import {connect} from 'react-redux';``
import AboutView from './AboutView';

const mapStateToProps = (state) => {
  return {
    isPinging: state.about.get('isPinging')
  }
}

export default connect(mapStateToProps)(AboutView);
