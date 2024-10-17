import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export function SettingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <Text style={styles.initial}>C</Text>
        </View>
        <Text style={styles.name}>Cephas Ntiamoah</Text>
        <Text style={styles.email}>cephasntiamoah10@gmail.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("PaymentMethod")}>
          <View style={styles.menuCard}>
            <Icon name="credit-card" size={20} color="#f5f5f5" />
          </View>
          <Text style={styles.menuText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("OrderHistory")}>
          <View style={styles.menuCard}>
            <Icon name="history" size={20} color="#f5f5f5" />
          </View>
          <Text style={styles.menuText}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Feedback")}>
          <View style={styles.menuCard}>
            <Icon name="comment" size={20} color="#f5f5f5" />
          </View>
          <Text style={styles.menuText}>Send Feedback</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuCard}>
            <Icon name="cog" size={20} color="#f5f5f5" />
          </View>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuCard}>
            <Icon name="sign-out" size={20} color="#f5f5f5" />
          </View>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#5E3A16',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCard: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5E3A16',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    color: '#fff',
    fontSize: 40,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    color: '#999',
    fontSize: 14,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#333',
  },
});