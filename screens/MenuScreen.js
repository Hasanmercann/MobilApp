import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  const masaSecSayfasi = () => {
    navigation.navigate('MasaSec');
  };

  const kitapSecSayfasi = () => {
    navigation.navigate('KitapSec');
  };

  const adminSayfasi = () => {
    navigation.navigate('Admin');
  };

  const hakkindaSayfasi = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menü</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Masa Seç"
          onPress={masaSecSayfasi}
        />
        <View style={{ marginVertical: 20 }} />
        <Button
          title="Kitap Seç"
          onPress={kitapSecSayfasi}
        />
        <View style={{ marginVertical: 20 }} />
        <Button
          title="Admin İşlemleri"
          onPress={adminSayfasi}
        />
        <View style={{ marginVertical: 20 }} />
        <Button
          title="Hakkımda"
          onPress={hakkindaSayfasi}
        />
      </View>
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
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
  },
});
