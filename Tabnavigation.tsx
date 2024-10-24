import React, { useRef, useEffect } from 'react';
import { View, Animated, Dimensions, Platform, Easing } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './screens/HomeScreen';
import { SettingScreen } from './screens/SettingScreen';
import Loyalty from './screens/Loyalty';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  route: RouteProp<Record<string, object | undefined>, string>,
  color: string,
  size: number,
  focused: boolean,
) => {
  let iconName = 'home-outline';
  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Loyalty') {
    iconName = 'ticket-outline';
  } else if (route.name === 'Profile') {
    iconName = 'account-outline';
  }

  return (
    <MaterialCommunityIcons
      name={iconName}
      size={size}
      color={focused ? 'white' : color}
    />
  );
};

const TabIcon = ({
  route,
  color,
  size,
  focused,
  // index,
  // activeIndex,
}: {
  route: RouteProp<Record<string, object | undefined>, string>;
  color: string;
  size: number;
  focused: boolean;
  index: number;
  activeIndex: number;
}) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: focused ? -30 : 0,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }).start();

    Animated.timing(scaleAnim, {
      toValue: focused ? 1.2 : 1,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start();
  }, [focused, moveAnim, scaleAnim]);

  const iconBackgroundStyle = focused
    ? {
        backgroundColor: '#5E3A16',
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
    : {};

  return (
    <Animated.View
      style={{
        alignItems: 'center',
        transform: [{ translateY: moveAnim }, { scale: scaleAnim }],
        opacity: focused ? 1 : 0.8,
      }}>
      <View style={iconBackgroundStyle}>
        {getTabBarIcon(route, color, size, focused)}
      </View>
    </Animated.View>
  );
};

const TabNavigation = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderTabIcon = (
    route: RouteProp<Record<string, object | undefined>, string>,
    color: string,
    size: number,
    focused: boolean,
  ) => {
    const index = ['Home', 'Loyalty', 'Profile'].indexOf(route.name);
    return (
      <TabIcon
        route={route}
        color={color}
        size={size}
        focused={focused}
        index={index}
        activeIndex={activeIndex}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) =>
          renderTabIcon(route, color, size, focused),
        tabBarActiveTintColor: '#5E3A16',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 75,
          padding: 10,
          margin: 10,
          width: '82%',
          marginBottom: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 50,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 5,
            },
          }),
        },
        tabBarShowLabel: false,
      })}
      screenListeners={{
        tabPress: e => {
          const index = ['Home', 'Loyalty', 'Profile'].indexOf(
            (e.target ?? '').split('-')[0],
          );
          setActiveIndex(index);
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Loyalty"
        component={Loyalty}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;