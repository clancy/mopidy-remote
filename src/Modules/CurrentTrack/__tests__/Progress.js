import 'react-native';
import React from 'react';
import Progress from '../Progress';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('Progress tests', () => {
  test('renders Progress correctly with 0 lenght', () => {
    const tree = renderer.create(
      <Progress
        length={0}
        position={0}
        playing={true}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Progress correctly with length and position', () => {
    const tree = renderer.create(
      <Progress
        length={4000}
        position={60000}
        playing={false}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
