import { View, StyleSheet,Text } from 'react-native'
import React from 'react';
import Input from './Input';

const ExpenseForm = () => {

  const amountChangeHanlder =()=>{};
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
      <View style={styles.basicInput}>
          <Input label="Amount" 
            style={styles.rowInput}
          textInputConfig={{
              keyboardType:'decimall-pad',
              onChangeText:amountChangeHanlder
          }}/>
          <Input label="Date" 
             style={styles.rowInput}
          textInputConfig={{
            placeholder:"YYYY-MM-DD",
            maxLength:10,
            onChangeText:()=>{}
          }}/>
      </View>
      <Input label="Description" textInputConfig={
        {
          multiline:true
        }
      }/>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({

    basicInput:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowInput:{
      flex:1
    },
    form:{
      marginTop:40
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'white',
      marginVertical:24,
      textAlign:'center'
    }

});