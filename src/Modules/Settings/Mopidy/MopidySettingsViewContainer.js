import {connect} from 'react-redux';
import MopidySettingsView from './MopidySettingsView';

const mapStateToProps = (state) => {
  return {
    hostname: state.settings.getIn(['mopidy', 'hostname']),
    port: state.settings.getIn(['mopidy', 'port'])
  }
}

export default connect(mapStateToProps)(MopidySettingsView);
