import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SandwichText({ children }) {
    const styles = StyleSheet.create({
        container: { flexDirection: 'row', alignItems: 'center' },
        lineLeft: {
            flex: 1, height: 1, backgroundColor: 'black', marginRight: 10,
        },
        lineRight: {
            flex: 1, height: 1, backgroundColor: 'black', marginLeft: 10,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.lineLeft} />
            <View>
                {children}
            </View>
            <View style={styles.lineRight} />
        </View>
    );
}
