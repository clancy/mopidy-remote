import { createEpicMiddleware, combineEpics } from 'redux-observable';
import MopidyEpics from '../../Modules/Mopidy/Epics';

export default createEpicMiddleware(combineEpics(...MopidyEpics));
