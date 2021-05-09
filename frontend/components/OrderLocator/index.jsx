import React from 'react';
import {
    View, Text, StyleSheet, Dimensions,
} from 'react-native';
// import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default function OrderBuilder() {
    return (
        <View style={styles.container}>
            <Text>Order Builder</Text>
            {/* <MapView style={styles.map} /> */}
        </View>
    );
}
