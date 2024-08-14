import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

/**
 * @function Buttons - The buttons to toggle between GBP and USD
 * @var onPressGBP - The function to call when the GBP button is pressed
 * @var onPressUSD - The function to call when the USD button is pressed
 * @var activeCurrency - The currently active currency
 * @function handlePressGBP - Sets the active currency to GBP and calls the onPressGBP function
 * @function handlePressUSD - Sets the active currency to USD and calls the onPressUSD function
 * @function setActiveCurrency - Sets the active currency
 * @returns - The buttons to toggle between GBP and USD
 * @interface ButtonsProps - The props for the Buttons component
 * @returns - The buttons to toggle between GBP and USD
 */
interface ButtonsProps {
    onPressGBP: () => void;
    onPressUSD: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onPressGBP, onPressUSD }) => {
    const [activeCurrency, setActiveCurrency] = useState<'GBP' | 'USD'>('GBP');

    const handlePressGBP = () => {
        setActiveCurrency('GBP');
        onPressGBP();
    };

    const handlePressUSD = () => {
        setActiveCurrency('USD');
        onPressUSD();
    };

    return (
        <View style={styles.togglebutttons}>
            <TouchableOpacity onPress={handlePressGBP} style={styles.buttonWrapper}>
                {activeCurrency === 'GBP' ? (
                    <LinearGradient
                        colors={['#5569FD', '#37CCFE']}
                        style={styles.buttonleft}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.text}>GBP</Text>
                    </LinearGradient>
                ) : (
                    <View style={[styles.buttonleft, styles.inactiveButton]}>
                        <Text style={styles.text}>GBP</Text>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressUSD} style={styles.buttonWrapper}>
                {activeCurrency === 'USD' ? (
                    <LinearGradient
                        colors={['#5569FD', '#37CCFE']}
                        style={styles.buttonright}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <Text style={styles.text}>USD</Text>
                    </LinearGradient>
                ) : (
                    <View style={[styles.buttonright, styles.inactiveButton]}>
                        <Text style={styles.text}>USD</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 150,
        height: 70,
    },
    buttonleft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 36,
        borderBottomLeftRadius: 36,
    },
    buttonright: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 36,
        borderBottomRightRadius: 36,
    },
    inactiveButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.dark.tint,
    },
    text: {
        color: Colors.dark.text,
        fontSize: 20,
        textAlign: 'center',
    },
    togglebutttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: 300,
    },
});

export default Buttons;
