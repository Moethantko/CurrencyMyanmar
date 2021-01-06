import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 23, 
        backgroundColor: '#f8f8f8',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
        color: '#273E47',
    },
    secondaryText: {
        fontSize: 10,
        color: '#273E47',
    },
    currencyView: {
        alignItems: 'flex-end',
    },
});

const Row = (props) => {

    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.text}>{props.dataItem.name}</Text>
                <Text style={styles.secondaryText}>{props.dataItem.fullName}</Text>
            </View>

            <View style={styles.currencyView}>
                <Text style={styles.text}>{props.dataItem.currency}</Text>
                <Text style={styles.secondaryText}>MMK</Text>
            </View>
            
        </View>
    )
}

export default Row;