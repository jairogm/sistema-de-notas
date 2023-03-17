import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        gap: '10px',
        width: "100%",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#43a1c9',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor: 'green'
    },
    formItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '30px',
        justifyContent: 'space-between',
        width: '100%',
        height: '40px',
    },
    formInput: {
        borderBottomWidth: '2px',
        borderBottomColor: 'black',
    },

    formLabel: {
        fontWeight: 'bold'
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: '25px'
    },
    btn: {
        padding: '10px',
        backgroundColor: 'green',
        borderRadius: '5px'
    },
    btnText: {
        color: "#f2f2f2"
    },

    errorText: {
        color: "red"
    }
});