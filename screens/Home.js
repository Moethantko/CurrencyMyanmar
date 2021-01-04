import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from '../components/Header';
import LatestStatus from '../components/LatestStatus';
import Row from '../components/Row';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const data = [
    {key: 1, name: 'USD', currency: '1350.0', fullName: 'Dollar'},
    {key: 2, name: 'EUR', currency: '1629.5', fullName: 'Euro'},
    {key: 3, name: 'GBP', currency: '1799.9', fullName: 'Pound Sterling'}, 
    {key: 4, name: 'AUD', currency: '1016.9', fullName: 'Australian Dollar'}, 
    {key: 5, name: 'THB', currency: '44.289', fullName: 'Thai Baht'}, 
    {key: 6, name: 'SGD', currency: '1002.9', fullName: 'Singapore Dollar'},
    {key: 7, name: 'JPY', currency: '1286.3', fullName: 'Japanese Yen'}, 
    {key: 8, name: 'KRW', currency: '122.33', fullName: 'Korean Won'},  
    {key: 9, name: 'HKD', currency: '171.44', fullName: 'PouHong Kong Dollar'}, 
    {key: 10, name: 'PHP', currency: '27.65', fullName: 'Philippines Pesco Sterling'}, 
    {key: 11, name: 'MYR', currency: '329.31', fullName: 'Malaysian Ringgit'}, 
]

const Home = () => {

    return (
        <View>
            <Header />
            <LatestStatus />
            <ScrollView>
                {
                    data.map(item => <Row dataItem={item} />)
                }
            </ScrollView>
        </View>
    );

}

export default Home;