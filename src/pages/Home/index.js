import React from 'react'; 
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/icon.png';
import StyleSheet from './styles.js';

export default function Home() {
    return (
        <View>
            <View>
                <Image source={logoImg}/>
                <Text style={StyleSheet.headerText}>
                    Teste
                </Text>
            </View>
        </View>
        
    );

}