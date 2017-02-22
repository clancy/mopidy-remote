import 'react-native';
import React from 'react';
import TrackInfo from '../TrackInfo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('TrackInfo tests', () => {
  test('renders TrackInfo correctly with with inLibrary false', () => {
    const tree = renderer.create(
      <TrackInfo
        inLibrary={false}
        trackName={"Harry"}
        artists={[{name:"Sally"}]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders TrackInfo correctly with with inLibrary true', () => {
    const tree = renderer.create(
      <TrackInfo
        inLibrary={true}
        trackName={"Harry"}
        artists={[{name:"Sally"}]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders TrackInfo correctly with with multiple artists', () => {
    const tree = renderer.create(
      <TrackInfo
        inLibrary={true}
        trackName={"Harry"}
        artists={[{name:"Sally"}, {name:"Fred"}]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
