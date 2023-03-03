import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function About() {
  return (
    <Text style={styles.sectionDescription}>
      Charlotte Emma Aitchison (Cambridge, 2 de agosto de 1992), mais conhecida
      pelo seu nome artístico Charli XCX, é uma cantora, compositora e diretora
      britânica. Aos 14 anos de idade, Charli começou a gravar seu álbum de
      estreia. Deste, dois singles foram lançados sob a Orgy Music no final de
      2008: "!Franchesckaar!" e o Lado A duplo "Emelline"/"Art Bitch". O disco,
      14 - que continha a primeira composição citada - nunca foi comercialmente
      distribuído, embora tenham sido impressas várias cópias promocionais.
      Cinco anos mais tarde, foi lançado seu primeiro disco de estúdio oficial,
      True Romance, através das Asylum, Atlantic, IAMSOUND.
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 32,
    textAlign: 'justify',
  },
});
