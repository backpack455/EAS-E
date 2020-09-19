
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView, Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
const name='Om Joshi'
const image = '../assets/splash.png'
const text = 'Example Text'
const url = 'google.com'
export default function ResultsScreen({navigation, route}){
    const {queryText} = route.params 
    return (
        <ScrollView>
            <View style={styles.card}>
                <Text style={styles.resultTitle}></Text>
                <Image
              style={styles.image}
              source={{
                uri: 'http://api.wolframalpha.com/v1/simple?appid=6H253Q-YUP5Q62A8Q&i=' + encodeURI(queryText),
              }}
            />
                <TouchableOpacity
                style={styles.registerButton}
                onPress={() => Linking.openURL(`https://www.wolframalpha.com/input/?i=${queryText}`)}
                >
                <Text style={styles.registerText}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  icon: {
    left: 160,
    bottom: 60,
  },
  infoText: {
    fontFamily: "Avenir",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    top: 25,
  },
  resultTitle: {
    fontFamily: "Avenir",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    top: 0,
  },
  image: {
    width: 340,
    height: Dimensions.get('window').height
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    height: "120%",
    borderRadius: 15,
    alignItems: "center",
    top: -30,
    padding: 40,
  },
  registerText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  registerButton: {
    backgroundColor: "#FF914D",
    width: 271,
    height: 65,
    borderRadius: 7,
    justifyContent: "center",
    marginTop: 40,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.8,
    padding: 30,
    top: 20,
  },
  subtext: {
    color: "#5A5A5A",
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    top: 31,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F8FAFB",
    top: 30,
  },
});
