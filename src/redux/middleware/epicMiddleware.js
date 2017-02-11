import { createEpicMiddleware, combineEpics } from 'redux-observable';
import MopidyEpics from '../../Modules/Mopidy/Epics';
import SpotifyEpics from '../../Modules/Spotify/Epics';

export default createEpicMiddleware(combineEpics(...MopidyEpics, ...SpotifyEpics));
