import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const venues = [
  {name: 'Legon', location: 'Accra, Ghana'},
  {name: 'Kwame Nkrumah Mausoleum', location: 'Accra, Ghana'},
  {name: 'Cape Coast Castle', location: 'Cape Coast, Ghana'},
  {name: 'Kakum National Park', location: 'Central Region, Ghana'},
  {name: 'Labadi Beach', location: 'Accra, Ghana'},
  {name: 'Elmina Castle', location: 'Elmina, Ghana'},
  {name: 'Aburi Botanical Gardens', location: 'Aburi, Ghana'},
  {name: 'Mole National Park', location: 'Mole, Ghana'},
];

const VenuesComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://fikateahouse.com/assets/img/portfolio/thumbnails/1.jpg',
          }} // Example logo image
          style={styles.logo}
        />
      </View>

      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://fikateahouse.com/assets/img/portfolio/thumbnails/4.jpg',
          }} // Example banner image
          style={styles.bannerLogo}
        />
        <View style={styles.bannerText}>
          <Text style={{color: '#a96822', paddingLeft: 10, fontSize: 18}}>
            Buy Gifts Cards now
          </Text>
          <Icon name="arrow-forward" size={24} color="#a96822" />
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Refer a Friend</Text>
          <Image source={require('../../assets/image/friends.png')}/>
          <Icon name="person-add-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{uri: 'https://example.com/qr-code.png'}} // Example QR code image
            style={styles.qrCode}
          />
          <Text style={styles.buttonText}>QR Code</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.selectVenueHeader}>Select Venue</Text>

      {/* Scrollable venues list */}
      <ScrollView style={styles.scrollView}>
        {venues.map((venue, index) => (
          <View key={index} style={styles.venueContainer}>
            <Text style={styles.venueName}>{venue.name}</Text>
            <Text style={styles.venueLocation}>{venue.location}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eeeee',
    flex: 1, // Ensure the container takes up full height
    justifyContent: 'flex-start', // Align items to start
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: width * 0.2, // Responsive width (20% of screen width)
    height: width * 0.2, // Responsive height (20% of screen width)
    borderRadius: (width * 0.2) / 2, // Make logo circular
  },
  banner: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 15,
  },
  bannerLogo: {
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: '100%', // Make banner image full width
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#a96822',
    borderRadius: 5,
    justifyContent: 'space-between',
    width: '48%', // Adjust width to fit two buttons in a row
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  bannerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  qrCode: {
    width: 24,
    height: 24,
  },
  venueContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3, // Add shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 1}, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },
  venueName: {
    fontSize: 20, // Increase font size for better visibility
    fontWeight: 'bold',
  },
  venueLocation: {
    fontSize: 16, // Increase font size for better visibility
    color: '#666',
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 20, // Allow the ScrollView to take up remaining space
  },
  selectVenueHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
});

export default VenuesComponent;
