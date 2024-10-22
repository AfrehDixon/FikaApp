import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressLoaderComponent = ({ progress = 0, size = 16, color = '#4A2B20' }) => {
  return (
    <View style={{ width: size, height: size }}>
      {/* Background circle */}
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderWidth: 1.5,
            borderColor: color,
            opacity: 0.3
          }
        ]}
      />
      
      {/* Progress circle */}
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderWidth: 1.5,
            borderColor: color,
            opacity: 1,
            position: 'absolute',
            borderLeftColor: 'transparent',
            borderBottomColor: 'transparent',
            transform: [
              { rotate: '45deg' }
            ]
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
  }
});

export default ProgressLoaderComponent;