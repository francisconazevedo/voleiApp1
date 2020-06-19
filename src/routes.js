import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import Teams from './pages/Teams';
import Events from './pages/Events';
import Notices from './pages/Notices';
import Midias from './pages/Midias';
import Partners from './pages/Partners';
import Athletes from './pages/Athletes';
import Notifications from './pages/Notifications';



export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component ={Home}/>
                <AppStack.Screen name="Login" component ={Login}/>
                <AppStack.Screen name="Midias"component ={Midias}/>
                <AppStack.Screen name="Teams"component ={Teams}/>
                <AppStack.Screen name="Notices"component ={Notices}/>
                <AppStack.Screen name="Partners"component ={Partners}/>
                <AppStack.Screen name="Notifications"component ={Notifications}/>
                <AppStack.Screen name="Athletes"component ={Athletes}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}