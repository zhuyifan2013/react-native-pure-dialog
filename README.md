# react-native-pure-dialog

`react-native-pure-dialog` is a pure js-implemented dialog for react-native platform.

It is a library to show dialog fullscreen or in custom area with an elegant way



**ALL PR and issues are welcomed, I will reply to you at the first time**



### Demo:

![ios](https://github.com/zhuyifan2013/react-native-pure-dialog/blob/master/images/puredialog-ios.gif) ![android](https://github.com/zhuyifan2013/react-native-pure-dialog/blob/master/images/puredialog-android.gif)

### Example:

```javascript
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
```



       

### Usage:

`containerWidth` : The background view width , default is screen width

`containerHeight` : The background view height , default is screen height

`innerView` : The dialog content view, default is located in the center of container view, you should specify the width and height

`onDismiss` :  callback, will be called when the dialog is dismissed



you could get its ref by ` ref={(o) => this.dialog = o}` , then you could use methods below :  

`show()` : show the dialog

`dismiss()` : dismiss the dialog



### TODO:

1. Custom animation
2. support orientation
3. Provide simple dialog could be used directly
4. dialog from bottom