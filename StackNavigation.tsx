import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabnavigation from './Tabnavigation'; // Bottom Tab Navigator
import  PaymentMethod from './screens/PaymentMethod'; // Payment Method screen
import OrderHistory from './screens/OrderHistory';
import FeedbackScreen from './screens/FeebackScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#8B4513' ,height: 100},
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
        name='Feedback'
        component={FeedbackScreen}
        options={{
          title: 'Feedback',headerTintColor: '#fff',
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
          title: 'Payment Methods',headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
      name='OrderHistory'
      component={OrderHistory}
      options={{
        title: 'Order History',
        headerTintColor: '#fff',
      }}
      />

    </Stack.Navigator>
  );
};

export default StackNavigation;
