import { View,Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const IconButton = ({icon,size,color,onPress}) => {

    const navigation = useNavigation();

    const addExpenseHandler = ()=>{

        navigation.navigate('ManangeExpense');

    };

  return (
            <Pressable onPress={addExpenseHandler} style={({pressed})=> pressed && styles.pressed }>
                <View style={styles.buttonContainer}>
                      <Ionicons name={icon} size={size} color={color} />  
                </View>
            </Pressable>
  )
}

export default IconButton;

const styles =StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        margin:8
    },
    pressed:{
        opacity:0.75
    }
})