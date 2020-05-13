import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
} from "react-native";

class MoreData extends Component{
    render(){
        return (
            <View style={{marginLeft:20,
                borderColor: '#dddddd' }}>
                    <View style={{flex:2}}>
                        <Image source={this.props.imageUri}
                         style={{ width: 80, height: 60}}
                        />
                    </View>
                    
            </View>
        )
    }
}

export default MoreData;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})