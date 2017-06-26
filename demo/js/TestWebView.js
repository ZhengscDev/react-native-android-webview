/**
 * Created by zhengshichao1 on 2017/6/22.
 */
import React, {Component} from 'react'
import {
    View
} from 'react-native'

//引入WebViewAndroid lib
import WebViewAndroid from 'react-native-android-webview'
const WEBVIEW_REF = 'webview';

//被拦截的url包含的字符串，此处可以写完整的url
const INTERCEPT_URL = 'news.baidu';


export default class TestWebView extends Component {

    _onLoadStart = () => {
        console.log('------_onLoadStart---->>')
    }

    _onLoadError = () => {
        console.log('------_onLoadError---->>')
    }

    _onLoadSuccess = () => {
        console.log('------_onLoadSuccess---->>')
    }

    /**
     * 在此方法中根据设置拦截的url，去做相应的逻辑
     * @param event
     * @returns {boolean}
     */
    onShouldStartLoadWithRequest = (event) => {
        var url = event.url;
        console.log('------------url----------' + url);
        if (url && url.length) {
            if (url.indexOf('news.baidu') >= 0) {
                alert(INTERCEPT_URL + '被拦截');
                return false;
            }
        }
        console.log('-------未拦截住url----------');
        return true;
    };

    render() {
        return (
            <View style={{height:'100%',width:'100%'}}>

                <WebViewAndroid
                    ref={WEBVIEW_REF}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onLoadStart={() => this._onLoadStart()}
                    onError={() => this._onLoadError()}
                    onLoad={() => this._onLoadSuccess()}
                    injectFilterInterceptArray={[INTERCEPT_URL]}
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


