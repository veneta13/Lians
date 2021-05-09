import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function OrderLocator(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const warehouses = [
  { latitude:25 , longitude:73, title: "Warehouse X", product: "Mail" }, 
  { latitude:28 , longitude:73, title: "Warehouse Y", product: "No products" }, 
  { latitude:27 , longitude:77, title: "Warehouse Z", product: "No products" }, 
  { latitude:28 , longitude:74, title: "Warehouse A", product: "No products" }, 
  { latitude:23 , longitude:79, title: "Warehouse B", product: "Cycle Blaze" },
  { latitude:28.636070 , longitude:77.342990, title: "Warehouse C", product: "Hair Spray" }];

  function distance(lat1, lat2, lon1, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;

    return (12742 * Math.asin(Math.sqrt(a))).toString(); // 2 * R; R = 6371 km
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "waiting";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Warehouses near you! </Text>
      { location ? 
        <MapView 
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        }}>
          <Marker 
            coordinate={{ 
              latitude: location.coords.latitude, 
              longitude: location.coords.longitude}}
            pinColor="blue" 
            title="Your Location"
            description="Your Location"/>
          {warehouses.map((marker, index) => (
            parseFloat(distance(location.coords.latitude, marker.latitude, location.coords.longitude, marker.longitude)) > 5 ?
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.product}
              pinColor="red"
            /> 
            :
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title= {marker.title}
              description= {marker.product}
              pinColor="green"
            /> 
          ))}
      </MapView> :
        <Text> Loading... </Text>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 100,
    fontSize: 20
  },
  paragraph: {
    fontSize: 28,
    textAlign: 'center',
    paddingBottom: 30,
    paddingTop: 50
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
