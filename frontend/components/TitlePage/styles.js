import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainPageStyle: {
        paddingHorizontal: 30,
        paddingVertical: 100,
        width: '100%',
        height: '100%',
    },

    titleContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: '30vh',
    },

    title: {
        fontSize: 40,
        color: '#000',
        marginBottom: 50,
    },

    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    navButton: {
        marginVertical: 10,
    },
});

export default styles;
