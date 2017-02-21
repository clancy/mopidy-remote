import 'react-native';
import React from 'react';
import AlbumArt from '../AlbumArt';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('AlbumArt tests', () => {
  test('renders icon without albumArtUri', () => {
    const tree = renderer.create(
      <AlbumArt />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders image with albumArtUri', () => {
    const tree = renderer.create(
      <AlbumArt albumArtUri={'http://someimage.url'}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
