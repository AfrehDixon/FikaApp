import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';

const OtpScreen = ({ navigation }) => {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    // Handle screen rotation and dimension changes
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setDimensions(window);
        });

        return () => subscription?.remove();
    }, []);

    const { width: screenWidth, height: screenHeight } = dimensions;
    const scale = Math.min(screenWidth, screenHeight) / 375; // Base scale on iPhone 8 width

    // Responsive size calculator
    const getResponsiveSize = (size) => {
        return Math.round(size * scale);
    };

    const handleOTPChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#5E3A16" barStyle="light-content" />
            <View style={[styles.content, { paddingTop: getResponsiveSize(40) }]}>
                <Image
                    source={require('../assets/image/fika5.png')}
                    style={[styles.logo, {
                        width: getResponsiveSize(113),
                        height: getResponsiveSize(112),
                        marginBottom: getResponsiveSize(30),
                    }]}
                    resizeMode="contain"
                />

                <View style={[styles.card, { marginTop: getResponsiveSize(30) }]}>
                    <View style={[styles.cardHeader, {
                        paddingVertical: getResponsiveSize(16),
                        paddingHorizontal: getResponsiveSize(20),
                    }]}>
                        <TouchableOpacity
                            style={[styles.backButton, { padding: getResponsiveSize(5) }]}
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={[styles.backButtonText, { fontSize: getResponsiveSize(24) }]}>←</Text>
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.title, { fontSize: getResponsiveSize(18) }]}>OTP</Text>
                        </View>
                    </View>

                    <View style={[styles.inputSection, { padding: getResponsiveSize(20) }]}>
                        <Text style={[styles.subtitle, {
                            fontSize: getResponsiveSize(14),
                            marginBottom: getResponsiveSize(24),
                        }]}>Enter OTP</Text>

                        <View style={[styles.otpContainer, {
                            marginBottom: getResponsiveSize(24),
                            gap: getResponsiveSize(12),
                        }]}>
                            {otp.map((digit, index) => (
                                <View key={index} style={[styles.inputWrapper, {
                                    width: getResponsiveSize(67),
                                    height: getResponsiveSize(67),
                                }]}>
                                    <TextInput
                                        ref={(ref) => (inputRefs.current[index] = ref)}
                                        style={[
                                            styles.otpInput,
                                            digit ? styles.otpInputFilled : null,
                                            { fontSize: getResponsiveSize(20) },
                                        ]}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        value={digit}
                                        onChangeText={(value) => handleOTPChange(value, index)}
                                    />
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity style={[styles.nextButton, {
                            padding: getResponsiveSize(16),
                            marginTop: getResponsiveSize(8),
                        }]} onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.nextButtonText, { fontSize: getResponsiveSize(16) }]}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.drinksContainer}>
                    <Image
                        source={require('../assets/image/splashImage.png')}
                        style={[styles.drinksImage, {
                            width: screenWidth,
                            height: screenHeight * 0.25,
                        }]}
                        resizeMode="cover"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5E3A16',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    content: {
        flex: 1,
        paddingHorizontal: '5%',
        position: 'relative',
    },
    logo: {
        alignSelf: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: '100%',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    backButton: {
        fontWeight: 'bold',
        marginRight: 15,
    },
    backButtonText: {
        color: '#000',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        marginRight: 20,
    },
    title: {
        color: '#000',
        fontWeight: '600',
    },
    inputSection: {
        width: '100%',
    },
    subtitle: {
        color: '#666',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    otpInput: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#FFFFFF',
    },
    otpInputFilled: {
        borderColor: '#61341C',
        borderWidth: 2,
    },
    nextButton: {
        backgroundColor: '#61341C',
        borderRadius: 8,
    },
    nextButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '600',
    },
    drinksContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    drinksImage: {
        width: '100%',
    },
});

export default OtpScreen;