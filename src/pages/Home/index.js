import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Teams from '../../components/teams';
import MoreData from '../../components/moreData';
import logoImg from '../../assets/icon.png';
import defaultShield from '../../assets/padrao.png';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Button, ListItem } from 'react-native-elements';

import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';  
import { userActions } from '../../actions/user.actions';

import api from '../../services/api';
import {useSelector} from 'react-redux';

export default function Home() {
    const [teams, setTeams] = useState([]);
    const [events, setEvents] = useState([]);
    const {user} = useSelector(state => ({user:state.user}));
    console.log(user)

    useEffect(() => {
        loadTeams();
        loadEvents();
        userActions.login("","");
    }, []);

    async function loadTeams() {
        const response = await api.get('equips.json');
        setTeams(response.data.equips);
    }

    
    async function loadEvents() {
        const response = await api.get('events.json');
        setEvents(response.data.events);
    }

    const navigation = useNavigation();

    function navigateToMidia() {
        navigation.navigate('Midias');
    }


    function navigateToNotices() {
        navigation.navigate('Notices');
    }


    function navigateToPartners() {
        navigation.navigate('Partners');
    }

    function navigateToTeams(team) {
        navigation.navigate('Teams', { team });
    }

    return (
        <ScrollView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image source={logoImg} onPress={navigateToTeams} />
                    <Text style={styles.headerText}>
                        TeamViniVôlei
                </Text>         
                    
                </View>

                <Text style={styles.title}>
                    Nossos times:
            </Text>
                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {teams.map((team) =>
                            <TouchableOpacity key={team.id} onPress={() => navigateToTeams(team)}>
                                <Teams imageUri={ team.photo != null ? 
                                    team.photo_dir + team.photo : 
                                    defaultShield } 
                                    name={team.name} />
                            </TouchableOpacity>
                        )}

                    </ScrollView>
                </View>
                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <TouchableOpacity onPress={navigateToNotices}>
                            <MoreData imageUri={require('../../assets/news.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateToMidia}>
                            <MoreData imageUri={require('../../assets/galery.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateToPartners}>
                            <MoreData imageUri={require('../../assets/partners.png')} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <Text style={styles.title}>
                    Próximos eventos:
                </Text>
                <View style={{marginBottom: 60}}>
                    {
                    events.map((event) => (
                        <ListItem
                            key={event.id}
                            leftAvatar={{ source: { uri:  event.photo != null ? 
                                "http://volei.wetech.com.br/" + event.photo_dir + event.photo : 
                                defaultImage } }}
                            title={event.name}
                            subtitle={'De: ' + format(
                                parseISO(event.begin_event), 'dd MMMM yyyy',
                            {locale: pt}) + ' Até: ' + format(
                                parseISO(event.end_event), 'dd MMMM yyyy',
                            {locale: pt})}
                            bottomDivider
                        />
                    ))
                    }
                </View>
            </ScrollView>

        </ScrollView>

    );

}