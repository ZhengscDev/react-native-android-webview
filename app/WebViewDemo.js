/**
 * Created by zhengshichao1 on 2017/6/22.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    WebView,
    View,
    StatusBar,
    Alert,
    Platform,
    BackAndroid,
    ToastAndroid
} from 'react-native'

//引入WebViewAndroid lib
import WebViewAndroid from './libs/WebViewAndroid'
const WEBVIEW_REF = 'webview';

export default class WebViewDemo extends Component {

    _onLoadStart = ()=> {
        console.log('------_onLoadStart---->>')
    }

    _onLoadError = ()=> {
        console.log('------_onLoadError---->>')
    }

    _onLoadSuccess = ()=> {
        console.log('------_onLoadSuccess---->>')
    }

    onShouldStartLoadWithRequest = (event) => {
        var url = event.url;
        console.log('-------onShouldStartLoadWithRequest-------url----------' + url);
        if (url && url.length) {
            if (url.indexOf('news.baidu') >= 0) {
                console.log('-------被拦截----------');
                const {navigate} = this.props.navigation;
                navigate('InterceptResultPage');
                return false;
            }
        }
        console.log('-------未拦截住url----------');
        return true;
    };

    render() {
        // console.log('this.props.navigation.state.url------->' + this.props.navigation.state.params.url);
        return (
            <View style={{height:'100%'}}>

                <WebViewAndroid
                    ref={WEBVIEW_REF}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onLoadStart={() => this._onLoadStart()}
                    onError={() => this._onLoadError()}
                    onLoad={() => this._onLoadSuccess()}
                    injectFilterInterceptArray={["news.baidu"]}
                    allowInterceptUrl={true}
                    style={{
                        backgroundColor:'#FFFFFF',
                        margin: 0
                    }}
                    source={{
                        uri: 'http://www.baidu.com'
                    }}
                    scalesPageToFit={false}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                />
            </View>
        );
    }
}


