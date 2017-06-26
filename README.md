# react-native-android-webview
解决React Native 自带的WebView组件不能拦截URL的问题


##Installation
`npm install react-native-android-webview --save`

##Manual Native Library Linking

###Android
1. Add the following lines to `android/settings.gradle`:

    ```gradle
    include ':react-native-android-webview'
    project(':react-native-android-webview').projectDir = new File(settingsDir, '../node_modules/react-native-android-webview')
    ```
    
2. Add the compile and resolutionStrategy line to the dependencies in `android/app/build.gradle`:

    ```gradle
    dependencies {
        compile project(':react-native-android-webview')
    }
    ```
3. Add the import and link the package in `MainApplication.java`:

    ```java
    import com.zsc.RNWebViewPackage;  <-- add this import

    public class MainApplication extends Application implements ReactApplication {
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RNWebViewPackage() // <-- add this line
            );
        }
    }
    ```
    
4. Ensure Android SDK versions.  Open your app's `android/app/build.gradle` file.  Ensure `compileSdkVersion` and `targetSdkVersion` are 23.  Otherwise you'll get compilation errors.

## Usage
1. import 
```
import WebViewAndroid from 'react-native-android-webview'
```
2. custom intercept func `onShouldStartLoadWithRequest`
```
onShouldStartLoadWithRequest = (event) => {
        var url = event.url;
        if (url && url.length) {
            if (url.indexOf('news.baidu') >= 0) {
                alert('被拦截')
                return false;
            }
        }
        return true;
    };
```
3. UI add `WebViewAndroid` Component
```
render() {
        return (
            <View style={styles.container}>

                <WebViewAndroid
                    ref={'webview'}
                    injectFilterInterceptArray={["news.baidu"]}
                    allowInterceptUrl={true}
                    style={{
                        backgroundColor:'#ffffff'
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
```