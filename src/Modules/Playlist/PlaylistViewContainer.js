import {connect} from 'react-redux';
import PlaylistView from './PlaylistView';
import * as MopidyActions from '../Mopidy/Actions'

const mapStateToProps = (state) => {
  let trackList = state.mopidy.get('trackList');
  return {
    trackList: trackList ? trackList.toJSON() : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
