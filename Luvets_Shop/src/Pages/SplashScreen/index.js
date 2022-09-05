import React, {useEffect} from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import Video from 'react-native-video';
import {LuvetsBlue} from '../../Assets';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Video
          source={LuvetsBlue}
          fullscreenOrientation="portrait"
          // fullscreen={true}
          // paused={paused}
          disableFocus={true}
          disableVolume
          disableFullscreen
          style={{
            width,
            height,
            backgroundColor: '#5b96a9',
          }}
          // repeat={true}
          playWhenInactive={false}
          onP
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
