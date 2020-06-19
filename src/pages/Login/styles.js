import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1679c5',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,

    },

    buttonLogin:{
        width:300,
        height:42,
        backgroundColor:'#3498db',
        marginTop:10,
        borderRadius:4,
        alignItems:'center',
        justifyContent: 'center'
    },
    loginText:{
        fontSize:16,
        fontWeight: 'bold',
        color:'#fff'
    },
    body:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    }, 

    image: {
        width:150, 
        height:150
    },

    input:{
        marginTop:10,
        padding:15, 
        width:300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    }, 

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 22, 
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30, 
        marginBottom: 16, 
        marginTop: 40,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380' 
    }
});