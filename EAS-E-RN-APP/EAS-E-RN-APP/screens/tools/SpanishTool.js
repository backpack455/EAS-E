import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'https://lean-jobs.tribe.so'

export default class SpanishTool extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }}/>
        )
    }
}