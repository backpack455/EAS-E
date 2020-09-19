import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'http://erratic-border.surge.sh/math.html'
console.disableYellowBox = true;
export default class MathTool extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }}  />
        )
    }
}