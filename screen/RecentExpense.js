import { View} from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'

const AllExpense = () => {
  return (
    <View>
      <ExpenseOutput expensePeriod="Last 7 Days"/>
    </View>
  )
}

export default AllExpense