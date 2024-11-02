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
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MenuItem = ({ item, navigation, onAddToCart }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => navigation.navigate('CartDetails', {
      item,
      sizes: item.sizes,
      onAddToCart: onAddToCart,
    })}
  >
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

  const handleAddToCart = (item, selectedSizes) => {
    const newItems = [...cartItems, ...selectedSizes.map(size => ({
      ...item,
      size: size.name,
      price: size.price,
    }))];
    setCartItems(newItems);
    updateCartTotal(newItems);
  };

  const updateCartTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  };

  const getImageSource = (id) => {
    const imageMap = {
      '1': require('../../assets/image/coffee1.jpeg'),
      '2': require('../../assets/image/fika3.png'),
      '3': require('../../assets/image/fikashelf2.png'),
      '4': require('../../assets/image/fikashelf3.png'),
      default: require('../../assets/image/coffee1.jpeg'),
    };
    return imageMap[id] || imageMap.default;
  };

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        const response = await fetch(`https://fiakapi-1.onrender.com/api/venues/${venueId}`);
        const responseData = await response.json();

        if (responseData && responseData.data && responseData.data.venue) {
          const { categories } = responseData.data.venue;

          const formattedSections = categories.map(category => ({
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
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5E3A16" translucent={true} hidden={true} />

      <ScrollView style={styles.content}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'visible' }}>
              {section.data.map((item) => (
                <MenuItem
                  key={item._id}
                  item={item}
                  navigation={navigation}
                  onAddToCart={handleAddToCart}
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
            onPress={() => navigation.navigate('checkout', { cartItems, cartTotal })}
          >
            <Text style={styles.cartDetails}>{cartItems.length}</Text>
            <Text style={styles.cartDetails}>View Cart</Text>
            <Text style={styles.cartDetails}>GHC {cartTotal}</Text>
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
  viewAll: { color: '#4CAF50', fontSize: 14 },
  menuItem: {
    width: SCREEN_WIDTH * 0.44,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItemImage: { width: '100%', height: SCREEN_WIDTH * 0.5, resizeMode: 'cover' },
  menuItemInfo: {
    padding: 10,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: 'bold', color: 'black',
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
