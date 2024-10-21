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
// import Icon from 'react-native-vector-icons/Ionicons';

const Loyalty = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Loyalty Card */}
      <Text style={styles.title}>Loyalty</Text>
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
          <View style={{ display: 'flex', gap: 5, flexDirection: 'row', margin: 5 }}>
            <View style={styles.radioButton}>
              {/* <View style={styles.radioButtonInner} /> */}
            </View>
            <Text>60/100</Text>
          </View>

        </View>
        <View>
          {/* {selectedSize === size.name && ( */}
          <View style={styles.radioButton}>
            <View style={styles.radioButtonInner} />
          </View>
          {/* )} */}
        </View>
        {/* <View>
          <View style={{borderColor: 'red'  , borderStyle: 'dashed' ,borderWidth: 10}}> </View>
        </View> */}
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
          <View style={{ display: 'flex', gap: 5, flexDirection: 'row', margin: 5 }}>
            <View style={styles.radioButton}>
              {/* <View style={styles.radioButtonInner} /> */}
            </View>
            <Text>20/100</Text>
          </View>
        </View>
      </View>

      {/* Transactions Button */}
      <TouchableOpacity style={styles.transactionsButton}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/image/orderIcon.png')} style={styles.icon}/>
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
    //  marginBottom: 5,
    marginTop: 15,
    color: '#000',
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
    marginRight: 15, // Increased space between icon and details
    width: 31,
    height: 31,
    borderRadius: 25, // Rounded corners for the icon card
    backgroundColor: '#6B3E26', // Background color for the icon card
    justifyContent: 'center',
    alignItems: 'center', // Centered text inside the icon card
  },
  icon: {
    width: 20,
    height: 20,
    // borderRadius: 25,
},
});

export default Loyalty;
