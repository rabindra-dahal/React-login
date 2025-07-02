import React, { useEffect, useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const LoginValidation = () => {
  // login data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // login specific error data
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // turn on or off login buttton based on correct/incorrect login data
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(email.trim() === '');
    setIsButtonDisabled(password.trim() === '');
    setIsButtonDisabled(emailError.trim() !== '' || email.trim() === '');
    setIsButtonDisabled(passwordError.trim() !== '' || password.trim() === '');
  }, [email, password, emailError, passwordError]);

  const validateEmail = (text:string) => {
    if (!text.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };

  const validatePassword = (text:string) => {
    if (text.length < 6) {
      setPasswordError('Invalid password length');
    } else {
      setPasswordError('');
    }
    setPassword(text);
  };

  const handleLogin = () => {
    if ((emailError === '' && email !== '') || (passwordError === '' && password !== '')) {
      // Proceed with form submission
      console.log('Form submitted successfully!');
    } else {
      console.log('Please correct the errors.');
    }
  };
  
  
  return (
    <KeyboardAvoidingView style={styles.container}  behavior='height'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.vcontainer}>
          <Image 
            source={require('../assets/images/react-logo.png')}
            style={styles.logo} 
          />
          <Text style={styles.title}>Login Validation Form </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={validateEmail}
            onBlur={() => validateEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={validatePassword}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          <View style={styles.btnContainer}>
            <Button title="Login" 
              onPress={handleLogin}
              disabled={isButtonDisabled}
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
    width: 200
  },
});

export default LoginValidation;