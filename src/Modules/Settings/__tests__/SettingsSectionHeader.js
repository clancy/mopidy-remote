import 'react-native';
import React from 'react';
import SettingsSectionHeader from '../SettingsSectionHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('SettingsSectionHeader tests', () => {
  test('renders SettingsSectionHeader correctly', () => {
    const tree = renderer.create(
      <SettingsSectionHeader
        text={"Text"} 
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
