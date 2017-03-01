import 'react-native';
import React from 'react';
import MopidySettingsView from '../MopidySettingsView';
import { shallow, mount, render } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('MopidySettingsView tests', () => {
  test('renders MopidySettingsView correctly', () => {
    const tree = renderer.create(
      <MopidySettingsView
        hostname={"192.168.1.1"}
        port={"6680"}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('MopidySettingsView connect calls connect function', () => {
    var controlMock = jest.fn();
    const tree = shallow(
      <MopidySettingsView
        hostname={"192.168.1.1"}
        port={"6680"}
        connect={(h, p) => { controlMock(h, p)}}
        />
    );

    tree.find('TouchableOpacity').simulate('press');
    
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('192.168.1.1');
    expect(controlMock.mock.calls[0][1]).toBe('6680');
  });
});
