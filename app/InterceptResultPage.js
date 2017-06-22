/**
 * Created by zhengshichao1 on 2017/6/22.
 */

import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
//第一个页面
export default class InterceptResultPage extends Component {

    static navigationOptions = {
        title: 'url被拦截结果页',
    };

    render() {
        return (
            <View>
                <Text>被拦截结果页</Text>
            </View>
        );
    }
}