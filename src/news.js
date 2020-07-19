import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class News extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: this.props.uri
        }}
       
      />
    );
  }
}