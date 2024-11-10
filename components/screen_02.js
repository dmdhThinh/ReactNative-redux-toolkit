import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, selectProduct } from '../store/productSlice';
import { useNavigation } from '@react-navigation/native';

export default function Screen_02() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Pinarello',type: 'Roadbike', price: 1800, image: require('../assets/bifour_-removebg-preview.png') },
      { id: 2, name: 'Pina Mountai',type: 'Mountain', price: 1700, image: require('../assets/bifour_-removebg-preview.png') },
      { id: 3, name: 'Pina Mountai',type: 'Roadbike', price: 1700, image: require('../assets/bifour_-removebg-preview.png') },
      { id: 4, name: 'Pina Mountai',type: 'Mountain', price: 1700, image: require('../assets/bifour_-removebg-preview.png') },
      { id: 5, name: 'Pina Mountai',type: 'Roadbike', price: 1700, image: require('../assets/bifour_-removebg-preview.png') },
      { id: 6, name: 'Pina Mountai',type: 'Mountain', price: 1700, image: require('../assets/bifour_-removebg-preview.png') },
    ];
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  // Lọc sản phẩm dựa trên bộ lọc
  const filteredProducts = filter === 'All' ? products : products.filter(product => product.type === filter);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>

      {/* Bộ lọc */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'All' && styles.activeFilter]} 
          onPress={() => setFilter('All')}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'Roadbike' && styles.activeFilter]} 
          onPress={() => setFilter('Roadbike')}
        >
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'Mountain' && styles.activeFilter]} 
          onPress={() => setFilter('Mountain')}
        >
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Hiển thị sản phẩm */}
      <View style={styles.productGrid}>
        {filteredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.product}
            onPress={() => {
              dispatch(selectProduct(product));
              navigation.navigate('Screen_03');
            }}
          >
            <Image source={product.image} style={styles.image} />
            <Text>{product.name}</Text>
            <Text>${product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF3D00',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#FF3D00',
    borderColor: '#FF3D00',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    alignItems: 'center',
    marginBottom: 20,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
