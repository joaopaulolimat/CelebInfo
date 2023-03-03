import React, {useState} from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {LinkButton} from '../../components';

import {About, Albums, Header} from './components';

export default function Home() {
  // Professor, fiz dessa forma apenas para focar no uso de estados no lugar de focar em navegação

  const [menuControl, setMenuControl] = useState(true);
  const [scrollLayoutHeight, setScrollLayoutHeight] = useState(0);

  const handleScrollContentLayout = (e: LayoutChangeEvent) => {
    const {height} = e.nativeEvent.layout;
    setScrollLayoutHeight(height);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View onLayout={handleScrollContentLayout}>
        <Header />
        <View style={styles.container}>
          <LinkButton
            linkName={menuControl ? '🩸 álbuns 🩸' : '🩸 home 🩸'}
            onPress={() => setMenuControl(state => !state)}
          />
        </View>
      </View>

      <View
        style={[
          styles.scrollView,
          {height: Dimensions.get('window').height - scrollLayoutHeight - 20},
        ]}>
        {menuControl ? (
          <ScrollView>
            <About />
          </ScrollView>
        ) : (
          <Albums />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {margin: 32},
  scrollView: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 32,
  },
  button: {alignItems: 'center'},
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
    textDecorationLine: 'underline',
  },
});
