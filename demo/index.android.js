/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

//引入测试js文件
import TestWebView from './js/TestWebView'

export default class demo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TestWebView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%', width: '100%',
    }
});

AppRegistry.registerComponent('demo', () => demo);
