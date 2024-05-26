import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>masaSecSayfasi</Text>
      <Text>Bu uygulama, React Native ile geliştirilmiştir.</Text>
      <Text>masaSecSayfasi daha fazla bilgi için ...</Text>
      <View style={styles.buttonGrid}>
        {Array.from({ length: 21 }).map((_, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{`masa${index + 1}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%', // Approx. 3 buttons per row with some spacing
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

