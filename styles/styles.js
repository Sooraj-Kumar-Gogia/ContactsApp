import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },

    ContactCard: {
        width: '100%',
        height: 50,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    
    NameLetter: {
        width: '13%',
        height: '100%',
        backgroundColor: '#5579c6',
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        margin: 15,
    },

    FirstLetter: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    }, 

    Name: {
        fontSize: 15,
        color: 'black'

    }, 

    DetailInContactCard: {
        width: '80%',
        paddingVertical: '1%',
    }, 
    AppTitle: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: 'black',
        margin: 10, 
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        
    },
    Header: {
        width: '100%',
        backgroundColor: 'lightgrey',
        shadowColor: 'lightgrey',
        shadowOffset: 10,
    },
    Heading2: {
        fontSize: 18,
        // padding: '1%',
        paddingHorizontal: '1%',
        marginLeft: '2%',
        marginTop: '2%',
        paddingVertical: '2%',
        fontWeight: 'bold'
    }













});