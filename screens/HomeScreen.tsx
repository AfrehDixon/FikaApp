import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type Venue = {
  _id: string;
  name: string;
  address: string;
};

export function HomeScreen() {
  const [venues, setVenues] = useState<Venue[]>([]); // Initialize venues as an empty array

  const fetchData = async () => {
    try {
      const response = await fetch('https://fiakapi-1.onrender.com/api/venues', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("Fetched data:", data); // Log the fetched data for debugging purposes
      if (data.venues) {
        setVenues(data.venues); // Set venues from the response
      } else {
        console.log("No venues found in response");
      }
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#5E3A16' />
        <View style={{ backgroundColor: '#5E3A16' }}>
          <View
            style={{
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../assets/image/daddylogo.png')}
              style={{
                width: 112,
                height: 112,
                borderRadius: 45,
                borderColor: 'white',
                alignSelf: 'center',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.banner}>
            <Image
              source={require('../assets/image/daddybanner.jpeg')}
              style={styles.bannerLogo}
            />
            <View style={styles.bannerText}>
              <Text
                style={{
                  color: '#a96822',
                  paddingLeft: 15,
                  fontSize: 18,
                  paddingVertical: 15,
                }}>
                Buy Gifts Cards now
              </Text>
              <Icon
                name="arrow-forward"
                size={24}
                style={{
                  color: '#a96822',
                  paddingRight: 15,
                  fontSize: 18,
                  paddingVertical: 15,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconButtonText}>Refer a friend</Text>
            <Image style={styles.homeIcon} source={require('../assets/image/friends.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="qr-code-outline" size={44} color="#FFF" />
            <Image style={styles.homeIcon} source={require('../assets/image/lcup.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.venueListContainer}>
          <Text style={styles.venueHeader}>Select Venue</Text>

          {venues.length === 0 ? (
            <Text>Loading venues...</Text>
          ) : (
            venues.map((venue) => (
              <TouchableOpacity
                key={venue._id}
                style={styles.venueCard}
                onPress={() => navigation.navigate('VenueDetails', { venueId: venue._id })}>
              
                <Text style={styles.venueName}>{venue.name}</Text>
                <Text style={styles.venueAddress}>{venue.address}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#8B4513',
    paddingBottom: 10,
  },
  banner: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 15,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  bannerLogo: {
    height: 221,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: '100%',
    resizeMode: 'cover',
  },
  headerImage: {
    width: 400,
    height: 400,
  },
  bannerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  homeIcon: {
    width: 57,
    height: 57,
    marginRight: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  iconButton: {
    backgroundColor: '#69332E',
    width: '48%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    height: 90,
    justifyContent: 'space-between',
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
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    gap: 7,
  },
  venueName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  venueAddress: {
    fontSize: 14,
    color: '#666',
  },
});
