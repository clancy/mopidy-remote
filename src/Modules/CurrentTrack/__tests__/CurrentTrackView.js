import 'react-native';
import React from 'react';
import CurrentTrackView from '../CurrentTrackView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('CurrentTrackView tests', () => {
  test('renders CurrentTrackView correctly', () => {
    const tree = renderer.create(
      <CurrentTrackView
        length={0}
        position={0}
        playing={false}
        shuffleEnabled={false}
        repeatEnabled={false}
        inLibrary={false}
        trackName={'trackname'}
        artists={[{name:'asd'}, {name:'fds'}]}
        albumArtUri= {'http://album.art/uri'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
