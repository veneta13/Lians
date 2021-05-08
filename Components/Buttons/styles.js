import {StyleSheet} from 'react-native';

const myButtonStyle = StyleSheet.create ({
    button : {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
         marginTop: 15,
    },

    buttonText : {
        fontSize: 30
    },

    container : {
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
    },
});

export default myButtonStyle;