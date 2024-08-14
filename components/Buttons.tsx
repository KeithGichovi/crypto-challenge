import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
/***
 * 
 * 
 * @function Buttons - The buttons to toggle between GBP and USD
 * @var onPressGBP - The function to call when the GBP button is pressed
 * @var onPressUSD - The function to call when the USD button is pressed
 * @returns - The buttons to toggle between GBP and USD
 * @interface ButtonsProps - The props for the Buttons component
 * @returns - The buttons to toggle between GBP and USD
 */
interface ButtonsProps {
    onPressGBP: () => void;
    onPressUSD: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onPressGBP, onPressUSD}) => {    
    return (
        <View style={styles.togglebutttons}>
            <TouchableOpacity onPress={onPressGBP} style={styles.button}>
            <Text style={styles.text}>GBP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressUSD} style={styles.button}>
            <Text style={styles.text}>USD</Text>
            </TouchableOpacity>
        </View>
    
    )
}

const styles = StyleSheet.create({

    button:{
        backgroundColor: Colors.dark.tint,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 12,
        width: 130,
        textAlign: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.dark.text,
        fontSize: 20,
        textAlign: 'center',
    },
    togglebutttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
        width: 300,
    }

});

export default Buttons;