import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Screen_03() {
  const navigation = useNavigation();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) return null;

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>

      <Image source={selectedProduct.image} style={styles.image} />
      <Text style={styles.productName}>{selectedProduct.name}</Text>
      <Text style={styles.price}>15% OFF | ${selectedProduct.price}</Text>
      <Text style={styles.originalPrice}>${(selectedProduct.price * 1.15).toFixed(2)}</Text>
      <Text style={styles.description}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '45%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
