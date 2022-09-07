import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Gap} from '../../Components/Atoms';
import {colors, fonts} from './../../Utils';

const GetStarted = () => {
  const {width, height} = Dimensions.get('window');
  const [slideIndex, setSlideIndex] = useState(0);
  const [CarouselItems, setCarouselItems] = useState([
    {
      id: 1,
      title: 'Clinic',
      image: require('./../../Assets/Icon/doctor.jpg'),
      text: 'The animal care centers for consultancy with a Doctor make an easy and flexible',
    },
    {
      id: 2,
      title: 'Pet Shop',
      image: require('./../../Assets/Dummy/coba/carousel2.jpg'),
      text: 'Pawrents, you can purchase pet food, pet toys etc for your lovely pets',
    },
    {
      id: 3,
      title: 'Adopt Me',
      image: require('./../../Assets/Dummy/coba/kitten.jpg'),
      text: 'Adopt me, get a new friend',
    },
  ]);

  const renderItems = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
        }}>
        <ImageBackground
          imageStyle={{
            // justifyContent: 'center',
            borderRadius: 30,
            marginBottom: 20,
          }}
          source={item.image}
          style={{
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: 20,
            paddingBottom: 25,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.txt}>{item.title}</Text>
          <Text
            style={{
              alignItems: 'center',
              fontSize: 30,
              color: colors.error,
              fontFamily: fonts.primary['900'],
            }}>
            {item.text}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <Text style={[styles.txt, {fontSize: 20}]}>Hi...Pawrents</Text>
        <Text style={[styles.txt, {fontSize: 20}]}>Check our service</Text>
      </View>
      <Carousel
        loop
        width={width}
        height={height - 50}
        autoPlay={true}
        // snapEnabled={true}
        data={CarouselItems}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 86,
        }}
        defaultIndex={0}
        onSnapToItem={index => setSlideIndex(index)}
        renderItem={renderItems}
        style={{
          height: height - 110,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          // backgroundColor: 'green',
        }}>
        {/*  {CarouselItems.length > 0 && */}
        {CarouselItems.map((_, i) => {
          // console.log('ininini', i);
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.dot,
                i === slideIndex
                  ? {backgroundColor: 'pink'}
                  : {backgroundColor: colors.primary},
              ]}
            />
          );
        })}
        {/*}*/}
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
    textTransform: 'uppercase',
    letterSpacing: 10,
    fontFamily: fonts.primary['900'],
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    marginHorizontal: 5,
  },
});
