import {connect} from 'react-redux';
import CurrentTrackView from './CurrentTrackView';

const mapStateToProps = (state) => {
  return {
    // albumName: state.currentTlTrack.getIn(['track', 'album', 'name']),
    // albumImageUri: state.currentTlTrack.getIn(['album', 'images']).first(),
    // artists: state.currentTlTrack.get('artists').toArray(),
    // length: state.currentTlTrack.get('length')
  }
}

export default connect(mapStateToProps)(CurrentTrackView);
