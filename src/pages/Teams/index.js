import React from 'react'; 
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js';
import logoImg from '../../assets/icon.png';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ListItem } from 'react-native-elements';

import { useNavigation, useRoute } from '@react-navigation/native'



export default function Teams() {
    const navigate = useNavigation();
    const route = useRoute();

    const team = route.params.team;
    function navigateBack(){
        navigate.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    {team.name}
                </Text>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={20} color="#48619D" />
                </TouchableOpacity>
                
            </View> 
           
            
        </View>
        
    )
}