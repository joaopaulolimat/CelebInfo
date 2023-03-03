import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface LinkButtonProps extends TouchableOpacityProps {
  linkName: string;
}
export default function LinkButton({linkName, onPress}: LinkButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{linkName}</Text>
      </View>
    </TouchableOpacity>
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
