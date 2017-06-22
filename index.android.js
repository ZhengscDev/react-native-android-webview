/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

import WebViewDemo from './app/WebViewDemo';
import InterceptResultPage from './app/InterceptResultPage';

//第一个页面
class FirstPage extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{width:'100%',height:'100%'}}>
                <Text>我是第一个页面</Text>

                <Button
                    onPress={() => navigate('SecondPage',{url:'http://www.baidu.com'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

export default class SecondPage extends React.Component {

    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        )
    }
}


const App = StackNavigator({
    FirstPage: {
        screen: WebViewDemo
    },
    // SecondPage: {screen: WebViewDemo},
    InterceptResultPage: {screen: InterceptResultPage},
});

AppRegistry.registerComponent('react-native-webview-android', () => App);
