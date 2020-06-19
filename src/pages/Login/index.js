import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import styles from './styles.js';
import logoImg from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';


export default function Login() {


    const navigate = useNavigation()
    function navigateBack() {
        navigate.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image style={ styles.image } source={logoImg}/>
               
                <TextInput style={styles.input} placeholder="CPF"/>
                <TextInput style={styles.input} placeholder="Data de nascimento"/>   

                <TouchableOpacity style={styles.buttonLogin} onPress={Login()}>
                <Text style={styles.loginText }>
                    Login
                </Text>
                </TouchableOpacity>             
            </View>
        </View>
    )
}