import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseContext } from '../store/expense-context';
const AllExpense = () => {

  const expenseCtx = useContext(ExpenseContext);
  return (
      <ExpenseOutput expensePeriod="Total" expenses={expenseCtx.expenses} fallback="No Registered Expenses found"/>
  )
}

export default AllExpense