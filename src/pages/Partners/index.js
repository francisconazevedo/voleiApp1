import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import styles from './styles.js';
import logoImg from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { TouchableScale } from 'react-native-touchable-scale'; 


export default function Partners() {

    const [partners, setPartners] = useState([]);
    useEffect(() => {
        loadPartners()
    }, []);

    async function loadPartners() {
        const response = await api.get('partners.json');
        setPartners(response.data.partners);
    }

    const navigate = useNavigation()
    function navigateBack() {
        navigate.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Parceiros
                </Text>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={20} color="#48619D" />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
                {
                    partners.map((partner) => (
                        <ListItem
                            key={partner.id}
                            onPress={()=>{ Linking.openURL(partner.link)}}
                            leftAvatar={{ source: { uri: partner.photo != null ? 
                                "http://volei.wetech.com.br/" + partner.photo_dir + partner.photo : 
                                defaultImage } }}
                            title={partner.name}
                            subtitle={partner.subtitle}
                            bottomDivider
                        />
                    ))
                }
            </View>
        </View>
    )
}