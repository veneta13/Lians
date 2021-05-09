import React, { useState } from 'react';
import {
    View, Text, Switch, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingTop: 50
    },
});

export default function Settings() {
    const [sendNotifications, setSendNotifications] = useState(true);
    const [sendEmails, setSendEmails] = useState(true);

    return (
        <View style={styles.container}>
            <Text>Send Notifications</Text>
            <Switch
                value={sendNotifications}
                onValueChange={setSendNotifications}
            />

            <Text>Send Mail</Text>
            <Switch
                value={sendEmails}
                onValueChange={setSendEmails}
            />
        </View>
    );
}
