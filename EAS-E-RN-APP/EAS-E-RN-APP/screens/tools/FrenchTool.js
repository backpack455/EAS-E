import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'https://lean-jobs.tribe.so'

export default class FrenchTool extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }} onLoadEnd={() =>this.setState({isLoaded: true})} />
        )
    }
}
