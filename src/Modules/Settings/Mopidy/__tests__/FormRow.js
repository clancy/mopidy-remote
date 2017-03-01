import 'react-native';
import React from 'react';
import FormRow from '../FormRow';
import { shallow, mount, render } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('FormRow tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <FormRow
        label={ "label" }
        value={ "value" }
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('connects next control correctly', () => {
    var controlMock = jest.fn();
    const formRow = shallow(
      <FormRow
        label={ "label" }
        value={ "value" }
        onChangeText={() => {controlMock('onChangeText')}}
        />
    );
    formRow.findWhere(s => s.name() == 'TextInput').simulate('ChangeText', 'wenger');

    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('onChangeText');
  });
});
