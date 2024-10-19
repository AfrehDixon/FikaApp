import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const Loyalty = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Loyalty Card */}
      <View style={styles.loyaltyCard}>
        <View
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            alignSelf: 'center',
              marginBottom: 20,
              // marginTop: 40,
              
              // Half the width and height to make it circular
            }}>
            <Image
              source={require('../assets/image/fika5.png')} // Path to your image
              style={{
                width: 40, // Slightly smaller than the container to show the red background as a border
                height: 40,
                borderRadius: 45, // Half of the width/height to make the image circular
                // borderWidth: 5, // Adds a border around the image
                borderColor: 'white',
                alignSelf: 'center ', // Border color (you can change it if needed)
              }}
              resizeMode="cover" // Ensures the image covers the entire circle
            />
          </View>
        <View style={styles.cardHolder}>
          <Image
            style={styles.qrCode}
            source={require('../assets/image/qrcode.png')} // Replace with your QR code image
          />
        </View>
        <Text style={styles.tapToScan}>Tap to scan</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>60 POINTS</Text>
          <Text style={styles.userId}>CEPHAS 1223-0094</Text>
        </View>
      </View>

      {/* Rewards */}
      <Text style={styles.rewardsTitle}>Rewards</Text>
      <View style={styles.rewardItem}>
        <View style={styles.rewardCard}>
          <Image
            style={styles.rewardImage}
            source={require('../assets/image/fika4.png')} // Replace with your drink image
          />
        </View>
        <View style={styles.rewardDetails}>
          <Text style={styles.rewardText}>Hydrate Station</Text>

          <Text>60/100</Text>
        </View>
      </View>

      <View style={styles.rewardItem}>
        <View style={styles.rewardCard}>
        <Image
          style={styles.rewardImage}
          source={require('../assets/image/fika4.png')} // Replace with your drink image
        />
        </View>
        <View style={styles.rewardDetails}>
          <Text style={styles.rewardText}>Bubble Tea</Text>

          <Text>20/100</Text>
        </View>
      </View>

      {/* Transactions Button */}
      <TouchableOpacity style={styles.transactionsButton}>
        <Text style={styles.transactionsText}>Transactions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 20,
  },
  loyaltyCard: {
    backgroundColor: '#8B4513',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  cardHolder: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  qrCode: {
    width: 150,
    height: 150,
  },
  tapToScan: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  pointsText: {
    color: '#fff',
    fontSize: 14,
  },
  userId: {
    color: '#fff',
    fontSize: 14,
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  rewardCard: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#69332E',
    // padding: 2,
  },
  rewardImage: {
    width: 50,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  rewardDetails: {
    flex: 1,
  },
  rewardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  transactionsText: {
    fontSize: 16,
    color: 'brown',
    flex: 1,
  },
});

export default Loyalty;