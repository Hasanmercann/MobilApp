import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

export default function AdminScreen() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddUser = async () => {
    try {
      const usersCollectionRef = collection(db, 'kullanicilar');
      await addDoc(usersCollectionRef, {
        kullaniciAdi: newUsername,
        sifre: newPassword,
      });
      setNewUsername('');
      setNewPassword('');
      Alert.alert('Başarılı', 'Kullanıcı başarıyla eklendi!');
    } catch (error) {
      console.error("Kullanıcı ekleme hatası:", error);
      Alert.alert('Hata', 'Kullanıcı eklenirken bir hata oluştu.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Paneli</Text>

      <Text style={styles.subtitle}>Yeni Kullanıcı Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={setNewUsername}
        value={newUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={setNewPassword}
        value={newPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleAddUser}>
        <Text style={styles.buttonText}>Kullanıcı Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
