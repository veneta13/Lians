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
        paddingHorizontal: 30,
    },
    setting: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%',
    },
});

export default function Settings() {
    const [sendNotifications, setSendNotifications] = useState(true);
    const [sendEmails, setSendEmails] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text>Send Notifications</Text>
                <Switch
                    value={sendNotifications}
                    onValueChange={setSendNotifications}
                />
            </View>

            <View style={styles.setting}>
                <Text>Send Mail</Text>
                <Switch
                    value={sendEmails}
                    onValueChange={setSendEmails}
                />
            </View>
        </View>
    );
}
