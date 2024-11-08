import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MenuItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate('CartDetails', {
        item,
        sizes: item.sizes,
      })
    }>
    <Image source={item.imageSource} style={styles.menuItemImage} />
    <View style={styles.menuItemInfo}>
      <Text style={styles.menuItemTitle}>{item.name}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
    </View>
    <TouchableOpacity style={styles.addButton}>
      <Image source={require('../../assets/image/lock.png')} />
    </TouchableOpacity>
  </TouchableOpacity>
);

const VenueDetailsComponent = ({ route }) => {
  const navigation = useNavigation();
  const { venueId } = route.params;
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const saveCartToStorage = async (items) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  const loadCartFromStorage = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cartItems');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        setCartItems(items);
        updateCartTotal(items);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  // Modified handleAddToCart to handle single items with unique IDs
  const handleAddToCart = (newItem) => {
    // Add the new item to cart
    const updatedItems = [...cartItems, newItem];
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
    saveCartToStorage(updatedItems);
  };

  const handleRemoveFromCart = async (itemId) => {
    const updatedItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
    await saveCartToStorage(updatedItems);
  };

  const updateCartTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    setCartTotal(total);
  };

  // Rest of your existing code for fetching venue data and images...
  const getImageSource = (id) => {
    const imageMap = {
      '1': require('../../assets/image/cup2.jpeg'),
      '2': require('../../assets/image/cup2.jpeg'),
      '3': require('../../assets/image/cup3.jpeg'),
      '4': require('../../assets/image/cup4.jpeg'),
      default: require('../../assets/image/cup4.jpeg'),
    };
    return imageMap[id] || imageMap.default;
  };

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        const response = await fetch(
          `https://fiakapi-1.onrender.com/api/venues/${venueId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const responseData = await response.json();

        if (responseData && responseData.categories) {
          const formattedSections = responseData.categories.map(category => ({
            title: category.name,
            data: category.items.map(item => ({
              ...item,
              imageSource: getImageSource(item._id),
            })),
          }));

          setSections(formattedSections);
        }
      } catch (error) {
        console.error('Error fetching venue data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenueData();

    const unsubscribe = navigation.addListener('focus', () => {
      loadCartFromStorage();
    });

    return unsubscribe;

  }, [venueId][navigation]);

  useFocusEffect(
    React.useCallback(() => {
      loadCartFromStorage();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5E3A16"
        translucent={true}
      />

      <ScrollView style={styles.content}>
        {sections.map(section => (
          <View key={section.title} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ overflow: 'visible' }}>
              {section.data.map((item) => (
                <MenuItem
                  key={item._id}
                  item={item}
                  navigation={navigation}
                />
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      {cartItems.length > 0 ? (
        <View style={styles.cart1}>
          <TouchableOpacity
            style={styles.cartCard}
            onPress={() => {
              navigation.navigate('checkout', {
                cartItems,
                cartTotal,
              });
            }}>
            <Text style={styles.cartDetails}>{cartItems.length} Items</Text>
            <Text style={styles.cartDetails}>View Cart</Text>
            <Text style={styles.cartDetails}>GHC {cartTotal.toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.cart}>
          <Icon name="cart-outline" size={24} color="white" />
          <Text style={styles.cartText}>Your Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAll: {
    color: '#4CAF50',
    fontSize: 14
  },
  menuItem: {
    width: SCREEN_WIDTH * 0.44,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItemImage: {
    width: '100%',
    height: SCREEN_WIDTH * 0.5,
    resizeMode: 'cover',
  },
  menuItemInfo: {
    padding: 10,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 12,
    color: '#626262',
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B3E26',
    padding: 15,
    width: '100%',
  },
  cartText: { color: 'white', fontWeight: 'bold', marginLeft: 10 },
  cart1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B3E26',
    padding: 15,
  },
  cartCard: {
    width: SCREEN_WIDTH * 0.9,
    maxWidth: 350,
    height: 58,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cartDetails: {
    fontSize: 18,
    color: '#6B3E26',
  },
});

export default VenueDetailsComponent;