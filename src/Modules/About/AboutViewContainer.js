import {connect} from 'react-redux';``
import AboutView from './AboutView';

const mapStateToProps = (state) => {
  return {
    connected: state.about.get('connected'),
    currentTrack: state.about.get('currentTrack')
  }
}

export default connect(mapStateToProps)(AboutView);
