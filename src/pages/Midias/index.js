import React from 'react'; 
import { Feather } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import logoImg from '../../assets/icon.png';

import styles from './styles.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Midias() {

    const navigate = useNavigation();
    function navigateBack(){
        navigate.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Galeria de videos e imagens
                </Text>
                <TouchableOpacity onPress={navigateBack}>
                <Feather name='arrow-left' size={20} color="#48619D" />
                </TouchableOpacity>
            </View> 
            <View>
          <Card
            image={require('../../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            
          </Card>
          <Card
            image={require('../../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            
          </Card>
          <Card
             image={require('../../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            
          </Card>
        </View>
        </ScrollView>
        
    )
}