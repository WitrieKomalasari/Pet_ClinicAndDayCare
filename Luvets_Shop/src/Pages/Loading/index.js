import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import Video from 'react-native-video';
import {Paws} from '../../Assets';

const {width, height} = Dimensions.get('window');

const Loading = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Video
        source={Paws}
        // fullscreenOrientation="portrait"
        disableFocus={true}
        style={{
          flex: 1,
          //   backgroundColor: '#efc9d7',
        }}
        resizeMode="contain"
        repeat={true}
        playWhenInactive={false}
      />
    </SafeAreaView>
  );
};

export default Loading;
