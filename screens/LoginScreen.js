import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfyvB2xoVpsE97_e9KuAT7Vlo4wLi75-Q",
  authDomain: "mobilapp-500bc.firebaseapp.com",
  projectId: "mobilapp-500bc",
  storageBucket: "mobilapp-500bc.appspot.com",
  messagingSenderId: "1087611412764",
  appId: "1:1087611412764:web:94dd2699b4a108827b1ad9",
  measurementId: "G-ZHVDNNRWF6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const backgroundImage = {
  uri: 'https://www.international-stu.com/wp-content/uploads/2020/12/firat-universitesi-945x430_c.png',
};

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Kullanıcı bilgisi ekleme
      const usersCollectionRef = collection(db, 'kullanicilar');
      await addDoc(usersCollectionRef, {
        kullaniciAdi: username,
        sifre: password,
      });
      Alert.alert('Başarılı', 'Kullanıcı başarıyla kaydedildi!');
    } catch (error) {
      console.error("Kayıt hatası:", error);
      Alert.alert('Hata', 'Kayıt sırasında bir hata oluştu.');
    }
  };

  const handleLogin = async () => {
    try {
      // Sorgulama
      const usersCollectionRef = collection(db, 'kullanicilar');
      const q = query(usersCollectionRef, where("kullaniciAdi", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        if (userData.sifre === password) {
          console.log("Giriş başarılı!");
          navigation.navigate('Menu'); 
        } else {
          Alert.alert('Hata', 'Kullanıcı adı veya şifre yanlış!');
        }
      } else {
        Alert.alert('Hata', 'Kullanıcı bulunamadı!');
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      Alert.alert('Hata', 'Giriş yapılamadı. Lütfen tekrar deneyin.');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          placeholder="Kullanıcı Adı"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={[styles.input, styles.inputBackground]}
          placeholder="Şifre"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -50,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});