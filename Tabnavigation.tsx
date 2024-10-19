import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingScreen} from './screens/SettingScreen';
// import { HomeScreen } from './screens/HomeScreen';
import Loyalty from './screens/Loyalty';
import {RouteProp} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  route: RouteProp<Record<string, object | undefined>, string>,
  color: string,
  size: number,
) => {
  let iconName: string = 'home-outline'; // Default value to avoid the error

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Tickets') {
    iconName = 'ticket-outline';
  } else if (route.name === 'Profile') {
    iconName = 'account-outline'; // Use account-outline for profile
  }

  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

export default function Tabnavigation() {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route, color, size),
        tabBarActiveTintColor: '#5E3A16',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
          // paddingBottom: 10,
          // paddingTop: 10,
          padding: 10,
          margin: 10,
          width: '90%',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          margin: 5,
        },
        // tabBarActiveBackgroundColor: '#fff',


      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Loyalty"
        component={Loyalty}
      />

      <Tab.Screen
        name="Profile"
        component={SettingScreen}
        options={{
          // headerTitle: 'Profile',
          // headerTintColor: '#F0F0F0',
          // headerTitleStyle: { fontWeight: 'bold', color: '#000000' },
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}
