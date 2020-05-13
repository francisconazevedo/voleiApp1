import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

class Teams extends Component{
    render(){
        return (
            <View style={{ borderColor: '#dddddd',flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
             }}>
                    <View style={{flex:2}}>
                        <Image source={this.props.imageUri}
                            style={{ 
                                height: 90,
                                width: 70,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />

                    </View>
                    <View style={{flex:1, paddingLeft:10, paddingTop: 10 }}>
                        <Text> {this.props.name} </Text> 
                    </View>
            </View>
        )
    }
}

export default Teams;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})