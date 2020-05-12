import React from 'react'; 
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles.js';
import logoImg from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native'

export default function Notices() {
    const navigate = useNavigation();

    function navigateBack(){
        navigate.goBack()
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Noticias
                </Text>
                <TouchableOpacity onPress={navigateBack}>
                <Feather name='arrow-left' size={20} color="#48619D" />
                </TouchableOpacity>
            </View> 
        </View>
    )
}