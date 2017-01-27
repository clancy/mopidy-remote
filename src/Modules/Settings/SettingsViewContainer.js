import {connect} from 'react-redux';``
import SettingsView from './SettingsView';

const mapStateToProps = (state) => {
  return {
    counter: state.home.get('value')
  }
}

export default connect(mapStateToProps)(SettingsView);
