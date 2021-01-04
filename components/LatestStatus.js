import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#090f12',
        padding: 5,
    },
    text: {
        color: '#3DFAFF',
        fontSize: 10,
    }
});

const LatestStatus = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Latest updated:</Text>
            <Text style={styles.text}>30/12/2020 03:00 AM</Text>
        </View>
    );
}

export default LatestStatus;