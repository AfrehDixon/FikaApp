// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';

// const MenuItem = ({ title, description, imageSource ,navigation}) => (
//     // cosnt navigation = useNavigation();
//   <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('CartDetails')}>
//     <Image source={imageSource} style={styles.menuItemImage} />
//     <View style={styles.menuItemInfo}>
//       <Text style={styles.menuItemTitle}>{title}</Text>
//       <Text style={styles.menuItemDescription}>{description}</Text>
//     </View>
//     <TouchableOpacity style={styles.addButton}>
//       <Icon name="add" size={24} color="#4CAF50" />
//     </TouchableOpacity>
//   </TouchableOpacity>
// );

// const VenueDetailsComponent = ({ navigation: any }) => {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#5E3A16"
//         translucent={true}
//       />

//       <ScrollView style={styles.content}>
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>COFFEE SERIES</Text>
//             <TouchableOpacity>
//               <Text style={styles.viewAll}>View all</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {/* <TouchableOpacity onPress={()=> navigation.navigate('CartDetails')}> */}
//               <MenuItem
//                 title="Love Cocoa Coffee Cream Latte"
//                 description="Fresh coconut milk, layered with whipped coffee"
//                 imageSource={require('../../assets/image/coffee1.jpeg')}
//               />
//             {/* </TouchableOpacity> */}
//             {/* <TouchableOpacity> */}
//               <MenuItem
//                 title="Fika Vanilla Americano"
//                 description="Whipped coffee, vanilla, brown sugar syrup"
//                 imageSource={require('../../assets/image/coffee1.jpeg')}
//               />
//             {/* </TouchableOpacity> */}
//           </ScrollView>
//         </View>

//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>SIGNATURE</Text>
//             <TouchableOpacity>
//               <Text style={styles.viewAll}>View all</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <MenuItem
//               title="Chocolatev"
//               description="" // Add description if available
//               imageSource={require('../../assets/image/coffee1.jpeg')}
//             />
//             <MenuItem
//               title="Caramel Lotus"
//               description="" // Add description if available
//               imageSource={require('../../assets/image/coffee1.jpeg')}
//             />
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <TouchableOpacity style={styles.cart}>
//         <Icon name="cart-outline" size={24} color="white" />
//         <Text style={styles.cartText}>Your Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     paddingTop: 80,
//     backgroundColor: '#5E3A16',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 10,
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     color: 'white',
//     marginLeft: 10,
//   },
//   content: {
//     flex: 1,
//   },
//   section: {
//     marginVertical: 10,
//     width: '100%',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   viewAll: {
//     color: '#4CAF50',
//     fontSize: 14,
//   },
//   menuItem: {
//     width: '31%',
//     marginTop: 10,
//     marginLeft: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   menuItemImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//   },
//   menuItemInfo: {
//     padding: 10,
//   },
//   menuItemTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 5,
//   },
//   menuItemDescription: {
//     fontSize: 12,
//     color: '#626262',
//   },
//   addButton: {
//     position: 'absolute',
//     right: 10,
//     bottom: 10,
//     backgroundColor: 'white',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cart: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#6B3E26',
//     padding: 15,
//   },
//   cartText: {
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

// export default VenueDetailsComponent;
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => navigation.navigate('CartDetails', { item })}
  >
    <Image source={item.imageSource} style={styles.menuItemImage} />
    <View style={styles.menuItemInfo}>
      <Text style={styles.menuItemTitle}>{item.title}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
    </View>
    <TouchableOpacity style={styles.addButton}>
      <Icon name="add" size={24} color="#4CAF50" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const VenueDetailsComponent = () => {
  const navigation = useNavigation();

  // Grouped Menu Items Data
  const sections = [
    {
      title: 'Coffee Series',
      data: [
        {
          id: '1',
          title: 'Love Cocoa Coffee Cream Latte',
          description: 'Fresh coconut milk, layered with whipped coffee',
          imageSource: require('../../assets/image/coffee1.jpeg'),
        },
        {
          id: '2',
          title: 'Fika Vanilla Americano',
          description: 'Whipped coffee, vanilla, brown sugar syrup',
          imageSource: require('../../assets/image/coffee1.jpeg'),
        },
      ],
    },
    {
      title: 'Signature',
      data: [
        {
          id: '3',
          title: 'Chocolate',
          description: 'Rich chocolate with a touch of espresso',
          imageSource: require('../../assets/image/coffee1.jpeg'),
        },
        {
          id: '4',
          title: 'Caramel Lotus',
          description: 'Caramel and lotus biscuit latte',
          imageSource: require('../../assets/image/coffee1.jpeg'),
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5E3A16" translucent={true} />

      <ScrollView style={styles.content}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View all</Text>
              </TouchableOpacity>
            </View>

            {/* Horizontal Scroll for each section */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {section.data.map((item) => (
                <MenuItem key={item.id} item={item} navigation={navigation} />
              ))}
            </ScrollView>
          </View>
        ))}
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
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 80, // Space for the cart button
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAll: {
    color: '#4CAF50',
    fontSize: 14,
  },
  // Menu item for horizontal scrolling
  menuItem: {
    width:'35%', // Each item takes up a fixed width
    marginRight: 10, // Spacing between items
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItemImage: {
    width: '100%',
    height: 120,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default VenueDetailsComponent;
