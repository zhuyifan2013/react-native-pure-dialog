import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Example from './Example'

export default class puredialog extends Component {
    render() {
        return (
            <Example/>
        );
    }
}

AppRegistry.registerComponent('puredialog', () => puredialog);
