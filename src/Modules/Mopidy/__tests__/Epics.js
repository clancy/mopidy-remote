import * as MopidyEpics from '../Epics'
import * as MopidyActions from '../Actions'
import testEpic from '../../../../test_utils/testEpic'
import * as ReduxPersistConstants from 'redux-persist/constants'
import { Map } from 'immutable'


describe('Epics', () => {
  describe('connectedEpic', () => {
    it('Dispatches getInitialState action', (done) => {
      const action = { type: MopidyActions.MOPIDY_CONNECTED };
      const expectedActions = [{ type: MopidyActions.MOPIDY_GET_INITIAL_STATE }]

      testEpic(MopidyEpics.connectedEpic, expectedActions.length, action, (actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });

  describe('rehydrateEpic', () => {

    it('Dispatches connect action with hostname port payload', (done) => {
      const action = {
        type: ReduxPersistConstants.REHYDRATE,
        payload: {
          settings: Map({
            mopidy: Map({
              hostname: '192.168.1.20',
              port: '6680'
            })
          })
        }
      };
      const expectedActions = [{
        type: MopidyActions.MOPIDY_CONNECT,
        payload: {
          hostname: '192.168.1.20',
          port: '6680'
        }
      }]

      testEpic(MopidyEpics.rehydrateEpic, expectedActions.length, action, (actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });

  describe('mapReceiveTrackEpic', () => {
    it('Dispatches get album art if uri not found in image cache', (done) => {
      const action = {
        type: MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK,
        payload: {
          uri: 'spotifyId1'
        }
      };

      let state = {
        mopidy: Map({
          image_index: Map({
            'spotifyId99': 'http://someimage.uri/im.jpg'
          })
        })
      };
      const expectedActions = [{
        type: MopidyActions.MOPIDY_GET_ALBUM_ART,
        payload: [
          'spotifyId1'
        ]
      }]

      testEpic(MopidyEpics.mapReceiveTrackEpic, expectedActions.length, action, (actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      }, state);
    });
  });

  describe('connectedEpic', () => {
    it('Dispatches getInitialState action', (done) => {
      const action = { type: MopidyActions.MOPIDY_CONNECTED };
      const expectedActions = [{ type: MopidyActions.MOPIDY_GET_INITIAL_STATE }]

      testEpic(MopidyEpics.connectedEpic, expectedActions.length, action, (actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
