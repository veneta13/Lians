import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from "./styles";
import MyButton from "../Buttons/button";

const titlePage = () => {
    return (
        <View style={styles.mainPageStyle}>

            <ImageBackground
                source ={require("../../assets/boxes.jpg")}
                style = {styles.bgImage}
            />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Lians</Text>

            </View>

            <MyButton label = "Check Order"/>
            <MyButton label = "Find out more"/>


        </View>
    );
};

export default titlePage;