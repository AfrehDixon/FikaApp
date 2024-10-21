import React from 'react';
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
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar  backgroundColor='#5E3A16' />
        <View style={{backgroundColor: '#5E3A16'}}>
          <View
            style={{
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 30,

              // Half the width and height to make it circular
            }}>
            <Image
              source={require('../assets/image/fika5.png')} // Path to your image
              style={{
                width: 80, // Slightly smaller than the container to show the red background as a border
                height: 80,
                borderRadius: 45, // Half of the width/height to make the image circular
                // borderWidth: 5, // Adds a border around the image
                borderColor: 'white',
                alignSelf: 'center ', // Border color (you can change it if needed)
              }}
              resizeMode="cover" // Ensures the image covers the entire circle
            />
          </View>

          <View style={styles.banner}>
            <Image
              source={require('../assets/image/fikabanner.png')} // Example banner image
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
        {/* Buttons for Refer and QR code */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconButtonText}>Refer a friend</Text>
            <Image style={styles.homeIcon} source={require('../assets/image/friends.png')}/>
            {/* <Icon name="people-outline" size={24} color="#FFF" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="qr-code-outline" size={44} color="#FFF" />
            <Image style={styles.homeIcon} source={require('../assets/image/fika4.png')}/>
            {/* <Text style={styles.iconButtonText}>Your QR Code</Text> */}
          </TouchableOpacity>
        </View>

        {/* Venue List */}
        <View style={styles.venueListContainer}>
          <Text style={styles.venueHeader}>Select Venue</Text>

          <TouchableOpacity
            style={styles.venueCard}
            onPress={() => navigation.navigate('VenueDetails')}>
            <Text style={styles.venueName}>
              The Fika Teahouse - East Location
            </Text>
            <Text style={styles.venueAddress}>12 Tripoli St, Accra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.venueCard}>
            <Text style={styles.venueName}>
              The Fika Teahouse - South Labadi
            </Text>
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
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: '100%', // Make banner image full width
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
    shadowOffset: {width: 0, height: 2},
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
