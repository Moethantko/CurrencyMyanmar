import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5d8263',
        paddingVertical: 25,
        paddingHorizontal: 13,
        marginTop: 23,
    },
    text: {
        color: 'gold',
        fontSize: 20,
    }
});

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Exchange Kyat</Text>
        </View>
    );
}

export default Header;