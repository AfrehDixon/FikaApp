import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/fika5.png')}
          style={styles.logo}
        />
      </View>

      {/* Responsive Drinks at the bottom */}
      <View style={[styles.drinksContainer, { width: screenWidth }]}>
        <Image
          source={require('../assets/image/splashImage.png')}
          style={[styles.drinksImage, { width: screenWidth * 1.0, height: screenHeight * 0.25 }]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c3a1e', // Match the brown background color from the image
    justifyContent: 'space-between', // Pushes content to top and bottom
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular shape
  },
  drinksContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: -20, // Bottom padding for spacing
  },
  drinksImage: {
    // The size will now adjust based on screen dimensions
  },
});

export default SplashScreen;
