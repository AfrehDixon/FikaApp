import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuItem = ({ title, description, imageSource }) => (
    <View style={styles.menuItem}>
        <Image source={imageSource} style={styles.menuItemImage} />
        <View style={styles.menuItemInfo}>
            <Text style={styles.menuItemTitle}>{title}</Text>
            <Text style={styles.menuItemDescription}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={24} color="#4CAF50" />
        </TouchableOpacity>
    </View>
);

const VenueDetailsComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#5E3A16"
                translucent={true}
            />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerTitle}>THE FIKA TEAHOUSE - EAST LEGON</Text>
                    <Text style={styles.headerSubtitle}>12 Tripoli Street, Accra</Text>
                </View>
            </View>

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
                            imageSource={require('../../assets/image/coffee1.jpeg')}
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
                            description=""  // Add description if available
                            imageSource={require('../../assets/image/coffee1.jpeg')}
                        />
                        <MenuItem
                            title="Caramel Lotus"
                            description=""  // Add description if available
                            imageSource={require('../../assets/image/coffee1.jpeg')}
                        />
                    </ScrollView>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.cart}>
                <Icon name="cart-outline" size={24} color="white" />
                <Text style={styles.cartText}>Your Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 80,
        backgroundColor: '#5E3A16',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
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
        width: 200,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    menuItemImage: {
        width: '100%',
        height: 150,
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
    cartText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default VenueDetailsComponent;