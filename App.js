/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  return (
        <View style={styles.container}>
          <View style={styles.block1}>
          <MapView 
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
          />
          </View>
          <View style={styles.block2}>
            <View style={styles.top}>
              <View style={styles.left}>
                <View style={styles.gym}>
                 <Text style={styles.text1}>Gym Beam</Text>
                </View>
                <View style={styles.work}>
                 <Text style={styles.text2}>Workout Center</Text>
                </View>
                <View style={styles.review}>
                 <Text style={styles.text2}>4.4 <Text style={styles.stars}>★★★★</Text></Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.mi}>
                 <Text style={styles.text1}>0.8 mi</Text>
                </View>
                <View style={styles.min}>
                 <Text style={styles.text2}>7 min</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}><Text style={styles.textMin}>🚶 9 min</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.textMin}>🚴 7 min</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.textMin}>🚘 4 min</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.textMin}>🚍 5 min</Text></TouchableOpacity>
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    width: '100%',
    height: '100%',
  },
  block1:{
    flex: 0.8,
  },
  block2:{
    flex: 0.2,
    marginTop: -4,
    marginHorizontal: -11,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 26,
    backgroundColor: '#f8f9fa'
  },
  top:{
    flex: 0.6,
    borderRadius: 26,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  left:{
    flex: 0.6,
  },
  gym:{
    flex: 0.33,
  },
  work:{
    flex: 0.33,
  },
  review:{
    flex: 0.33,
  },
  right:{
    flex: 0.4,
    alignItems: 'center',
  },
  mi:{
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  min:{
    flex: 0.5,
    justifyContent: 'flex-start',
  },
  bottom:{
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    margin: 1,
    padding: 1,
    fontSize: 21,
    color : '#212121',
    marginHorizontal: 25,
  },
  text2:{
    margin: -1,
    padding: 1,
    fontSize: 18,
    marginHorizontal: 25,
  },
  stars:{
    color: '#fb8500'
  },
  textMin:{
    color: '#fff',
    fontWeight: '500'
  },
  button:{
    backgroundColor: '#51dc',
    borderRadius: 20,
    width: 88,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
});

export default App;
