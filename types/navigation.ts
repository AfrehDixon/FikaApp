import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Product, Venue, Order, Cart } from './models';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Register: undefined;
    OTPVerification: {
        phoneNumber: string;
        email: string;
    };
    Home: undefined;
    VenueList: undefined;
    VenueDetails: {
        venueId: string;
        venueName: string;
    };
    ProductList: {
        venueId: string;
        category?: string;
    };
    ProductDetails: {
        productId: string;
        product: Product;
    };
    Cart: undefined;
    Checkout: {
        cart: Cart;
    };
    PaymentMethod: {
        orderId: string;
        amount: number;
    };
    PaymentWebview: {
        paymentUrl: string;
        orderId: string;
        paymentId: string;
    };
    OrderSuccess: {
        orderId: string;
    };
    OrderHistory: undefined;
    Profile: undefined;
    Settings: undefined;
    LoyaltyPoints: undefined;
    QRCode: {
        code: string;
        points: number;
    };
};

export type NavigationProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<
    RootStackParamList,
    T
>;

export type RoutePropType<T extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    T
>;