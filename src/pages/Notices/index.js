import React, { useEffect, useState } from 'react'; 
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, Button, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import logoImg from '../../assets/icon.png';
import api from '../../services/api';
import defaultImage from '../../assets/defaultimage.jpg';
import styles from './styles.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Notices() {


    const [notices, setNotices] = useState([]);
    
    useEffect(() => {
        loadNotices()
    }, []);

    async function loadNotices() {
        const response = await api.get('news.json');
        setNotices(response.data.news);
    }

    const navigate = useNavigation();
    function navigateBack(){
        navigate.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Noticias
                </Text>
                <TouchableOpacity onPress={navigateBack}>
                <Feather name='arrow-left' size={20} color="#48619D" />
                </TouchableOpacity>
            </View> 
            
            <View >
                {notices.map((notice)=> 
                <Card key={notice.id}
                    image={{ uri:  notice.photo != null ? 
                        "http://volei.wetech.com.br/" + notice.photo_dir + notice.photo : 
                        defaultImage }}>
                    <Text style={{marginBottom: 10}}>
                        {notice.description}
                    </Text>
                    <Button title="Ler mais" onPress={ ()=>{ Linking.openURL(notice.link)}} />
                </Card>)}
                

            </View>
        </ScrollView>
        
    )
}