import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { TouchableScale } from 'react-native-touchable-scale'; 


import { Container, Content, Header, Form, Item, Button, Label, Input } from 'native-base';

export default function Login() {


  signUpUser = (email, password) => {

    try{
      if(this.state.password.length<6)
      {
        alert("Please enter at least 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        console.log(user)
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }


    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input 
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10, borderRadius: 20 }}
          full
          success
          onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: '#fff', fontSize: 12 }}> Login </Text>
          </Button>

          <Button style={{ marginTop: 10, borderRadius: 20 }}
          full
          primary
          onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: '#fff', fontSize: 12 }}> Sign Up </Text>
          </Button>

          <Button style={{ marginTop: 10, borderRadius: 20 }}
          full
          primary
          onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: '#fff', fontSize: 12 }}> Login With Facebook </Text>
          </Button>

        </Form>
      </Container>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  }
})