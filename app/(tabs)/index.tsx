import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import Card from '@/components/card';
import { Picker } from '@react-native-picker/picker';
import Buttons from '@/components/Buttons';
import { LinearGradient } from 'expo-linear-gradient';


/***
 * 
 * @function HomeScreen - The main screen of the application
 * @var selectedCrypto - The selected cryptocurrency
 * @var selectedCurrency - The selected currency
 * @var cryptoValue - The value of the selected cryptocurrency
 * @function setSelectedCrypto - Sets the state of the selected cryptocurrency
 * @function setSelectedCurrency - Sets the state of the selected currency
 * @function setCryptoValue - Sets the state of the selected cryptocurrency and its price
 * @function fetchCryptoPrice - Fetches the current price of the selected cryptocurrency
 * @function useEffect - Calls the fetchCryptoPrice function when the selected cryptocurrency or currency changes
 * @returns - The main screen of the application
 * 
 * 
 */
export default function HomeScreen() {

  const [selectedCrypto, setSelectedCrypto] = useState('eth-ethereum');
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');
  const [cryptoValue, setCryptoValue] = useState({ "name": "", "price": 0 });

  /***
   * 
   * @function fetchCryptoPrice - Fetches the current price of the selected cryptocurrency
   * @var response - Fetches the data from the API
   * @var data - Converts the response to JSON
   * @var price - Extracts the price of the selected cryptocurrency
   * @var name - Extracts the name of the selected cryptocurrency
   * @function setCryptoValue - Sets the state of the selected cryptocurrency and its price
   * @function catch - Logs an error if the data cannot be fetched
   * 
   * 
   */
  const fetchCryptoPrice = async () => {  
    try{

      const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${selectedCrypto}?quotes=${selectedCurrency}`);
      const data = await response.json();

      const price = data.quotes[selectedCurrency].price;
      const name = data.name;

      setCryptoValue({
        "name": name,
        "price": price,
      })

    } catch (error) {
      console.log('Error fetching data', error);
    }
    
  }

  useEffect(() => {
    fetchCryptoPrice();
  }, [selectedCrypto, selectedCurrency]);


  return (
    
    
    <View style={styles.container}>
      <LinearGradient colors={['#271B38', '#1E3562']} style={styles.gradient}>
        <Picker
            selectedValue={selectedCrypto}
            onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
            style={styles.picker}
            mode={'dropdown'}
            dropdownIconColor={Colors.dark.tint}
            numberOfLines={1}
          >
            <Picker.Item label="ETHEREUM - ETH" value='eth-ethereum' color={Colors.dark.tint} enabled={true}/>
            <Picker.Item label="BITCOIN - BTC" value='btc-bitcoin' color={Colors.dark.tint} />
          </Picker>

          <Card 
            onPress={fetchCryptoPrice}
            Crypto={cryptoValue.name}
            CryptoPrice={cryptoValue.price}
            currencyType={selectedCurrency}
          />
          <Buttons 
            onPressGBP={() => setSelectedCurrency('GBP')}
            onPressUSD={() => setSelectedCurrency('USD')}
          />
        </LinearGradient>
      </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  gradient:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.dark.text,
    fontSize: 20,
    textAlign: 'center',
  },
  picker: {
    // backgroundColor: Colors.dark.background,
    width: 300,
    height: 70,
    borderRadius: 12,
    borderColor: '#2EAEC8',
    borderWidth: 2,
    marginBottom: 20,
    color: '#2EAEC8',
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }
});
