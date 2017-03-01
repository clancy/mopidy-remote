import {connect} from 'react-redux';
import MopidySettingsView from './MopidySettingsView';
import * as MopidyActions from '../../Mopidy/Actions'

const mapStateToProps = (state) => {
  return {
    hostname: state.settings.getIn(['mopidy', 'hostname']),
    port: state.settings.getIn(['mopidy', 'port'])
  }
}

const mapDispatchToProps = (dispatch) => {
    return({
      connect: (hostname, port) => { dispatch(MopidyActions.connect(hostname, port)) },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MopidySettingsView);
