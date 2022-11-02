import { View} from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../store/expense-context';
import { getDateMinusDays } from '../util/date';

const AllExpense = () => {
  const expenseCtx = useContext(ExpenseContext);
  const recentExpense = expenseCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today,7);
      if(expense.date > date7DaysAgo)
        {
          console.log(expense);
        }
    return (expense.date > date7DaysAgo) && (expense.date <= today);
  })

  return (
      <ExpenseOutput expenses={recentExpense} expensePeriod="Last 7 Days" fallback="No expense registered for the last 7 Days"/>
  )
}

export default AllExpense