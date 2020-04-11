import React from 'react'; 
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Teams from '../../components/teams';
import logoImg from '../../assets/icon.png';

import { Button, ListItem } from 'react-native-elements';

import styles from './styles.js';

const list = [
    {
      name: 'Campeonato Feminino',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Inicio: 12/08/2020 Término: 25/10/2020'
    },
    {
      name: 'Dodô Eva e Adão',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Inicio: 12/08/2020 Término: 25/10/2020'
    },
    {
      name: 'Dodô Eva e Adão',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Inicio: 12/08/2020 Término: 25/10/2020'
    },
    {
      name: 'Dodô Eva e Adão',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Inicio: 12/08/2020 Término: 25/10/2020'
    },
    {
      name: 'Dodô Eva e Adão',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Inicio: 12/08/2020 Término: 25/10/2020'
    },
  ]

export default function Home() {
    
    
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    TeamViniVôlei
                </Text>
                <Button
                    title="Login"
                />
            </View> 
            <Text style={styles.title}>
                Nossos times:
            </Text> 
                <View style={{ height: 130, marginTop: 20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <Teams imageUri={require('../../assets/icon.png')} name={'img1'} />    
                        <Teams imageUri={require('../../assets/icon.png')} name={'img2'} />    
                        <Teams imageUri={require('../../assets/icon.png')} name={'img3'} />    
                    </ScrollView>
                </View>
                <Text style={styles.title}>
                    Próximos eventos: 
                </Text> 
                <ScrollView>
                {
                    list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={ { source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        bottomDivider
                    />
                    ))
                }
                </ScrollView>
                <Button
                    title="Visualizar Midia"
                />
                </ScrollView>
        </View>
        
    );

}