  import React from 'react';
  import { View, Text, Button, StyleSheet } from 'react-native';

  export default function MenuScreen({ navigation }) {
    const handleButton1Press = () => {
      // Buton 1'e basıldığında yapılacak işlemler burada
      navigation.navigate('Asd'); // 'Asd' ekranına yönlendirme
    };

    const handleAboutPress = () => {
      // "Hakkımda" butonuna basıldığında navigasyon işlemi
      navigation.navigate('About'); // Burada 'About' ekranının adı kullanıldı, lütfen doğru adı kullanmaya dikkat edin
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Menü</Text>
        <Button
          title="Buton 1"
          onPress={handleButton1Press}
        />
        <Button
          title="Hakkımda"
          onPress={handleAboutPress}
        />
        <Button
          title="Geri Dön"
          onPress={() => navigation.goBack()}
        />
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
