import React, {useRef, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from './screens/HomeScreen';
import {SettingScreen} from './screens/SettingScreen';
import Loyalty from './screens/Loyalty';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// Function to get the correct icon for each route
const getTabBarIcon = (
  route: RouteProp<Record<string, object | undefined>, string>,
  color: string,
  size: number,
  focused: boolean,
) => {
  let iconName: string = 'home-outline'; // Default value

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Loyalty') {
    iconName = 'ticket-outline';
  } else if (route.name === 'Profile') {
    iconName = 'account-outline';
  }

  // Return the MaterialCommunityIcon with an animation wrapper
  return (
    <MaterialCommunityIcons
      name={iconName}
      size={size}
      color={focused ? 'white' : color}
    />
  );
};

export default function Tabnavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const moveAnim = useRef(new Animated.Value(0)).current;

          // Trigger the upward movement animation when the tab is focused
          useEffect(() => {
            Animated.timing(moveAnim, {
              toValue: focused ? -30 : 0, // Move the icon up by 10 when focused
              duration: 200,
              useNativeDriver: true,
            }).start();
          }, [focused]);

          // Add brown background if the tab is focused
          const iconBackgroundStyle = focused
            ? {
                backgroundColor: '#5E3A16', // Brown background
                borderRadius: 50,
                padding: 10,
              }
            : {};

          return (
            <Animated.View
              style={{
                transform: [{translateY: moveAnim}],
              }}>
              <View style={iconBackgroundStyle}>
                {getTabBarIcon(route, color, size, focused)}
              </View>
            </Animated.View>
          );
        },
        tabBarActiveTintColor: '#5E3A16', // Brown active tint color
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
          padding: 10,
          margin: 10,
          width: '90%',
          marginBottom: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 50,
        },
        tabBarShowLabel: false, // Hide the tab labels
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Loyalty"
        component={Loyalty}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
