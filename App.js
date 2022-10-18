import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllExpense from './screen/AllExpense';
import RecentExpense from "./screen/RecentExpense";
import ManageExpense from "./screen/ManageExpense";
import { GlobalStyles } from './constants/styles';
import {Ionicons} from "@expo/vector-icons";
import IconButton from './components/UI/IconButton';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview(){

  return (
      <BottomTabs.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:GlobalStyles.colors.primary500},
            headerTintColor:'white',
            tabBarStyle:{
              backgroundColor:GlobalStyles.colors.primary500},
            tabBarActiveTintColor:GlobalStyles.colors.accent500,
            headerRight:({tintColor})=>{
                return (
                    <IconButton icon="add" size={24} color={tintColor}/>
                )
            }
      }}>
          <BottomTabs.Screen name="RecentExpenses" component={RecentExpense} 
          options={{
            title:"Recent Expenses",
            tabBarLabel:"Recent",
            tabBarIcon:({color,size})=>{
              return <Ionicons name="hourglass" color={color} size={size} />            
            }
          }}
          />
          <BottomTabs.Screen name="AllExpense" component={AllExpense}
            options={{
              title:"All Expenses",
              tabBarLabel:"All Expenses",
              tabBarIcon:({color,size})=>{
                return <Ionicons name="calendar" color={color} size={size} />            
              }
            }}
          />
      </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ExpensesOverview" component={ExpenseOverview}  
            options={{headerShown:false}}/>
              <Stack.Screen name="ManangeExpense" component={ManageExpense} />
              
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
