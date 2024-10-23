import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabnavigation from './Tabnavigation'; // Bottom Tab Navigator
import PaymentMethod from './screens/PaymentMethod'; // Payment Method screen
import OrderHistory from './screens/OrderHistory';
import FeedbackScreen from './screens/FeebackScreen';
import VenueDetailsComponent from './components/VenuesComponent/VenueDetailsComponent';
import { View, Text, StyleSheet } from 'react-native';
import CartDetailsComponent from './components/VenuesComponent/CartDetailsComponent';
import Checkout from './components/VenuesComponent/CheckoutComponent';
import ViewCartComponent from './components/VenuesComponent/ViewCartComponent';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#8B4513', height: 100 },
        headerTintColor: 'red',
        headerTitleStyle: { fontWeight: 'bold' },
        headerStatusBarHeight: 40,
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={Tabnavigation}
        options={{ headerShown: false, }} // Hide header for the bottom tabs
      />

      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#5E3A16',  // Customize header background color if needed
          },
        }}
      />

      {/* Other screens like PaymentMethod, VenueDetails go here */}
      {/* <Stack.Screen
        name="VenueDetails"
        component={VenueDetailsComponent}
        options={{
          title: 'Venue Details',
        }}
      /> */}
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          title: 'Payment Methods', headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#5E3A16',  // Customize header background color if needed
          },
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          title: 'Order History',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#5E3A16',  // Customize header background color if needed
          },
        }}
      />
      <Stack.Screen
        name="VenueDetails"
        component={VenueDetailsComponent}
        options={{
          headerTitle: () => (
            <View>
              <Text style={styles.headerTitle}>THE FIKA TEAHOUSE - EAST LEGON</Text>
              <Text style={styles.headerSubtitle}>12 Tripoli Street, Accra</Text>
            </View>
          ),
          headerTintColor: '#fff',  // Customize header text color if needed
          headerStyle: {
            backgroundColor: '#5E3A16',  // Customize header background color if needed
          },
        }}
      />

      <Stack.Screen
        name="CartDetails"
        component={CartDetailsComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          // title: 'Checkout',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#5E3A16',
          },
        }}
      />
      <Stack.Screen
        name="ViewCart"
        component={ViewCartComponent}
        options={{
          // Custom header with title and subtitle
          headerTitle: () => (
            <View>
              <Text style={styles.headerTitle}>THE FIKA TEAHOUSE - EAST LEGON</Text>
              <Text style={styles.headerSubtitle}>12 Tripoli Street, Accra</Text>
            </View>
          ),
          headerTintColor: '#fff',  // Customize header text color if needed
          headerStyle: {
            backgroundColor: '#5E3A16',  // Customize header background color if needed
          },
        }}
      />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,        // Adjust the font size for the title
    fontWeight: 'bold',  // Bold text for the title
    color: '#fff',       // White color for the title
    textAlign: 'center', // Center align the text
  },
  headerSubtitle: {
    fontSize: 14,        // Smaller font for the subtitle
    color: '#fff',       // White color for the subtitle
    // Center align the text
  },
});


export default StackNavigation;
