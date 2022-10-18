import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

const ManageExpense = ({route,navigation}) => {

  const editedExpenseId = route.params?.expenseId; //Drilling a Object

  const isEditing = !!editedExpenseId; // Convert Value into Boolean

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing? "Edit Expense" : "Add Expense"
    });
  },[navigation,isEditing]);


  if(isEditing)
    {

    }


  return (
    <View>
      <Text>Manage Expense Screen</Text>
    </View>
  )
}

export default ManageExpense