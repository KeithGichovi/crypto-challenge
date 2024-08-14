import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
/***
 * 
 * @function Card - The card component to display the cryptocurrency and its price
 * @var Crypto - The name of the cryptocurrency
 * @var CryptoPrice - The price of the cryptocurrency
 * @var onPress - The function to call when the refresh button is pressed
 * @var currencyType - The type of currency to display the price in
 * @interface CardProps - The props for the Card component
 * @returns - The card component to display the cryptocurrency and its price
 * 
 */
interface CardProps {
    Crypto: string;
    CryptoPrice: number;
    onPress: () => void;
    currencyType: string;
}

const Card: React.FC<CardProps> =({ Crypto, CryptoPrice, onPress, currencyType }) => {

    const currencies = {
        "USD": "$",
        "GBP": "£",
    }
    /***
     * 
     * @function handleCurrency - Formats the price of the cryptocurrency
     * @param CryptoPrice - The price of the cryptocurrency
     * @param currencyType - The type of currency to display the price in
     * @var currencySymbol - The symbol of the currency, set to an empty string by default
     * @var formattedPrice - The formatted price of the cryptocurrency
     * @function new Intl.NumberFormat - Formats the price of the cryptocurrency
     * @returns - The formatted price of the cryptocurrency
     * 
     */
    const handleCurrency = (CryptoPrice: number, currencyType: string) => {

        let currencySymbol = '';

        if(currencyType === 'USD') {
            currencySymbol = currencies.USD;
        }else {
            currencySymbol = currencies.GBP;
        }


        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(CryptoPrice);

        return `${currencySymbol} ${formattedPrice}`;
    }

    const price = handleCurrency(CryptoPrice, currencyType);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FB79B2', '#F9A29A']}  
                style={styles.gradient} 
            >
                <TouchableOpacity style={styles.refresh} onPress={onPress}>
                    <Ionicons name="refresh" size={40} color={Colors.dark.text} />
                </TouchableOpacity>
                <Text style={styles.text}>
                    {Crypto}
                </Text>
                <Text style={styles.cryptoPrice}>
                    {price}
                </Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.dark.text,
        borderRadius: 12,
    },
    gradient: {
        flex: 1,
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    text: {
        color: Colors.dark.text,
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    refresh: {
        top: 0,
        right: 0,
        position: 'absolute',
        padding: 10,
        color: Colors.dark.text,
    },
    cryptoPrice: {
        color: Colors.dark.text,
        fontSize: 50,
    }
});

export default Card;
