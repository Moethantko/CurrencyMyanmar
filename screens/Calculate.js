import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import {Picker} from '@react-native-picker/picker';

import Header from '../components/Header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calculationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'lightgray',
        borderWidth: 1,
    },
});

class CalculateScreen extends React.Component {

    render() {
        return (
            <View>
                <Header />
                <View style={styles.calculationContainer} >
                    <TextInput style={styles.input} />
                    <Text>Kyat</Text>
                    <Text>To</Text>
                    <TextInput style={styles.input} />
                    <Text>USD</Text>
                </View>
            </View>
        );
    }

}

export default CalculateScreen;