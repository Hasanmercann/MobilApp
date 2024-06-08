import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDfyvB2xoVpsE97_e9KuAT7Vlo4wLi75-Q",
  authDomain: "mobilapp-500bc.firebaseapp.com",
  projectId: "mobilapp-500bc",
  storageBucket: "mobilapp-500bc.appspot.com",
  messagingSenderId: "1087611412764",
  appId: "1:1087611412764:web:94dd2699b4a108827b1ad9",
  measurementId: "G-ZHVDNNRWF6"
};

// Firebase uygulamasını başlatın
const app = initializeApp(firebaseConfig);

// Firestore örneğini alın
const db = getFirestore(app);

export default function AsdScreen() {
  const [kitaplar, setKitaplar] = useState([]);
  const [aramaMetni, setAramaMetni] = useState('');
  const [filtrelenmisKitaplar, setFiltrelenmisKitaplar] = useState([]);

  const kitaplariGetir = async () => {
    try {
      const kitaplarDocRef = doc(db, 'kitaplar', 'kitaplar');
      const docSnapshot = await getDoc(kitaplarDocRef);

      if (docSnapshot.exists()) {
        const kitaplarVerisi = docSnapshot.data();
        const kitaplarDizisi = Object.keys(kitaplarVerisi).map((kitapAdi) => ({
          id: kitapAdi,
          adi: kitapAdi,
          durum: kitaplarVerisi[kitapAdi],
        }));
        setKitaplar(kitaplarDizisi);
        setFiltrelenmisKitaplar(kitaplarDizisi);
      } else {
        console.log("Doküman bulunamadı.");
      }
    } catch (error) {
      console.error("Veritabanı hatası:", error);
    }
  };

  const kitapAra = (metin) => {
    setAramaMetni(metin);
    const filtrelenmis = kitaplar.filter((kitap) =>
      kitap.adi.toLowerCase().includes(metin.toLowerCase())
    );
    setFiltrelenmisKitaplar(filtrelenmis);
  };

  const kitabiKirala = async (kitapId) => {
    try {
      const kitaplarDocRef = doc(db, 'kitaplar', 'kitaplar');
      await updateDoc(kitaplarDocRef, {
        [kitapId]: false, 
      });

      const guncelKitaplar = kitaplar.map((k) =>
        k.id === kitapId ? { ...k, durum: false } : k
      );
      setKitaplar(guncelKitaplar);
      setFiltrelenmisKitaplar(guncelKitaplar);

      console.log('Kitap kiralandı!');
    } catch (error) {
      console.error('Kiralama hatası:', error);
    }
  };

  const kitabiBirak = async (kitapId) => {
    try {
      const kitaplarDocRef = doc(db, 'kitaplar', 'kitaplar');
      await updateDoc(kitaplarDocRef, {
        [kitapId]: true, // Kitabın durumunu "mevcut" olarak ayarla
      });

      const guncelKitaplar = kitaplar.map((k) =>
        k.id === kitapId ? { ...k, durum: true } : k
      );
      setKitaplar(guncelKitaplar);
      setFiltrelenmisKitaplar(guncelKitaplar);

      console.log('Kitap bırakıldı!');
    } catch (error) {
      console.error('Geri bırakma hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitap Seç</Text>
      <Button title="Kitapları Listele" onPress={kitaplariGetir} />

      <View style={styles.aramaContainer}>
        <TextInput
          style={styles.aramaKutusu}
          placeholder="Kitap adı girin..."
          onChangeText={kitapAra}
          value={aramaMetni}
        />
      </View>

      <ScrollView contentContainerStyle={styles.kitapListesi}>
        {filtrelenmisKitaplar.map((item) => (
          <View key={item.id} style={styles.kitapItem}>
            <Text style={styles.kitapAdi}>{item.adi}</Text>
            <Text style={styles.kitapDurumu}>
              Durum: {item.durum ? 'Mevcut' : 'Mevcut Değil'}
            </Text>
            <View style={styles.butonlar}>
              {item.durum ? (
                <TouchableOpacity
                  style={styles.kiralaButonu}
                  onPress={() => kitabiKirala(item.id)}
                >
                  <Text style={styles.butonYazisi}>Kirala</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.birakButonu}
                  onPress={() => kitabiBirak(item.id)}
                >
                  <Text style={styles.butonYazisi}>Bırak</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  aramaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  aramaKutusu: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  kitapListesi: {
    flexGrow: 1,
  },
  kitapItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  kitapAdi: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  kitapDurumu: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  butonlar: {
    flexDirection: 'row',
  },
  kiralaButonu: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  birakButonu: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  butonYazisi: {
    color: 'white',
    fontWeight: 'bold',
  },
});