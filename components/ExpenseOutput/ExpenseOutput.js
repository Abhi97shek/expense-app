import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyles } from '../../constants/styles';



const ExpenseOutput = ({expenses,expensePeriod,fallback}) => {

  let content = <Text style={styles.infoText}>{fallback}</Text>;

  if(expenses.length >0)
    {
      content =  <ExpenseList expenses={expenses}/>;
    }
  return (
    <View style={styles.container}>
        <ExpenseSummary  periodName={expensePeriod} expenses={expenses} />
        {content}
    </View>
  )
}

export default ExpenseOutput;


const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor:GlobalStyles.colors.primary700
  },
  infoText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32
  }

});