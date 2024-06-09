import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  const [buttonsSelected, setButtonsSelected] = useState(
    Array(21).fill(false)
  );

  const handleButtonPress = (index) => {
    const updatedButtons = [...buttonsSelected];
    updatedButtons[index] = !updatedButtons[index];
    setButtonsSelected(updatedButtons);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lütfen Masanızı Seçiniz</Text>
      <View style={styles.buttonGrid}>
        {buttonsSelected.map((isSelected, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, isSelected && styles.selectedButton]}
            onPress={() => handleButtonPress(index)}
          >
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: 'red', 
  },
});
