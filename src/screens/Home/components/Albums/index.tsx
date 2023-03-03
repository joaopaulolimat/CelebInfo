import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface AlbumInfoProps {
  key: string;
  albumName: string;
  albumCover: any;
}

export default function Albums() {
  const albumInfo = ({item}: {item: AlbumInfoProps}) => (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={item.albumCover}
      />
      <Text>{item.albumName}</Text>
    </View>
  );

  const data: AlbumInfoProps[] = [
    {
      key: 'true_romance',
      albumCover: require('../../../../assets/images/true_romance.png'),
      albumName: 'True Romance (2013)',
    },
    {
      key: 'sucker',
      albumCover: require('../../../../assets/images/sucker.png'),
      albumName: 'Sucker (2014)',
    },
    {
      key: 'charli_album',
      albumCover: require('../../../../assets/images/charli_album.jpg'),
      albumName: 'Charli (2019)',
    },
    {
      key: 'how_im_feeling_now',
      albumCover: require('../../../../assets/images/how_im_feeling_now.png'),
      albumName: "How I'm Feeling Now (2020)",
    },
    {
      key: 'crash',
      albumCover: require('../../../../assets/images/crash.jpg'),
      albumName: 'Crash (2022)',
    },
    {
      key: 'heartbreaks_earthquakes',
      albumCover: require('../../../../assets/images/heartbreaks_earthquakes.jpeg'),
      albumName: 'Heartbreaks and Earthquakes (2012)',
    },
    {
      key: 'super_ultra',
      albumCover: require('../../../../assets/images/super_ultra.jpeg'),
      albumName: 'Super Ultra (2012)',
    },
    {
      key: 'number_1_angel',
      albumCover: require('../../../../assets/images/number_1_angel.png'),
      albumName: 'Number 1 Angel (2017)',
    },
    {
      key: 'pop_2',
      albumCover: require('../../../../assets/images/pop_2.png'),
      albumName: 'Pop 2 (2017)',
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item: AlbumInfoProps) => item.key}
      renderItem={albumInfo}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width - 96,
    alignItems: 'center',
    margin: 16,
  },
  image: {flex: 1, width: '100%'},
});
