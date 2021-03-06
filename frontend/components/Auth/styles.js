import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        width: '100%',
    },

    header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
    },

    formData: {
        marginBottom: 30,
    },

    seprator: {
        marginVertical: 30,
    },
    error: {
        color: 'red',
        marginBottom: 50,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
});

export default authStyles;
