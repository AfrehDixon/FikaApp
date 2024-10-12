import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartDetailsComponent = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState('BIBIO');

  const sizes = [
    { name: 'BIBIO', price: 30 },
    { name: 'ELOLO', price: 45 },
    { name: 'KESE', price: 40 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5E3A16"
        translucent={true}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
      </View>
      
      <Image
        source={require('../../assets/image/coffee1.jpeg')}
        style={styles.productImage}
      />
      
      <View style={styles.contentContainer}>
        <Text style={styles.productTitle}>LOVE COCOA COFFEE CREAM LATTE</Text>
        
        <Text style={styles.sizeOptionTitle}>Size Option</Text>
        
        <View style={styles.sizeOptionsContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size.name}
              style={[
                styles.sizeOption,
                selectedSize === size.name && styles.selectedSizeOption,
              ]}
              onPress={() => setSelectedSize(size.name)}
            >
              <View style={styles.radioButton}>
                {selectedSize === size.name && <View style={styles.radioButtonInner} />}
              </View>
              <View style={styles.sizeInfo}>
                <Text style={styles.sizeName}>{size.name}</Text>
                <Text style={styles.sizePrice}>GHc {size.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>
          GHc {sizes.find(size => size.name === selectedSize)?.price || 0}
        </Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A2B20',
    marginBottom: 16,
  },
  sizeOptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A2B20',
    marginBottom: 12,
  },
  sizeOptionsContainer: {
    marginBottom: 16,
  },
  sizeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedSizeOption: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4A2B20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4A2B20',
  },
  sizeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  sizeName: {
    fontSize: 16,
    color: '#4A2B20',
  },
  sizePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A2B20',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A2B20',
  },
  addToCartButton: {
    backgroundColor: '#69332E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartDetailsComponent;