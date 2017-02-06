import {connect} from 'react-redux';
import MopidySettingsView from './MopidySettingsView';

const mapStateToProps = (state) => {
  return {
    hostname: state.mopidy.get('hostname'),
    port: state.mopidy.get('port')
  }
}

export default connect(mapStateToProps)(MopidySettingsView);
