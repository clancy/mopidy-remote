import 'react-native';
import React from 'react';
import Controls from '../Controls';
import { shallow, mount, render } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Controls tests', () => {
  test('renders disabled icons correctly', () => {
    const tree = renderer.create(
      <Controls
        previous={() => {}}
        next={() => {}}
        shuffle={() => {}}
        repeat={() => {}}
        playPause={() => {}}
        playing={false}
        shuffleEnabled={false}
        repeatEnabled={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders enabled icons correctly', () => {
    const tree = renderer.create(
      <Controls
        previous={() => {}}
        next={() => {}}
        shuffle={() => {}}
        repeat={() => {}}
        playPause={() => {}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('connects shuffle control correctly', () => {
    var controlMock = jest.fn();
    const controls = shallow(
      <Controls
        previous={() => {controlMock('previous')}}
        next={() => {controlMock('next')}}
        shuffle={() => {controlMock('shuffle')}}
        repeat={() => {controlMock('repeat')}}
        playPause={() => {controlMock('playPause')}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    );

    let shuffleButton = controls.findWhere(s => s.name() == 'TouchableOpacity' && s.children().at(0).prop('name') == 'shuffle').at(0);
    shuffleButton.simulate('press');
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('shuffle');
  });

  test('connects previous control correctly', () => {
    var controlMock = jest.fn();
    const controls = shallow(
      <Controls
        previous={() => {controlMock('previous')}}
        next={() => {controlMock('next')}}
        shuffle={() => {controlMock('shuffle')}}
        repeat={() => {controlMock('repeat')}}
        playPause={() => {controlMock('playPause')}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    );

    let previousButton = controls.findWhere(s => s.name() == 'TouchableOpacity' && s.children().at(0).prop('name') == 'skip-previous').at(0);
    previousButton.simulate('press');
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('previous');
  });

  test('connects next control correctly', () => {
    var controlMock = jest.fn();
    const controls = shallow(
      <Controls
        previous={() => {controlMock('previous')}}
        next={() => {controlMock('next')}}
        shuffle={() => {controlMock('shuffle')}}
        repeat={() => {controlMock('repeat')}}
        playPause={() => {controlMock('playPause')}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    );

    let nextButton = controls.findWhere(s => s.name() == 'TouchableOpacity' && s.children().at(0).prop('name') == 'skip-next').at(0);
    nextButton.simulate('press');
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('next');
  });

  test('connects repeat control correctly', () => {
    var controlMock = jest.fn();
    const controls = shallow(
      <Controls
        previous={() => {controlMock('previous')}}
        next={() => {controlMock('next')}}
        shuffle={() => {controlMock('shuffle')}}
        repeat={() => {controlMock('repeat')}}
        playPause={() => {controlMock('playPause')}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    );

    let repeatButton = controls.findWhere(s => s.name() == 'TouchableOpacity' && s.children().at(0).prop('name') == 'repeat').at(0);
    repeatButton.simulate('press');
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('repeat');
  });

  test('connects playPause control correctly', () => {
    var controlMock = jest.fn();
    const controls = shallow(
      <Controls
        previous={() => {controlMock('previous')}}
        next={() => {controlMock('next')}}
        shuffle={() => {controlMock('shuffle')}}
        repeat={() => {controlMock('repeat')}}
        playPause={() => {controlMock('playPause')}}
        playing={true}
        shuffleEnabled={true}
        repeatEnabled={true} />
    );

    let playPauseButton = controls.findWhere(s => s.name() == 'TouchableOpacity' && s.children().at(0).prop('name') == 'pause').at(0);
    playPauseButton.simulate('press');
    expect(controlMock.mock.calls.length).toBe(1);
    expect(controlMock.mock.calls[0][0]).toBe('playPause');
  });
});
