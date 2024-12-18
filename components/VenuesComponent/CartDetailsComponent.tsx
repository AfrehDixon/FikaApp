import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartDetailsComponent = ({ route, navigation }) => {
  const { item, sizes } = route.params;
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSizeSelection = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size);
      }
      return [...prevSelectedSizes, size];
    });
  };

  const handleAddToCart = async () => {
    try {
      // Get existing cart items
      const existingCartString = await AsyncStorage.getItem('cartItems');
      const existingCart = existingCartString ? JSON.parse(existingCartString) : [];

      // Create new cart items
      const newCartItems = selectedSizes.map((sizeName) => {
        const sizeData = sizes.find(size => size.name === sizeName);
        return {
          _id: `${item.id}-${sizeName}-${Date.now()}`, // Ensure unique ID
          name: item.name,
          description: item.description,
          size: sizeName,
          price: sizeData.price,
          quantity: 1,
          originalItemId: item.id,
        };
      });

      // Combine existing and new items
      const updatedCart = [...existingCart, ...newCartItems];

      // Save to AsyncStorage
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));

      // Navigate back
      navigation.goBack();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-sharp" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Image
        source={require('../../assets/image/cup2.jpeg')}
        style={styles.productImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.productTitle}>{item.name}</Text>

        <Text style={styles.sizeOptionTitle}>Size Option</Text>

        <View style={styles.sizeOptionsContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={`${size.name}-${size.price}`}
              style={[
                styles.sizeOption,
                selectedSizes.includes(size.name) && styles.selectedSizeOption,
              ]}
              onPress={() => toggleSizeSelection(size.name)}
            >
              <View style={styles.sizeInfo}>
                <Text style={styles.sizeName}>{size.name}</Text>
                <Text style={styles.sizePrice}>GHc {size.price}</Text>
              </View>
              {selectedSizes.includes(size.name) && (
                <View style={styles.checkBox}>
                  <View style={styles.checkBoxInner} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalPrice}>
          GHc {selectedSizes.reduce((total, sizeName) =>
            total + (sizes.find(size => size.name === sizeName)?.price || 0), 0)}
        </Text>
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            selectedSizes.length === 0 && { opacity: 0.7 }
          ]}
          onPress={handleAddToCart}
          disabled={selectedSizes.length === 0}
        >
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
  productImage: {
    width: '100%',
    height: 450,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    marginTop: 430,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 'auto',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  sizeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '45%',
    height: 80,
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  selectedSizeOption: {
    backgroundColor: '#F0F0F0',
    borderColor: '#4A2B20 !important',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#4A2B20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4A2B20',
  },
  sizeInfo: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
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
  disabledButton: {
    opacity: 0.6,
  },
});

export default CartDetailsComponent;
