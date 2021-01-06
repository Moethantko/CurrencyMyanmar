import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './components/Header';
import LatestStatus from './components/LatestStatus';
import Row from './components/Row';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#fff',
  },
});


export default class App extends React.Component {

  state = {
      rates: [],
      lastUpdated: '',
      bank: '',
  }

  componentDidMount() {

    this.getData();

  }

  getData = async () => {

    let responseRates = [];

    try {

        const response = await fetch('http://forex.cbm.gov.mm/api/latest');
        let {rates, timestamp, info} = await response.json();

        const responseWithFullNames = await fetch('http://forex.cbm.gov.mm/api/currencies');
        const {currencies} = await responseWithFullNames.json();

        const keysArr = Object.keys(rates);
        const valuesArr = Object.values(rates);

        let id = 0;

        for (let i = 0; i < keysArr.length; i++) {
            let temp = {};
            temp['key'] = id++;
            temp['name'] = keysArr[i];
            temp['currency'] = valuesArr[i];
            temp['fullName'] = currencies[keysArr[i]];

            responseRates.push(temp);
        }

        timestamp = new Date(timestamp * 1000) + "";

        this.setState({
          rates: responseRates,
          lastUpdated: timestamp,
          bank: info,
        });
        
        
    } catch (err) {
        console.log(err);
    }

  }

  render() {
      return (
          <View>
              <Header />
              <LatestStatus dateTime={this.state.lastUpdated} bank={this.state.bank} />
              <ScrollView>
                  {
                      this.state.rates.map(item => <Row key={item.key} dataItem={item} />)
                  }
              </ScrollView>
          </View>
      );
  }

}

