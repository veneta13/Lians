import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const TitlePage = ({ navigation }) => {
    function handleCheckOrders() {
        // If user is logged in already, direct them to the page
        // Otherwise, direct them to the login page
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.mainPageStyle}>
            <ImageBackground style={styles.bgImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Lians</Text>
                </View>

                <Button style={styles.navButton} title="Check Orders" onPress={handleCheckOrders} />
                <Button style={styles.navButton} title="Find out more" />
            </ImageBackground>
        </View>
    );
};

export default TitlePage;
