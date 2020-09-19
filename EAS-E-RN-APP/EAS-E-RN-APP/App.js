import * as React from 'react';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons,MaterialIcons,  Entypo, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import TutorFeedScreen from './screens/FeedList'
import CoursesScreen from './screens/CoursesScreen'
import LearningNavigationScreen from './screens/TLearningNavigationScreen'
import { StyleSheet, Text, View } from 'react-native';
import {IconButton} from 'react-native-paper'
import BiologyToolsScreen from './screens/tools/BiologyTool'
import MathToolsScreen from './screens/tools/MathTool'
import ChemistryToolsScreen from './screens/tools/ChemistryTool'
import ResultsScreen from './screens/tools/Results'
import EnglishToolsScreen from './screens/tools/EnglishTool'
import FrenchToolsScreen from './screens/tools/FrenchTool'
import AddTutorPostFormScreen from './screens/AddTutorPostForm'
import PhysicsToolsScreen from './screens/tools/PhysicsTool'
import SocialStudiesToolsScreen from './screens/tools/SocialStudiesTool'
import SpanishToolsScreen from './screens/tools/SpanishTool'
import CoursesResultsScreen from './screens/CoursesResultsScreen'
import ResumeBuilderScreen from './screens/ResumeBuilderScreen'
import LearningResultsScreen from './screens/LearningResultsScreen'

const textColor = '#fff'
const themeColor = '#FF914D'
const BottomTabs = createMaterialBottomTabNavigator();
const TutorStack = createStackNavigator();
const ToolsStack = createStackNavigator()
const CoursesStack = createStackNavigator()
const NotesStack = createStackNavigator()
const ResumeStack = createStackNavigator()

function TutorSection({navigation}) {
  return (
    <TutorStack.Navigator initialRouteName="Feed"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <TutorStack.Screen name="Feed" component={TutorFeedScreen}
        options={{
          headerTitle: "Tutor Feed",
          headerRight: () => <IconButton
          icon="account-multiple-plus"
          color={textColor}
          size={24}
          animated={true}
          onPress={() =>  navigation.navigate('Add Tutor Post')}
        />
        }}
      />
      <TutorStack.Screen name="Add Tutor Post" component={AddTutorPostFormScreen}
        options={{
          headerTitle: "Add Tutor Post",
        }}
      />
    </TutorStack.Navigator>
  );
}

function ToolsSection({navigation}) {
  return (
    <ToolsStack.Navigator initialRouteName="Learning"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <ToolsStack.Screen name="Learning" component={LearningNavigationScreen}
        options={{
          headerTitle: "Question Answerer",
        }}
      />
      <ToolsStack.Screen name="Math Tools" component={MathToolsScreen}
        options={{
          headerTitle: "Math Tools",
        }}
      />
      <ToolsStack.Screen name="Biology Tools" component={BiologyToolsScreen}
        options={{
          headerTitle: "Biology Tools",
        }}
      />
      <ToolsStack.Screen name="Chemistry Tools" component={ChemistryToolsScreen}
        options={{
          headerTitle: "Chemistry Tools",
        }}
      />
      <ToolsStack.Screen name="English Tools" component={EnglishToolsScreen}
        options={{
          headerTitle: "English Tools",
        }}
      />
      <ToolsStack.Screen name="French Tools" component={FrenchToolsScreen}
        options={{
          headerTitle: "French Tools",
        }}
      />
      <ToolsStack.Screen name="Physics Tools" component={PhysicsToolsScreen}
        options={{
          headerTitle: "Physics Tools",
        }}
      />
       <ToolsStack.Screen name="Social Studies Tools" component={SocialStudiesToolsScreen}
        options={{
          headerTitle: "Social Studies Tools",
        }}
      />
       <ToolsStack.Screen name="Spanish Tools" component={SpanishToolsScreen}
        options={{
          headerTitle: "Spanish Tools",
        }}
      />
      <ToolsStack.Screen name="Query Results" component={LearningResultsScreen}
        options={{
          headerTitle: "Query Results",
        }}
      />
    </ToolsStack.Navigator>
  );
}

function CoursesSection() {
  return (
    <CoursesStack.Navigator initialRouteName="Courses Finder"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <CoursesStack.Screen name="Courses Finder" component={CoursesScreen}
        options={{
          headerTitle: "Find a New Course",
        }}
      />
      <CoursesStack.Screen name="Courses Results" component={CoursesResultsScreen}
        options={{
          headerTitle: "Courses Results",
        }}
      />
    </CoursesStack.Navigator>
  );
}

function ResumeSection({navigation}) {
  return (
    <ResumeStack.Navigator initialRouteName="Res. Builder"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <ResumeStack.Screen name="Res. Builder" component={ResumeBuilderScreen}
        options={{
          headerTitle: "Res. Builder",
        }}
      />
    </ResumeStack.Navigator>
  );
}
export default function App() {
    return (
      <NavigationContainer>
      <BottomTabs.Navigator
      initialRouteName="Feed"
      sceneAnimationEnabled="true"
      activeColor={textColor}
      inactiveColor={textColor}
      barStyle={{ backgroundColor: `${themeColor}` }}
    >
      <BottomTabs.Screen name="Find a Tutor" component={TutorSection} 
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="ios-people" size={24} color={textColor} />
        ),
      }}
      />

      <BottomTabs.Screen name="Question Answer" component={ToolsSection} 
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="question-answer" size={24} color={textColor}/>
        ),
        headerTitle: "Learning Tools",
      }}
      />
      <BottomTabs.Screen name="Courses" component={CoursesSection} 
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="certificate" size={26} color={textColor} />
        ),
      }}
      />
      <BottomTabs.Screen name="Res. Builder" component={ResumeSection} 
      options={{
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="award" size={26} color={textColor} />
        ),
      }}
      />
    </BottomTabs.Navigator>
    </NavigationContainer>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
