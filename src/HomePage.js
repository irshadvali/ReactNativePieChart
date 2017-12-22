import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from './Pie'

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={100}
          series={[10, 20, 30, 40]}
          colors={['#EF5350', '#00838F', '#1DE9B6', '#F9A825']} />
           <View>
        <Pie
          radius={22}
          innerRadius={20}
          series={[15, 20, 25, 40]}
          colors={['#EF5350', '#00838F', '#1DE9B6', '#F9A825']} />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>20</Text>
          </View>
          </View>
        <View>
          <Pie
            radius={50}
            innerRadius={45}
            series={[60]}
            colors={['#f00']}
            backgroundColor='#ddd' />
          <View style={styles.gaugeTwo}>
            <Text style={styles.gaugeTextTwo}>60%</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 15,
  },
  gaugeTwo: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeTextTwo: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
})