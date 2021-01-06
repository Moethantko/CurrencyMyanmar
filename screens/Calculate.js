import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import fetchData from '../components/Api';

import Header from '../components/Header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        height: 60,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginTop: 25,
        marginHorizontal: 10,
        padding: 12,
    },
    pickerWrapper: {
        marginVertical: 25,
        marginHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 2,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25,
    }

});

class CalculateScreen extends React.Component {

    state = {
        topAmount: '0.0',
        currencies: [],
        selectedCurrency: '',
        bottomAmount: '0.0',
        rates: [],
    }

    componentDidMount() {
        fetchData('pickerItem')
        .then(result => {
            this.setState({currencies: [...result]});
        });

        fetchData('rate')
        .then(result => {
            this.setState({
                rates: [...result],
            });
        });

    }

    // updateConversion = (value) => {
    //     this.setState({
    //         topAmount: value,
    //     })
    //     let currentPrice = parseInt(value);
    //     for (let i = 0; i < this.state.rates.length; i++) {
    //         if (this.state.selectedCurrency === this.state.rates[i].name) {
    //             //currentPrice = currentPrice + this.state.rates[i].currency;
    //             console.log(this.state.rates[i].currency)
    //         }
    //     }

    //     this.setState({
    //         bottomAmount: currentPrice+ "",
    //     })
    // }

    render() {
        return (
            <View>
                <Header />
                <TextInput style={styles.amount}
                 keyboardType='numeric'
                 value={this.state.topAmount}
                 onChangeText={() => console.log("test")}
                 />
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        placeholder={{
                            label: "Select a currency",
                            value: null,
                        }}
                        onValueChange={(value) => this.setState({selectedCurrency: value})}
                        items={this.state.currencies}
                        value={this.state.selectedCurrency}
                    />
                </View>
                <View style={styles.icons}>
                    <Icon name="arrow-down" size={25} color="#273E47" />
                    <Icon name="arrow-up" size={25} color="#273E47" />
                </View>
                <TextInput style={styles.amount}
                 keyboardType='numeric'
                 value={this.state.bottomAmount}
                 onChangeText={
                     (value) => {
                         this.setState({
                             bottomAmount: value,
                         })
                         
                     }
                 }
                />
                
            </View>
        );
    }

}

export default CalculateScreen;