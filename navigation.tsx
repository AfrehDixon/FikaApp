import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from 'react-native-paper';  // Using MaterialCommunityIcons for icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SettingScreen } from './screens/SettingScreen';
import { HomeScreen } from './screens/HomeScreen';
import Loyalty from './screens/Loyalty';
import { RouteProp } from '@react-navigation/native'; // Importing RouteProp for type definition
import CartDetailsComponent from './components/VenuesComponent/CartDetailsComponent';

const Tab = createBottomTabNavigator();

// Define the function with explicit types for the parameters
const getTabBarIcon = (
  route: RouteProp<Record<string, object | undefined>, string>,
  color: string,
  size: number
) => {
  let iconName: string = 'home-outline';  // Default value to avoid the error

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Tickets') {
    iconName = 'ticket-outline';
  } else if (route.name === 'Profile') {
    iconName = 'account-outline';  // Use account-outline for profile
  }

  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => getTabBarIcon(route, color, size),  // Use the stable function here
          tabBarActiveTintColor: '#6D28D9',  // Active tab icon color
          tabBarInactiveTintColor: 'gray',   // Inactive tab icon color
          tabBarStyle: {
            backgroundColor: '#fff',        // Background color of the tab bar
            borderTopWidth: 1,              // Border at the top of the tab bar
            borderTopColor: '#e0e0e0',      // Light gray border
            height: 60,                     // Height of the tab bar
            paddingBottom: 10,              // Padding below the icons
            paddingTop: 10,                 // Padding above the icons
          },
          tabBarLabelStyle: {
            fontSize: 12,                   // Customize font size of tab labels
            fontWeight: '600',              // Make the label bold
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home'             // Set the label for Home
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Loyalty}
          options={{
            tabBarLabel: 'Tickets'          // Set the label for Tickets
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Profile'          // Set the label for Profile
          }}
        />        
        <Tab.Screen
          name="cart"
          component={CartDetailsComponent}
          options={{
            tabBarLabel: 'Profile'          // Set the label for Profile
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}