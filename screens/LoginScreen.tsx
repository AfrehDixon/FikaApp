import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Updated import
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [loading, setloading] = useState(false);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signin = async () => {
    setloading(true);
    if (!email && !password) {
       Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill in all fields',
        autoHide: true,
      });

      setloading(false);
    }
    try {
      const response = await fetch(
        'https://fiakapi-1.onrender.com/api/customers/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      console.log(email, password);

      const data = await response.json();
      console.log(data.customer.fullname);

      // Toast.show({
      //   type: 'success',
      //   position: 'top',
      //   text1: 'Login Successful',
      //   autoHide: true,
      // });

      const token = data.token;
      console.log(token);
      const customer = data.customer; // Extract the customer object

      const userDetails = {
        name: customer.fullname, // Get fullname from the customer object
        email: customer.email, // Get email from the customer object
      };


      console.log(userDetails);

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));

      
      
      // if (response.ok) {
        // Alert.alert('signup succesful');
        // Handle successful signup (e.g., navigate to another screen)
      console.log('Signup successful', data);
       Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Login Successful',
        autoHide: true,
      });

        navigation.navigate('Main');
        setloading(false);
      // } else {
        // Handle errors (e.g., show an error message)
        // console.error('Signup failed', data);
      // }
    } catch (error) {
       Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Password or Email is incorrect',
        autoHide: true,
      });

    } finally {
      setloading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5E3A16" barStyle="light-content" />
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/daddylogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Phone Number Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="chephas@gmail.om"
            value={email}
            onChangeText={setemail}
          // keyboardType="phone-pad"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="********"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            {/* Password visibility toggle icon */}
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={require('../assets/image/eye-off.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Remember Me & Forgot PIN */}
        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            {/* <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{ true: '#5c3a1e', false: '#ccc' }} // Updated CheckBox styling
            /> */}
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPinText}>Forgot PIN??</Text>
          </TouchableOpacity>
        </View>

        {/* Log In Button */}

        <TouchableOpacity style={styles.loginButton} onPress={() => signin()}>
          {loading ? (
            <View style={{display: "flex ",flexDirection: 'row'}}>
              <ActivityIndicator />
              <Text style={{color: 'white' , marginLeft: 5}}>Loading ...</Text>
            </View>
          ) : (
            <Text style={styles.loginButtonText}>Log In</Text>
          )}
        </TouchableOpacity>

        {/* Sign Up Option */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Drinks at the Bottom */}
      <View style={[styles.drinksContainer, { width: screenWidth }]}>
        <Image
          source={require('../assets/image/daddybackground.png')}
          style={[
            styles.drinksImage,
            {
              width: screenWidth * 1.0,
              height: screenHeight * 0.25,
            },
          ]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E3A16', // Brown background
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 5,
  },
  forgotPinText: {
    color: '#ff6a6a',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#5c3a1e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#5c3a1e',
    fontWeight: 'bold',
  },
  drinksContainer: {
    paddingBottom: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drinksImage: {
    height: 100,
  },
});

export default LoginScreen;
