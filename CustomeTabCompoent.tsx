import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabComponent = ({ icon, label, isActive, onPress }) => {
  const [bgColor, setBgColor] = useState(isActive ? '#6D28D9' : '#fff');

  const handlePress = () => {
    setBgColor('#6D28D9'); // Active color
    onPress(); // Call the onPress prop to switch tabs
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        borderRadius: 35,
        height: 70,
        width: 70,
        elevation: isActive ? 5 : 0, // Adds elevation if active
        marginTop: isActive ? -30 : 0, // Moves the button up if active
      }}
    >
      <MaterialCommunityIcons name={icon} size={30} color={isActive ? '#fff' : 'gray'} />
      <Text style={{ color: isActive ? '#fff' : 'gray', fontWeight: '600' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomTabComponent;
