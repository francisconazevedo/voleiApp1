import React from 'react'; 
import { Feather } from '@expo/vector-icons'
import { View, Image,  TouchableOpacity } from 'react-native'
import styles from './styles.js';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ListItem } from 'react-native-elements';



export default function Teams() {
    return (
        <View>
           <View style={styles.header}>
                <Image source={logoImg} onPress={navigateToTeams}/>
                <Text style={styles.headerText}>
                    {team.name}
                </Text>
                <Feather name='arrow-left' size={20} color="blue" />
            </View> 
            <ScrollView style={ styles.card}>
                <ListItem 
                    key={i}
                    leftAvatar={ { source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider/>
            </ScrollView>
        </View>
        
    )
}