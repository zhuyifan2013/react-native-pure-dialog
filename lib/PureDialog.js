/**
 * Created by Yifan Zhu on 2017/5/9.
 * Mail: zhu_yifan@me.com
 */
import React, {
    Component,
} from 'react'

import {
    UIManager,
    LayoutAnimation,
    TouchableWithoutFeedback,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native'

SCREEN_WIDTH = Dimensions.get('window').width;
SCREEN_HEIGHT = Dimensions.get('window').height;

export default class PureDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    showDialog = () => {
        if (this.state.isVisible) {
            return;
        }
        this.setState({
            isVisible: true
        })
    };

    dismissDialog = () => {
        if (!this.state.isVisible) {
            return;
        }
        this.setState({
            isVisible: false
        })
    };

    render() {
        if (!this.state.isVisible) {
            return null;
        }
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: this.props.containerWidth ? this.props.containerWidth : SCREEN_WIDTH,
                    height: this.props.containerHeight ? this.props.containerHeight : SCREEN_HEIGHT,
                }}
                onResponderGrant={(e) => {
                    this.dismissDialog();
                }}
                onStartShouldSetResponder={(e) => {
                    return true;
                }}
                keyboardVerticalOffset={10}>
                <TouchableWithoutFeedback>
                    {this.props.innerView()}
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isVisible && this.props.onDismiss) {
            this.props.onDismiss();
        } else if (this.state.isVisible && this.props.onShow) {
            this.props.onShow();
        }
    };
}