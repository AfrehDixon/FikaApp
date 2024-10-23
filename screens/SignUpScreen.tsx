import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Updated import

const SignUpScreen = () => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/image/fika5.png')}
                    style={styles.logo}
                />
            </View>

            {/* Login Form */}
            <View style={styles.formContainer}>
                <Text style={styles.loginTitle}>Login</Text>

                {/* Phone Number Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                {/* Phone Number Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                {/* Phone Number Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Input */}
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {/* Password visibility toggle icon */}
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Image
                            source={require('../assets/image/eye-off.png')} // Icon to toggle visibility
                            style={styles.icon}
                        />
                    </TouchableOpacity>
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
                        <Text style={styles.forgotPinText}>Forgot PIN?</Text>
                    </TouchableOpacity>
                </View>

                {/* Log In Button */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                {/* Sign Up Option */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Drinks at the Bottom */}
            <View style={[styles.drinksContainer, { width: screenWidth }]}>
                <Image
                    source={require('../assets/image/splashImage.png')}
                    style={[styles.drinksImage, { width: screenWidth * 1.0, height: screenHeight * 0.25 }]}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5c3a1e', // Brown background
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
        elevation: 5, // For Android shadow effect
    },
    loginTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
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
        paddingBottom: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drinksImage: {
        height: 100,
    },
});

export default SignUpScreen;
