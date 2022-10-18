import { View, Text,StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react';
import {Ionicons} from "@expo/vector-icons"
import { GlobalStyles } from '../constants/styles';

const ManageExpense = ({route,navigation}) => {

  const editedExpenseId = route.params?.expenseId; //Drilling a Object

  const isEditing = !!editedExpenseId; // Convert Value into Boolean

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing? "Edit Expense" : "Add Expense"
    });
  },[navigation,isEditing]);


  const deleteExpenseHandler =()=>{


  };

  return (
    <View style={styles.container}> 
      <View style={styles.deleteContainer}>
        {isEditing && <Ionicons name="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>}
      </View>
    </View>
  )
}

export default ManageExpense;

const styles = StyleSheet.create({

  container:{
      flex:1,
      padding:24,
      backgroundColor:GlobalStyles.colors.primary800
  },  

  deleteContainer:{
      marginTop:16,
      paddingTop:8,
      borderTopWidth:2,
      borderTopColor:GlobalStyles.colors.primary200,
      alignItems:'center'
  }


});