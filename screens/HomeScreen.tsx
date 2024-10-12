import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 305, height: 159}}
        />
      </View>

      <Text style={styles.title}>Welcome to FikaApp!</Text>
      <Text style={styles.subtitle}>This is the Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default Home;
