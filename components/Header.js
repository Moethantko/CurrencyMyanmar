import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#273E47',
        padding: 26,
        marginTop: 23,
    },
    text: {
        color: '#3DFAFF',
        fontSize: 20,
    }
});

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Currency Exchange</Text>
        </View>
    );
}

export default Header;