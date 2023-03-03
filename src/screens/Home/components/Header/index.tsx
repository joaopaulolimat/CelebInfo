import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/charli.png')}
        style={styles.image}>
        <LinearGradient
          colors={['#FFFFFF00', '#FFFFFF']}
          style={styles.gradient}
        />
      </ImageBackground>
      <Image
        source={require('../../../../assets/images/charli_logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 4,
    alignItems: 'center',
  },
  image: {flex: 1, width: '100%', aspectRatio: 3 / 2},
  logo: {
    height: 50,
    aspectRatio: 5 / 2,
  },
  gradient: {
    flex: 1,
  },
});
