import { View, Text,StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react';
import {Ionicons} from "@expo/vector-icons"
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpenseContext } from '../store/expense-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

const ManageExpense = ({route,navigation}) => {

  const editedExpenseId = route.params?.expenseId; //Drilling a Object

  const expenseCtx = useContext(ExpenseContext);

  const isEditing = !!editedExpenseId; // Convert Value into Boolean

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing? "Edit Expense" : "Add Expense"
    });
  },[navigation,isEditing]);


  const deleteExpenseHandler =()=>{
    console.log(editedExpenseId);
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = ()=>{

    navigation.goBack();
  };

  const confirmHandler= ()=>{
    if(isEditing)
      {
        expenseCtx.updateExpense(editedExpenseId,{
          description:'Test!!!!!!!!!!',
          amount:29.99,
          date : new Date('2022-05-20')
        });
      }
      else
      {
        expenseCtx.addExpense({
          description:'Test',
          amount:19.99,
          date : new Date('2022-05-19')
        });
      }

    navigation.goBack(); 
  };

  return (
    <View style={styles.container}> 
      <ExpenseForm />
    <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>Cancel</Button>
        <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update': 'Add'}</Button>
    </View>
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
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }


});