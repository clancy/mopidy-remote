import 'react-native';
import React from 'react';
import SettingsRow from '../SettingsRow';
import { shallow, mount, render } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('SettingsRow tests', () => {
  test('renders SettingsRow correctly', () => {
    const tree = renderer.create(
      <SettingsRow
        text={"Text"}
        onPress={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('SettingsRow onPress calls passed function', () => {
    var controlMock = jest.fn();
    const tree = shallow(
      <SettingsRow
        text={"Text"}
        onPress={() => { controlMock('onPress') }}
        />
    );

    tree.find('TouchableOpacity').simulate('press');

    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('onPress');
  });
});
