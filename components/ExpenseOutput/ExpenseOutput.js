import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'

const ExpenseOutput = ({expenses}) => {
  return (
    <View>
        <ExpenseSummary />
        <ExpenseList />
    
    </View>
  )
}

export default ExpenseOutput