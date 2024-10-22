import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Loyalty = () => {
  // Simulating reward progress (adjust values as per actual logic)
  const hydrateProgress = 60; // 60% progress
  const bubbleTeaProgress = 20; // 20% progress

  return (
    <ScrollView style={styles.container}>
      {/* Loyalty Card */}
      <Text style={styles.title}>Loyalty</Text>
      <View style={styles.loyaltyCard}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/image/fika5.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardHolder}>
          <Image
            style={styles.qrCode}
            source={require('../assets/image/qrcode.png')}
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
            source={require('../assets/image/fika4.png')}
          />
        </View>
        <View style={styles.rewardDetails}>
          <Text style={styles.rewardText}>Hydrate Station</Text>
          <View style={styles.circularLoaderContainer}>
            <AnimatedCircularProgress
              size={30}
              width={5}
              fill={hydrateProgress} // Progress value for Hydrate Station
              tintColor="#4A2B20"
              backgroundColor="#E0E0E0"
            />
            {/* Progress text placed beside the loader */}
            <Text style={styles.progressText}>60/100</Text>
          </View>
        </View>
        <View>
          {/* {selectedSize === size.name && ( */}
          <View style={styles.radioButton}>
            <View style={styles.radioButtonInner} />
          </View>
          {/* )} */}
        </View>
      </View>

      <View style={styles.rewardItem}>
        <View style={styles.rewardCard}>
          <Image
            style={styles.rewardImage}
            source={require('../assets/image/fika4.png')}
          />
        </View>
        <View style={styles.rewardDetails}>
          <Text style={styles.rewardText}>Bubble Tea</Text>
          <View style={styles.circularLoaderContainer}>
            <AnimatedCircularProgress
              size={30}
              width={5}
              fill={bubbleTeaProgress} // Progress value for Bubble Tea
              tintColor="#4A2B20"
              backgroundColor="#E0E0E0"
            />
            {/* Progress text placed beside the loader */}
            <Text style={styles.progressText}>20/100</Text>
          </View>
        </View>
      </View>

      {/* Transactions Button */}
      <TouchableOpacity style={styles.transactionsButton}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/image/orderIcon.png')}
            style={styles.icon}
          />
        </View>
        <Text style={styles.transactionsText}>Transactions</Text>
        <Icon name="chevron-right" size={24} color="#1E1E1E" />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#000',
  },
  loyaltyCard: {
    backgroundColor: '#8B4513',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logoContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 45,
    borderColor: 'white',
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
  circularLoaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // space between loader and text
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A2B20',
  },
  transactionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
  },
  transactionsText: {
    fontSize: 16,
    color: '#1E1E1E',
    flex: 1,
  },
  iconContainer: {
    marginRight: 15,
    width: 31,
    height: 31,
    borderRadius: 25,
    backgroundColor: '#6B3E26',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4A2B20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4A2B20',
  },
});

export default Loyalty;
