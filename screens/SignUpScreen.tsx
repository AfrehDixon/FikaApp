import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground, ScrollView, StatusBar } from 'react-native';

// Get screen dimensions and create scaling factors
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = size => (SCREEN_WIDTH / 375) * size;
const verticalScale = size => (SCREEN_HEIGHT / 812) * size;

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5E3A16" barStyle="light-content" />
      {/* Logo */}
      <View style={[styles.logoContainer, { height: verticalScale(120) }]}>
        <Image
          source={require('../assets/image/fika5.png')}
          style={[styles.logo]}
          resizeMode="contain"
        />
      </View>

      {/* Sign Up Form */}
      <View style={[styles.formContainer, { paddingBottom: verticalScale(60) }]}>
        <View style={[styles.formContentContainer, {
          width: SCREEN_WIDTH * 0.9,
          padding: scale(20),
        }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.signupTitle]}>Sign Up</Text>

            {/* Name Input */}
            <View style={[styles.inputGroup, { marginBottom: verticalScale(15) }]}>
              <Text style={[styles.inputLabel]}>Name</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, {
                    padding: scale(10),
                    borderRadius: scale(8),
                    marginBottom: verticalScale(5),
                    fontSize: scale(14),
                  }]}
                  placeholder="Don Cephas"
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Phone Number Input */}
            <View style={[styles.inputGroup, { marginBottom: verticalScale(15) }]}>
              <Text style={[styles.inputLabel, {
                fontSize: scale(14),
                marginBottom: verticalScale(5),
              }]}>Phone number</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, {
                    padding: scale(10),
                    borderRadius: scale(8),
                    marginBottom: verticalScale(5),
                    fontSize: scale(14),
                  }]}
                  placeholder="0575540404"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Email Input */}
            <View style={[styles.inputGroup, { marginBottom: verticalScale(15) }]}>
              <Text style={[styles.inputLabel, {
                fontSize: scale(14),
                marginBottom: verticalScale(5),
              }]}>Email</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, {
                    padding: scale(10),
                    borderRadius: scale(8),
                    marginBottom: verticalScale(5),
                    fontSize: scale(14),
                  }]}
                  placeholder="cephasntiamoa10@gmail.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={[styles.inputGroup, { marginBottom: verticalScale(15) }]}>
              <Text style={[styles.inputLabel, {
                fontSize: scale(14),
                marginBottom: verticalScale(5),
              }]}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, {
                    padding: scale(10),
                    borderRadius: scale(8),
                    marginBottom: verticalScale(5),
                    fontSize: scale(14),
                  }]}
                  placeholder="********"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity
                  style={[styles.eyeIcon, {
                    right: scale(12),
                    transform: [{ translateY: -scale(10) }],
                  }]}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image
                    source={require('../assets/image/eye-off.png')}
                    style={[styles.icon]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Next Button */}
            <TouchableOpacity style={[styles.nextButton, {
              padding: scale(15),
              borderRadius: scale(8),
              marginTop: verticalScale(10),
              marginBottom: verticalScale(15),
            }]} onPress={() => navigation.navigate('otpScreen')}>
              <Text style={[styles.nextButtonText, { fontSize: scale(16) }]}>Next</Text>
            </TouchableOpacity>

            {/* Login Option */}
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { fontSize: scale(14) }]}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.loginLink, { fontSize: scale(14) }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Bottom Background Image */}
      <View style={[styles.drinksContainer, { width: SCREEN_WIDTH }]}>
        <ImageBackground
          source={require('../assets/image/splashImage.png')}
          style={[styles.drinksImage, {
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.25,
          }]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E3A16',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  logo: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  formContentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backfaceVisibility: 'hidden',
  },
  signupTitle: {
    fontSize: scale(24),
    marginBottom: verticalScale(20),
    fontWeight: 'bold',
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
  },
  inputLabel: {

  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  icon: {
    width: scale(20),
    height: scale(20),
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
  },
  nextButton: {
    backgroundColor: '#5c3a1e',
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#5c3a1e',
    fontWeight: '600',
  },
  drinksContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 0,
  },
  drinksImage: {
    width: '100%',
  },
});

export default SignUpScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
// import CheckBox from '@react-native-community/checkbox'; // Updated import

// const SignUpScreen = ({ navigation }) => {
//   const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   return (
//     <ImageBackground
//       source={require('../assets/image/splashImage.png')} // Background image
//       style={styles.backgroundImage}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}> {/* Dark overlay for the background */}
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('../assets/image/fika5.png')}
//             style={styles.logo}
//           />
//         </View>

//         {/* Login Form */}
//         <View style={styles.formContainer}>
//           <Text style={styles.loginTitle}>Login</Text>

//           {/* Name Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             placeholderTextColor="#999"
//             value={name}
//             onChangeText={setName}
//           />

//           {/* Phone Number Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Phone number"
//             placeholderTextColor="#999"
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//             keyboardType="phone-pad"
//           />

//           {/* Email Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="#999"
//             value={email}
//             onChangeText={setEmail}
//           />

//           {/* Password Input */}
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#999"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity style={styles.eyeIcon}>
//               <Image
//                 source={require('../assets/image/eye-off.png')}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Remember Me & Forgot PIN */}
//           <View style={styles.optionsContainer}>
//             <View style={styles.rememberMeContainer}>
//               <CheckBox
//                 value={rememberMe}
//                 onValueChange={setRememberMe}
//                 tintColors={{ true: '#5c3a1e', false: '#ccc' }} // Updated CheckBox styling
//               />
//               <Text style={styles.rememberMeText}>Remember me</Text>
//             </View>
//             <TouchableOpacity>
//               <Text style={styles.forgotPinText}>Forgot PIN?</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Log In Button */}
//           <TouchableOpacity style={styles.loginButton}>
//             <Text style={styles.loginButtonText}>Log In</Text>
//           </TouchableOpacity>

//           {/* Sign Up Option */}
//           <View style={styles.signUpContainer}>
//             <Text style={styles.signUpText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//               <Text style={styles.signUpLink}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(92, 58, 30, 0.8)', // Semi-transparent overlay
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//   },
//   formContainer: {
//     width: '90%',
//     backgroundColor: '#F0F0F0',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   loginTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   passwordContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   optionsContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rememberMeText: {
//     marginLeft: 5,
//   },
//   forgotPinText: {
//     color: '#ff6a6a',
//   },
//   loginButton: {
//     width: '100%',
//     backgroundColor: '#5c3a1e',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signUpContainer: {
//     flexDirection: 'row',
//     marginTop: 15,
//   },
//   signUpText: {
//     color: '#666',
//   },
//   signUpLink: {
//     color: '#5c3a1e',
//     fontWeight: 'bold',
//   },
// });

// export default SignUpScreen;


