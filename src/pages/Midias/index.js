import React from 'react'; 
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import logoImg from '../../assets/icon.png';

import styles from './styles.js';
import { ScrollView } from 'react-native-gesture-handler';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]

export default function Midias() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    TeamViniVôlei
                </Text>
                <Button
                    title="Login"
                />
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