import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'http://resolute-reading.surge.sh'

export default class ResumeBuilder extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }}  />
        )
    }
}