import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const myButton = (props) => {
    const { label, action } = props;

    return (

        <View style={styles.container}>

            <Pressable
                onPress={() => action()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
};

export default myButton;
