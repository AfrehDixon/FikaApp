import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export function HomeScreen() { 
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header with image */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://your-image-url.com/fika-header.png' }} // Add the URL for your header image here
            style={styles.headerImage}
            resizeMode="cover"
          />
        </View>

        {/* Promotion Section */}
        <TouchableOpacity style={styles.promoContainer}>
          <Text style={styles.promoText}>Buy Gift Cards now!</Text>
        </TouchableOpacity>

        {/* Buttons for Refer and QR code */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="people-outline" size={24} color="#FFF" />
            <Text style={styles.iconButtonText}>Refer a friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="qr-code-outline" size={24} color="#FFF" />
            <Text style={styles.iconButtonText}>Your QR Code</Text>
          </TouchableOpacity>
        </View>

        {/* Venue List */}
        <View style={styles.venueListContainer}>
          <Text style={styles.venueHeader}>Select Venue</Text>

          <TouchableOpacity style={styles.venueCard} onPress={() => navigation.navigate('VenueDetails')}>
            <Text style={styles.venueName}>The Fika Teahouse - East Location</Text>
            <Text style={styles.venueAddress}>12 Tripoli St, Accra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.venueCard}>
            <Text style={styles.venueName}>The Fika Teahouse - South Labadi</Text>
            <Text style={styles.venueAddress}>Jomo S Ln, Accra</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#8B4513',
    paddingBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  promoContainer: {
    backgroundColor: '#69332E',
    padding: 15,
    alignItems: 'center',
  },
  promoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  iconButton: {
    backgroundColor: '#5E3A16',
    width: '48%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  iconButtonText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '600',
  },
  venueListContainer: {
    paddingHorizontal: 20,
  },
  venueHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  venueCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  venueName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  venueAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});