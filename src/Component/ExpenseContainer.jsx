import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm.jsx'
import History from './History.jsx'
import {v4 as uid} from "uuid";
import BalanceContainer from './BalanceContainer.jsx';
function ExpenseContainer(){
  /*const EXPENSE=[
    {
      id:uid(),
      title:"Expense 1",
      amount: 100,
    },{
      id:uid(),
      title:"Expense 2",
      amount: -200,
    }

  ]*/
const [expense,setExpense]=useState([])
const fetchExpense=async()=>{
  try{
    const response=await fetch('https://expense-backend-cn25.onrender.com/Expense')
    const data=await response.json()
    setExpense(data)
  }catch(error){
    console.error('failed to fetch data',error)

  }
}
useEffect(()=>{
  fetchExpense();
},[])

const addExpense=async(title,amount)=>{
  try{
    const response=await fetch('https://expense-backend-cn25.onrender.com/Expense/${id}',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({title,amount}),
    });
    if(response.ok){
      const newItem=await response.json();
      setExpense((prev)=>[...prev,newItem])
    }else{
      console.error('failed to fetch')
    }
   
  }catch(error){
    console.error('failed to add expense',error)
  }
}
/*const addExpense=(title,amount)=>{
    setExpense([
        ...expense,{
            id: uid(),
            title,
            amount,
        },
    ]);
}*/
console.log(expense[0])
     const deleteExpense = async (id) => {
    try {
      const response = await fetch(`https://expense-backend-cn25.onrender.com/Expense`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExpense((prev) => {
          const updated = [...prev];
          const index = updated.findIndex((exp) => exp._id === id);
          if (index !== -1) {
            updated.splice(index, 1);
          }
          return updated;
        });
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error while deleting expense:', error);
    }
  };

  return ( 
    
    <div className='expense-container'>
    
      <h1>Expense Tracker</h1>
      <BalanceContainer expense={expense}/>
      
        
        <History expense={expense} deleteExpense={deleteExpense}/>
        <ExpenseForm addExpense={addExpense}/>
    </div>
  )
}
export default ExpenseContainer