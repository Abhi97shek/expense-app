import { FlatList,Text } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = (itemData)=>{
  return (
      <ExpenseItem {...itemData.item}/>
      // <Text>
      //     {itemData.item.description}
      // </Text>
  )
}; 


const ExpenseList = ({expenses}) => {
  return (
    <FlatList  data={expenses} 
    renderItem={renderExpenseItem}
    keyExtractor={(item)=> item.id}
    />
  )
}

export default ExpenseList