import React from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';

const SplashScreen = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5E3A16" barStyle="light-content" />
      {/* Centered Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/daddylogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Responsive Drinks at the bottom */}
      <View style={[styles.drinksContainer, { width: screenWidth }]}>
        <Image
          source={require('../assets/image/daddybackground.png')}
          style={[
            styles.drinksImage,
            { width: screenWidth * 1.0, height: screenHeight * 0.25 },
          ]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E3A16',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  drinksContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0, // Changed from paddingBottom: -20 to avoid negative padding
  },
  drinksImage: {
    // Size is dynamically set through inline styles
  },
});

export default SplashScreen;