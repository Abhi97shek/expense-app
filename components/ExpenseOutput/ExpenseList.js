import { FlatList,Text } from 'react-native'
import React from 'react'

const renderExpenseItem = (itemData)=>{
  return (
      <Text>
          {itemData.item.description}
      </Text>
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