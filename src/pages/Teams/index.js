import React, { useState, useEffect } from 'react'; 
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js';
import logoImg from '../../assets/icon.png';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ListItem } from 'react-native-elements';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';



import api from '../../services/api';

import { useNavigation, useRoute } from '@react-navigation/native'



export default function Teams() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadPlayers()
    }, []);

    async function loadPlayers() {
        const response = await api.get('Equips/listPlayers/' + team.id);
        setPlayers(response.data.players);
    }

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
            <ScrollView style={{marginBottom: 60}}>

            <Text>
                    {team.description}
            </Text>

            <Text style={styles.title}>
                    Atletas:
            </Text>
                    {
                    players.map((player) => (
                        <ListItem
                            key={player.id}
                            leftAvatar={{ source: { uri:  player.photo != null ? 
                                "http://volei.wetech.com.br/" + player.photo_dir + player.photo : 
                                defaultImage } }}
                            title={player.name}
                            subtitle={'Data de nascimento:  ' + format(
                                parseISO(player.birth_date), 'dd MMMM yyyy',
                            {locale: pt}) + '\nContato: ' + player.phone + '\nCPF: ' + player.cpf}
                            bottomDivider
                        />
                    ))
                    }
            </ScrollView>
            
        </View>
        
    )
}