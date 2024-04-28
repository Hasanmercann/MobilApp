import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth'; // Firebase Authentication modülünü içe aktarın

const backgroundImage = { uri: 'https://www.international-stu.com/wp-content/uploads/2020/12/firat-universitesi-945x430_c.png' };

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log('Kullanıcı girişi başarılı!');
        navigation.navigate('Menu'); // Başarılı giriş durumunda Menu ekranına yönlendirin
      })
      .catch(error => {
        // Hatalı giriş durumunda bir uyarı mesajı göster
        Alert.alert(
          "Giriş Hatası",
          "Hatalı kullanıcı adı veya şifre.",
          [
            { text: "Tamam", onPress: () => console.log("Tamam'a basıldı") }
          ]
        );
      });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});



// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

// const backgroundImage = { uri: 'https://www.international-stu.com/wp-content/uploads/2020/12/firat-universitesi-945x430_c.png' };

// export default function LoginScreen({ navigation }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Kullanıcı adı:', username);
//     console.log('Şifre:', password);

//     navigation.navigate('Menu');
//   };

//   return (
//     <ImageBackground source={backgroundImage} style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Giriş Yap</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Kullanıcı Adı"
//           onChangeText={setUsername}
//           value={username}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Şifre"
//           onChangeText={setPassword}
//           value={password}
//           secureTextEntry
//         />
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Giriş Yap</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });


