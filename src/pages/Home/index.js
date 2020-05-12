import React, { useEffect, useState } from 'react'; 
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Teams from '../../components/teams';
import MoreData from '../../components/moreData';
import logoImg from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native'

import { Button, ListItem } from 'react-native-elements';

import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
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
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        loadTeams
    },[]);

    async function loadTeams(){
        const response = await api.get('equips.json');
        setTeams(response.data.equips);
    }

    const navigation = useNavigation();

    function navigateToMidia(){
        navigation.navigate('Midias');
    }

    
    function navigateToNotices(){
        navigation.navigate('Notices');
    }

    
    function navigateToPartners(){
        navigation.navigate('Partners');
    }

    function navigateToTeams(id){
        navigation.navigate('Teams');
    }
    
    return (
        <ScrollView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image source={logoImg} onPress={navigateToTeams}/>
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

                    {teams.map((team)=> 
                        <TouchableOpacity onPress={navigateToTeams(team.id)}>
                            <Teams imageUri={`http://volei.wetech.com.br/` + time.photo_dir + time.photo} name={time.name} />    
                        </TouchableOpacity>
                    )  }
                         
                    </ScrollView>
                </View>
                <Text style={styles.title}>
                    Próximos eventos: 
                </Text> 
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
            <View style={{ marginBottom:60, marginTop: 20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <TouchableOpacity onPress={navigateToNotices}>
                                <MoreData imageUri={require('../../assets/news.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={navigateToMidia}>
                                <MoreData imageUri={require('../../assets/galery.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={navigateToPartners}>
                                <MoreData imageUri={require('../../assets/partners.png')}/>
                            </TouchableOpacity>
                    </ScrollView>
            </View>
        </ScrollView>
        
    );

}