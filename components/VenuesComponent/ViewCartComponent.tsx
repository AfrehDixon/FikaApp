import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MenuItem = ({ title, description, imageSource }) => (
    <View style={styles.menuItem}>
        <Image source={imageSource} style={styles.menuItemImage} />
        <View style={styles.menuItemInfo}>
            <Text style={styles.menuItemTitle}>{title}</Text>
            <Text style={styles.menuItemDescription}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
        <Image source={require('../../assets/image/lock.png')}/>
        </TouchableOpacity>
    </View>
);

const ViewCartComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>COFFEE SERIES</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <MenuItem
                            title="Love Cocoa Coffee Cream Latte"
                            description="Fresh coconut milk, layered with whipped coffee"
                            imageSource={require('../../assets/image/coffee1.jpeg')}
                        />
                        <MenuItem
                            title="Fika Vanilla Americano"
                            description="Whipped coffee, vanilla, brown sugar syrup"
                            imageSource={require('../../assets/image/fika3.png')}
                        />
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>SIGNATURE</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <MenuItem
                            title="Chocolatev"
                            description="Rich chocolate with a touch of espresso"
                            imageSource={require('../../assets/image/fikashelf2.png')}
                        />
                        <MenuItem
                            title="Caramel Lotus"
                            description="Caramel and lotus biscuit latte"
                            imageSource={require('../../assets/image/fikashelf3.png')}
                        />
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={styles.cart}>
                <TouchableOpacity style={styles.cartCard} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.cartDetails}>2</Text>
                    <Text style={styles.cartDetails}>View Cart</Text>
                    <Text style={styles.cartDetails}>GHC 30</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    content: {
        flex: 1,
    },
    section: {
        marginVertical: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    viewAll: {
        color: '#4CAF50',
        fontSize: 14,
    },
    menuItem: {
        width: SCREEN_WIDTH * 0.43,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    menuItemImage: {
        width: '100%',
        height: SCREEN_WIDTH * 0.5,
        resizeMode: 'cover',
    },
    menuItemInfo: {
        padding: 10,
    },
    menuItemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    menuItemDescription: {
        fontSize: 12,
        color: '#626262',
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6B3E26',
        padding: 15,
    },
    cartCard: {
        width: SCREEN_WIDTH * 0.9,
        maxWidth: 350,
        height: 58,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    cartDetails: {
        fontSize: 18,
        color: '#6B3E26',
    },
});

export default ViewCartComponent;