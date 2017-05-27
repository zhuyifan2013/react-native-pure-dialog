import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import PureDialog from './lib'

export default class Example extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{
                    width: 200,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'orange',
                    borderRadius: 2
                }} onPress={() => this.dialog.showDialog()}>
                    <Text style={{color: '#fff'}}>Show Dialog</Text>
                </TouchableOpacity>
                <PureDialog
                    ref={(o) => {
                        this.dialog = o;
                    }}
                    innerView={() => {
                        return (
                            <View style={{
                                width: 300,
                                height: 200,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 2
                            }}>
                                <Text>This is a pure dialog</Text>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}