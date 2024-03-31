import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AsdScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asd Screen</Text>
      <Text>Bu, Değişiklik bileşenidir.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
