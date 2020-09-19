import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'https://www.wolframalpha.com/input/?i=Who+was+George+washington'

export default class ResultsScreen extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }}/>
        )
    }
}
