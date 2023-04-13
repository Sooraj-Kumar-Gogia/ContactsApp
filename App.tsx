import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, FlatList, Alert, Image, ScrollView } from 'react-native';
import Contact from 'react-native-contacts';
import { styles } from './styles/styles';
import ShowContact from './components/ShowContact';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);


  const getPermission = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal'
    }).then(res => {
      console.log(res)
      if (res === 'granted') {
        console.log('You can use the contacts')
        Contact.getAll().then(contacts => {
          setContacts(contacts);
        })
      }
      else { console.log('Permission Denied!') }
    })
  }

  useEffect(() => {
    getPermission();
  }, []);


  // console.log(contacts);
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.displayName < b.displayName) {
      return -1;
    }
    if (a.displayName > b.displayName) {
      return 1;
    }
    return 0;
  });

  console.log(sortedContacts);

  // console.log(contacts[0].displayName);
  // console.log(contacts[0].phoneNumbers[0].number);


  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.AppTitle}>Contacts</Text>
      </View>
      <ScrollView>
        <Text style={styles.Heading2}>All Contacts</Text>
        {(sortedContacts.sort()).map((item, index) => (
          <View key={index}>
            <View style={styles.ContactCard}>
              <View style={styles.NameLetter}>
                <Text style={styles.FirstLetter}>{item.displayName[0]}</Text>
              </View>
              <View style={styles.DetailInContactCard}>
                <Text style={styles.Name}>{item.displayName}</Text>
                <Text>{item.phoneNumbers[0].number}</Text>
              </View>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
};






export default App;
