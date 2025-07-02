import React from 'react';
import { Alert, Button, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Index = () => {
  return (
    <KeyboardAvoidingView style={styles.container}  behavior='height'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.vcontainer} >
          <Image 
            source={require('../assets/images/react-logo.png')}
            style={styles.logo} 
          />
          <Text style={styles.title}>Simple Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.btnContainer}>
              <Button title="Login" 
                onPress={ () => {
                  Alert.alert('Login data submitted.'); Keyboard.dismiss();
                  }
                }
              />
          </View>
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  vcontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
    width: 200
  },
});

export default Index;
