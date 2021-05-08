import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    mainPageStyle: {
        width : '100%',
        height : '100%' ,
    },

    titleContainer: {
        width: '100%',
        marginTop : '30%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        color : '#fff',
        marginBottom: 50,
    },

    bgImage: {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        position : 'absolute',
    },
});

export default styles;