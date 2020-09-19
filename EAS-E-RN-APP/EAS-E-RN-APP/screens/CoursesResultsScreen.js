import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'https://slate-forum.tribe.so/topics'

export default function ResultsScreen({navigation, route}){
    const {queryText} = route.params 
    return (
        <WebView source={{uri: 'https://classpert.com/search?q='+queryText}}/>
    );
}