import React, {useState} from 'react';
import {Dimensions, SafeAreaView, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Carousel1, Carousel2, kitten} from './../../Assets';
// import Carousel from 'react-native-reanimated-carousel';

const GetStarted = () => {
  const {width, height} = Dimensions.get('window');

  const [CarouselItems, setCarouselItems] = useState([
    {
      title: 'Clinic',
      image: {Carousel1},
      text: 'The animal care centers for consultancy with a Doctor make an easy and flexible',
    },
    {
      title: 'Pet Shop',
      image: {Carousel2},
      text: 'Pawrents, you can purchase pet food, pet toys etc for your lovely pets',
    },
    {
      title: 'Adopt Me',
      image: {kitten},
      text: 'Adopt me, get a new friend',
    },
  ]);

  const renderItems = ({item, idx}) => {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 30}}>{idx}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Hi...Pawrents</Text>
      <Text>Check me out</Text>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

export default GetStarted;
