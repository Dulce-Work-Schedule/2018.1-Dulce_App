import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
import AGRButton from '../Components/AGRButton';

export default class InitialScreen extends React.Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
                <AGRButton
                            onPress={this.props.onLogoutPress}
                            text="Logout"
                     />
                </ScrollView>
              );
    }
}
